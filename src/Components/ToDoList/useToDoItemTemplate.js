import { useCallback, useEffect, useState } from "react";

import ToDoItem from "./ToDoItem";
import useToDoList from "./useToDoList";

function useToDoItemTemplate() {
  const { list, addToList, delFromList, setList } = useToDoList();
  const {
    list: completed,
    addToList: addToCompleted,
    delFromList: defFromCompleted,
    setList: setCompleted,
  } = useToDoList();

  //LOCAL STORAGE----------------------------------------------START
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    const localList = localStorage.getItem("list");

    if (localList) {
      setList(JSON.parse(localList));
    } else {
      setList([]);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("list", JSON.stringify(list));
    }
  }, [list]);

  useEffect(() => {
    const localListCompleted = localStorage.getItem("completed");
    if (localListCompleted) {
      setCompleted(JSON.parse(localListCompleted));
    } else {
      setCompleted([]);
    }
  }, [isMounted]);

  //todo: aggiustare sotto

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("completed", JSON.stringify(completed));
    }
  }, [completed]);

  //LOCAL STORAGE-------------------------------------------------END

  const [input, setInput] = useState("");

  const inputChangeHandler = useCallback((ev) => {
    setInput(ev.target.value);
  }, []);

  const listOfToDo = list.map((item, index) => {
    return (
      <ToDoItem
        key={index}
        id={index}
        toDo={item}
        del={() => {
          delFromList(index);
        }}
        addTComp={() => addToCompleted(item)}
        addTList={() => addToList(item)}
        completed={false}
      />
    );
  });

  const listOfToDoCompleted = completed.map((item, index) => {
    return (
      <ToDoItem
        key={index}
        toDo={item}
        del={() => {
          defFromCompleted(index);
        }}
        addTComp={() => addToCompleted(item)}
        addTList={() => addToList(item)}
        completed={true}
      />
    );
  });

  return {
    input,
    inputChangeHandler,
    addToList,
    setInput,
    list,
    listOfToDo,
    completed,
    listOfToDoCompleted,
  };
}

export default useToDoItemTemplate;

import { useCallback } from "react";
import { useState } from "react";

function useToDoList() {
  const [list, setList] = useState([]);

  const addToList = useCallback(
    (todo) => {
      setList([...list, todo]);
    },
    [list]
  );

  const delFromList = useCallback(
    (id) => {
      list.splice(id, 1);
      setList([...list]);
    },
    [list]
  );

  return { list, addToList, delFromList, setList };
}

export default useToDoList;

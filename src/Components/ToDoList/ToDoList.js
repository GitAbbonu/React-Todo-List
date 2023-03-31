import "./toDoList.css";
import useToDoItemTemplate from "./useToDoItemTemplate";

function ToDoList() {
  const {
    input,
    inputChangeHandler,
    addToList,
    setInput,
    list,
    listOfToDo,
    completed,
    listOfToDoCompleted,
  } = useToDoItemTemplate();

  return (
    <div className="container">
      <h2>📝 Todo List</h2>
      <div className="container-input">
        <input
          placeholder="Write something todo"
          value={input}
          onChange={inputChangeHandler}
        />
        <button
          onClick={() => {
            if (input !== "") {
              addToList(input);
              setInput("");
            }
          }}
        >
          &#10148;
        </button>
      </div>
      <div>{listOfToDo}</div>

      <div className="container-completed">
        {completed.length > 0 ? (
          <h3>
            Completed: {completed.length}/{list.length + completed.length}
          </h3>
        ) : (
          ""
        )}
        <div>{listOfToDoCompleted}</div>
      </div>
    </div>
  );
}

export default ToDoList;

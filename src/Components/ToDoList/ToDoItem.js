import { useCallback, useEffect, useState } from "react";
import "./toDoItem.css";

function ToDoItem(props) {
  const [input, setInput] = useState(props.completed);

  const inputChangeHandler = useCallback((ev) => {
    setInput(ev.target.checked);
  }, []);

  useEffect(() => {
    if (input === true) {
      props.del();
      setInput(props.completed);
      props.addTComp();
    } else {
      props.del();
      setInput(props.completed);
      props.addTList();
    }
  }, [input]);

  return (
    <div
      style={input ? { background: "rgba(124, 240, 88, 0.785)" } : {}}
      className="container-item"
    >
      <div>
        <input
          type={"checkbox"}
          checked={input}
          onChange={inputChangeHandler}
        />
        <h5 style={input ? { textDecoration: "line-through" } : {}}>
          {props.toDo}
        </h5>
      </div>

      <div>
        <button onClick={props.del}>&#10005;</button>
      </div>
    </div>
  );
}

export default ToDoItem;

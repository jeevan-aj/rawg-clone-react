import { useReducer } from "react";
import TaskReducer from "./Reducers/TaskReducer";

function TaskLIst() {
  const [task, dispatch] = useReducer(TaskReducer, []);
  console.log(task.length);
  return (
    <div className="mx-5">
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "task" + Date.now() },
          })
        }
        className="btn btn-primary"
      >
        Add
      </button>
      <ul className="">
        {task.map((cur) => (
          <li
            key={cur.id}
            className="border 1px solid grey p-2  rounded d-flex justify-content-between m-3"
          >
            <span className="flex-grow-1">{cur.title}</span>
            <button
              onClick={() => dispatch({ type: "DELETE", id: cur.id })}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskLIst;

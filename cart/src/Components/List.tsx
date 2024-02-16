import { useContext } from "react";
import ListConetxt from "../context/ListContext";

function List() {
  const { tasks, dispatch } = useContext(ListConetxt);

  return (
    <>
      <button
        className="btn btn-primary mx-auto align-baseline"
        onClick={() =>
          dispatch({
            type: "Add",
            task: { id: Date.now(), title: "task" + Date.now() },
          })
        }
      >
        add
      </button>
      <ul className="list-group ">
        {tasks.map((cur) => (
          <li className="list-group-item m-1 d-flex justify-content-between" key={cur.id}>
            <span>{cur.title}</span>
            <button className="btn btn-danger" onClick={() => dispatch({ type: "Delete", id: cur.id })}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;

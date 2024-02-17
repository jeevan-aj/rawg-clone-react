import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/index";

function App() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter app</h1>
      <h2>{state}</h2>
      <button onClick={() => dispatch(actions.increment())}>increment</button>
      <button onClick={() => dispatch(actions.decrement())}>decrement</button>
      <button onClick={() => dispatch(actions.addBy(20))}>decrement</button>
    </>
  );
}

export default App;

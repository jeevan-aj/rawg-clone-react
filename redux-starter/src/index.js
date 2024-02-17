import store from "./store";
import { bugAdd, bugRemove } from "./actionCreator";
const unsubscribe = store.subscribe(() => {
  console.log("changed", store.getState());
});

store.dispatch(bugAdd("bug 2"));

unsubscribe();

store.dispatch(bugRemove(1));

console.log(store.getState());

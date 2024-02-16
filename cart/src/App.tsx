import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import { useReducer } from "react";
import ListReducer from "./reducer/ListReducer";
import ListConetxt from "./context/ListContext";
import SignupReducer from "./reducer/SignupReducer";
import SignupContext from "./context/SignupContext";

function App() {
  const [tasks, dispatch] = useReducer(ListReducer, []);
  const [state, Auth] = useReducer(SignupReducer, "");

  return (
    <>
    <SignupContext.Provider value={{state,Auth}}>
      <ListConetxt.Provider value={{ tasks, dispatch }}>
        <Navbar />
        <HomePage />
      </ListConetxt.Provider>
      </SignupContext.Provider>
    </>
  );
}

export default App;

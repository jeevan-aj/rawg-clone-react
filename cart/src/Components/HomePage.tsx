import { useContext } from "react";
import List from "./List";
import SignupContext from "../context/SignupContext";

function HomePage() {
  const { state } = useContext(SignupContext);
  return (
    <div className="vh-100 border border-success mt-2">
      <h1>This is home page</h1>
      <div className="d-flex justify-content-evenly p-5 ">
        <h2 className="text-danger">{state}</h2>
        <div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

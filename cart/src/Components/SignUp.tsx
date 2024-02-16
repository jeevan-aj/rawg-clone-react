import { useContext } from "react";
import SignupContext from "../context/SignupContext";

function SignUp() {
  const { state, Auth } = useContext(SignupContext);
  if (state) {
    return (
      <div className="d-flex justify-content-between">
        <button onClick={() => Auth({ type: "logout" })}>logout</button>
      </div>
    );
  } else {
    return (
      <>
        <button onClick={() => Auth({ type: "signup", name: "jeevan" })}>
          SignUp
        </button>
      </>
    );
  }
}

export default SignUp;

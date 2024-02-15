import { useReducer } from "react";
import SignupReducer from "./Reducers/SignupReducer";
import { Card, CardFooter, CardHeader } from "@chakra-ui/react";

const Signup = () => {
  const [state, dispatch] = useReducer(SignupReducer, "");
  if (state)
    return (
      <div className="d-flex flex-column  w-50 vh-100">
        <Card height={"200px"}>
          <CardHeader>{state}</CardHeader>
          <CardFooter>
            <button
              className="btn btn-danger w-25"
              onClick={() => dispatch({ type: "logout" })}
            >
              logout
            </button>
          </CardFooter>
        </Card>
      </div>
    );

  return (
    <>
      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "signup", name: "jeevan" })}
      >
        sign UP
      </button>
    </>
  );
};

export default Signup;

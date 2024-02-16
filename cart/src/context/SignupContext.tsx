import React, { Dispatch } from "react";
import { AuthType } from "../reducer/SignupReducer";

interface SignupContextType{
    state:string;
    Auth:Dispatch<AuthType>
}

const SignupContext = React.createContext<SignupContextType>({} as SignupContextType)

export default SignupContext
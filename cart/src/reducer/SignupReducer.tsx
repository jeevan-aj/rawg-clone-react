
interface SignUp{
    type:'signup'
    name:string;
}

interface Logout{
    type:'logout'
}

export type AuthType = SignUp | Logout;



function SignupReducer(state:string,input:AuthType){
  if(input.type ==='signup'){
    return  input.name
  }
  if(input.type === 'logout'){
    return  ''
  }
  return state;
}

export default SignupReducer
interface signup {
    type:'signup',
    name:string
}

interface logout {
    type:'logout'
}

type Auth  = signup | logout

function SignupReducer(state:string,action:Auth)  {
    if(action.type==='signup') return action.name
    if(action.type ==='logout') return ''
    return state
}

export default SignupReducer
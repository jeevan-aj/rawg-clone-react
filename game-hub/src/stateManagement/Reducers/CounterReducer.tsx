interface Action{
    type:'INCREMENT' | 'DECREMENT' | 'RESET';
}

function CounterReducer(state:number,action:Action) {
        if(action.type ==='INCREMENT') return state+1;
        if(action.type ==='DECREMENT') return state-1;
        if(action.type === 'RESET') return state = 0
        return state
}

export default CounterReducer
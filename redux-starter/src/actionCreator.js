import * as action from './actoinsType'

export function bugAdd (description){
    return {
        type:action.BUG_ADDED,
        payload:{
            description:description
        }
    }
}

export function bugRemove (id) {
    return {
        type:action.BUG_REMOVED,
        payload:{
            id:id
        }
    }
}
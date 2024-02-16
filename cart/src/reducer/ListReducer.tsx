
interface Delete{
    type:'Delete'
    id:number
}
interface Add{
    type:'Add';
    task:Task
}

export type TaskAction =  Add | Delete

export interface Task{
    id:number;
    title:string;
}

function ListReducer(tasks:Task[],action:TaskAction):Task[]{
    
    if(action.type === "Add"){
        return [action.task,...tasks]
    }
    if(action.type === "Delete"){
        return tasks.filter(cur=> cur.id !== action.id)
    }
    return tasks
}

export default ListReducer
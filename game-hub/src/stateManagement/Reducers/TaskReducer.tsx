

export interface Task {
    id: number;
    title: string;
  }

 interface AddTask{
    type:'ADD'
    task:Task
 }
interface DeleteTask{
    type:'DELETE'
    id:number;
}  

export type TaskAction = AddTask | DeleteTask

const TaskReducer = (task:Task[],action:TaskAction): Task[] => {
    if(action.type === 'ADD'){
        return [action.task,...task]
    }
    if(action.type === 'DELETE'){
        return task.filter(cur=> (
            cur.id !== action.id
        ))
    }
    return task
}

export default TaskReducer
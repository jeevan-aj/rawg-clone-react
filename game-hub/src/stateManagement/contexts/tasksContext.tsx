import { Dispatch } from "react";
import { Task, TaskAction } from "../Reducers/TaskReducer";
import React from "react";

interface TaskContextType{
    task:Task[]
    dispatch:Dispatch<TaskAction>

}

const TaskContext =  React.createContext<TaskContextType>({} as  TaskContextType)

export default TaskContext
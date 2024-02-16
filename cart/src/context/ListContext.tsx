import React, { Dispatch } from "react";
import { Task, TaskAction } from "../reducer/ListReducer";

interface ListContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const ListConetxt = React.createContext<ListContextType>({} as ListContextType);

export default ListConetxt;

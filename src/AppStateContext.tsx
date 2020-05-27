import React,{  createContext, useReducer, useContext } from "react";
import {findItemIndexById} from "./utils/findItemIndexById"
import { v4 as uuidv4 } from 'uuid';

type Action = 
| {
    type: "ADD_LIST"
    payload: string
} | {
    type: "ADD_TASK"
    payload: { text: string; taskId: string }
}

interface AppStateContextProps{state: AppState}

interface AppStateContextProps {
    state: AppState
    dispatch: React.Dispatch<any>
  }
  
interface Task {
    id: string,
    text: string
}

interface List {
    id: string,
    title: string,
    tasks: Task[]
}

const  appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type){
        case "ADD_LIST":{
            return {
                ...state,
                lists:[
                    ...state.lists,
                    {id: uuidv4(), title: action.payload, tasks: []}
                ]
            }
        }
        case "ADD_TASK":{
            const targetLaneIndex = findItemIndexById(state.lists, action.payload.taskId) 
            state.lists[targetLaneIndex].tasks.push({id: uuidv4(), text: action.payload.text});
            return {
                ...state
            }
        }
        default: {
            return state
        }
    }
};

const appData: AppState = {
    lists:[
        {
            id: "0",
            title: "To Do this thing",
            tasks:[{id:"c0",text:"Generate app scaffold2"},{id:"c09",text:"Generate app scaffold2"},{id:"c09",text:"Generate app scaffold2"},{id:"c09",text:"Generate app scaffold2"},{id:"c09",text:"Generate app scaffold2"},{id:"c09",text:"Generate app scaffold2"}]
        },
        {
            id:"1",
            title:"In Progress",
            tasks:[{id:"c2",text:"Learn Typescript more stuff here"}]
        },
        {
            id:"2",
            title:"Done",
            tasks:[{id:"c3",text:"Begin to use static typing"}]
        }
    ]
};

const AppStateContext =  createContext<AppStateContextProps>({} as AppStateContextProps);

export interface AppState {
    lists: List[]
}

export const useAppState = () => {
    return useContext(AppStateContext);
}

export const AppStateProvider = ({children}: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer (appStateReducer, appData);

    return (
        <AppStateContext.Provider value={{state, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
}

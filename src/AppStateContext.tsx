import React,{  createContext, useReducer, useContext } from "react";

const appData: AppState = {
    lists:[
        {
            id: "0",
            title: "To Do this thing",
            tasks:[{id:"c0",text:"Generate app scaffold"}]
        },
        {
            id:"1",
            title:"In Progress",
            tasks:[{id:"c2",text:"Learn Typescript"}]
        },
        {
            id:"2",
            title:"Done",
            tasks:[{id:"c3",text:"Begin to use static typing"}]
        }
    ]
};

interface Task {
    id: string,
    text: string
}

interface List {
    id: string,
    title: string,
    tasks: Task[]
}

export interface AppState {
    lists: List[]
}
interface AppStateContextProps{state: AppState}

const AppStateContext =  createContext<AppStateContextProps>({} as AppStateContextProps);

export const useAppState = () => {
    return useContext(AppStateContext);
}

export const AppStateProvider = ({children}: React.PropsWithChildren<{}>) => {
    return (
        <AppStateContext.Provider value={{state: appData}}>
            {children}
        </AppStateContext.Provider>
    )
}


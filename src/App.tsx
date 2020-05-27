import React from "react";
import {Column} from "./Column";
import {AddNewItem} from "./AddNewItem";
import {AppContainer} from "./styles";
import {useAppState} from './AppStateContext';

const App = () => {
    const {state, dispatch} = useAppState();
    return (
        <AppContainer>
            {state.lists.map(( list, i ) => ( 
            <Column title={ list.title }
                key={ list.id } 
                id={list.id}
                index={i}
                />))}
             
            <AddNewItem toggleButtonText="+ Add another list" onAdd={text=> dispatch({type: "ADD_LIST", payload: text})} />
        </AppContainer>
    );
};

export default App;

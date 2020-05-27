import React from "react";
import {AddNewItem} from "./AddNewItem";
import {useAppState} from './AppStateContext'
import {ColumnTitle, ColumnContainer} from "./styles";
import { Card } from "./Card";

interface ColumnProps {
    title: string
    index: any
    id: any
}

export const Column = ({title, index, id }: ColumnProps) => {
    const {state, dispatch } = useAppState();

    return (
        <ColumnContainer>
            <ColumnTitle>{title}</ColumnTitle>
            {state.lists[index].tasks.map((task, i) => (
              <Card text={task.text}
                key={task.id}
                id={i}
                />
            ))}

            <AddNewItem
                toggleButtonText="+ Add another card"
                onAdd={text =>dispatch({type: "ADD_TASK", payload: {text, taskId: id} }) }
                dark
            />
        </ColumnContainer>
    );
};

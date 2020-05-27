import React from "react";
import {AddNewItem} from "./AddNewItem";
import {useAppState} from './AppStateContext'
import {ColumnTitle, ColumnContainer} from "./styles";
import { Card } from "./Card";

interface ColumnProps {
    title: string
    index: number
}

export const Column = ({title, index }: ColumnProps) => {
    const {state} = useAppState();
    return (
        <ColumnContainer>
            <ColumnTitle>{title}</ColumnTitle>
            {state.lists[index].tasks.map(task => (
              <Card text={task.text}
                key={task.id}
                />
            ))}

            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={console.log}
                dark
            />
        </ColumnContainer>
    );
};

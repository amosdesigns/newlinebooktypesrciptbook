import React from "react";
import {AddNewItem} from "./AddNewItem";
import {ColumnTitle, CardContainer} from "./styles";
interface ColumnProps {
    text: string
}

export const Column = ({
                           text,
                           children,
                       }: React.PropsWithChildren<ColumnProps>) => {
    return (
        <CardContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
            <AddNewItem
            toggleButtonText="+ Add another task"
            onAdd={console.log}
            dark
            />
        </CardContainer>
    );
};

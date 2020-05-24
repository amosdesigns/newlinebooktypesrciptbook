import React from "react";
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
        </CardContainer>
    );
};

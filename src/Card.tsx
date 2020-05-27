import React from "react";
import { CardContainer } from "./styles";

interface CardProps {
    text: string
    id: number
}

export const Card = ({text, id}: CardProps) => {
    return <CardContainer>{text}</CardContainer>
}

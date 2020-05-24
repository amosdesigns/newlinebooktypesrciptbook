import React, { useState } from "react";
import { NewItemFormcontainer, New ItemButton, NewItemInput } from "./styles";

interface NewItemFormProps {
    onAdd(text: string): void;
}
export const NewItemForm = (props: AddNewItemProps) => {
    const [text, setText] = useState("");
    return (
        <NewItemFormContainer>
            <NewItemInput
                value={text}
                onChange={e => setText(e.target.value)} />
            <NewItemButton
                onClick={()=> onAdd(text)}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )
}

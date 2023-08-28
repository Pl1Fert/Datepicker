import { memo } from "react";

import { ClearIcon } from "@/components/Icons";

import { IProps } from "./todoItem.interfaces";
import { StyledButton, StyledListItem } from "./todoItem.styled";

export const TodoItem = memo<IProps>(({ item: { content, id }, handleDeleteTodo }) => {
    const handleDeleteClick = (): void => {
        handleDeleteTodo(id);
    };

    return (
        <StyledListItem>
            <p>{content}</p>
            <StyledButton type="button" onClick={handleDeleteClick} data-testid="deleteTodoButton">
                <ClearIcon />
            </StyledButton>
        </StyledListItem>
    );
});

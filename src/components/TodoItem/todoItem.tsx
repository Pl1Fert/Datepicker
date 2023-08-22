import { memo } from "react";

import clear from "@/assets/icons/Clear.svg";

import { IProps } from "./todoItem.interfaces";
import { StyledButton, StyledListItem, StyledParagraph } from "./todoItem.styled";

export const TodoItem = memo<IProps>(({ item: { content, id }, handleDeleteTodo }) => {
    const handleDeleteClick = () => {
        handleDeleteTodo(id);
    };

    return (
        <StyledListItem>
            <StyledParagraph>{content}</StyledParagraph>
            <StyledButton type="button" onClick={handleDeleteClick}>
                <img src={clear} alt="clear" />
            </StyledButton>
        </StyledListItem>
    );
});

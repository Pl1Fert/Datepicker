import { memo } from "react";

import { ClearIcon } from "@/components/Icons";

import { IProps } from "./todoList.interfaces";
import { StyledButton, StyledList, StyledListItem } from "./todoList.styled";

export const TodoList = memo<IProps>(({ todoList, formattedSelectedDate, handleDeleteTodo }) => (
    <StyledList>
        {todoList
            .filter((item) => item.date === formattedSelectedDate)
            .map(({ id, content }) => (
                <StyledListItem key={id}>
                    <p>{content}</p>
                    <StyledButton
                        type="button"
                        onClick={() => handleDeleteTodo(id)}
                        data-testid="deleteTodoButton">
                        <ClearIcon size="16" />
                    </StyledButton>
                </StyledListItem>
            ))}
    </StyledList>
));

import { memo } from "react";

import { TodoItem } from "@/components";

import { IProps } from "./todoList.interfaces";
import { StyledList } from "./todoList.styled";

export const TodoList = memo<IProps>(({ todoList, formattedSelectedDate, handleDeleteTodo }) => (
    <StyledList>
        {todoList
            .filter((item) => item.date === formattedSelectedDate)
            .map((item) => (
                <TodoItem key={item.id} item={item} handleDeleteTodo={handleDeleteTodo} />
            ))}
    </StyledList>
));

import { memo } from "react";

import { TodoList } from "@/components";

import { IProps } from "./todoListContainer.interfaces";
import { StyledInput } from "./todoListContainer.styled";

export const TodoListContainer = memo<IProps>(
    ({ todo, handleDeleteTodo, todoList, selectedDate, handleChange, handleAddNewTodo }) => (
        <>
            <StyledInput
                type="text"
                value={todo}
                onChange={handleChange}
                placeholder="Create a new todo..."
                onKeyDown={handleAddNewTodo}
            />
            <TodoList
                todoList={todoList}
                formattedSelectedDate={selectedDate}
                handleDeleteTodo={handleDeleteTodo}
            />
        </>
    )
);

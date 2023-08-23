import { KeyboardEvent, SyntheticEvent } from "react";

import { ITodo } from "@/interfaces";

export interface IProps {
    todo: string;
    handleChange: (e: SyntheticEvent) => void;
    todoList: ITodo[];
    selectedDate: string;
    handleDeleteTodo: (id: number) => void;
    handleAddNewTodo: (e: KeyboardEvent<HTMLInputElement>) => void;
}

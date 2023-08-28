import { ITodo } from "@/interfaces";

export interface IProps {
    todoList: ITodo[];
    formattedSelectedDate: string;
    handleDeleteTodo: (id: number) => void;
}

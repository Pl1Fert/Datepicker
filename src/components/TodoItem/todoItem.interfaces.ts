import { ITodo } from "@/interfaces";

export interface IProps {
    item: ITodo;
    handleDeleteTodo: (id: number) => void;
}

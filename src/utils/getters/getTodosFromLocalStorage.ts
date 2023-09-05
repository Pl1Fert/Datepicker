import { ITodo } from "@/interfaces";

export const getTodosFromLocalStorage = () => {
    const value = localStorage.getItem("todoList");
    if (typeof value === "string") {
        const storedTodoList: ITodo[] = JSON.parse(value) as ITodo[];
        return storedTodoList;
    }
    return [];
};

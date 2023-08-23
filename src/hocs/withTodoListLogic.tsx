import {
    ComponentType,
    Dispatch,
    KeyboardEvent,
    SetStateAction,
    SyntheticEvent,
    useEffect,
    useState,
} from "react";

import { TodoListContainer } from "@/components";
import { ISelectedDate, ITodo } from "@/interfaces";
import { formatDate } from "@/utils";

export function withTodoListLogic<T>(
    Component: ComponentType<T>,
    selectedDate: ISelectedDate,
    setSelectedDate: Dispatch<SetStateAction<ISelectedDate>>
) {
    return (hocProps: Omit<T, "selectedDate" | "setSelectedDate">) => {
        const [todoList, setTodoList] = useState<ITodo[]>([]);
        const [todo, setTodo] = useState<string>("");

        useEffect(() => {
            const value = localStorage.getItem("todoList");
            if (typeof value === "string") {
                const storedTodoList: ITodo[] = JSON.parse(value) as ITodo[];
                setTodoList(storedTodoList);
            }
        }, []);

        useEffect(() => {
            localStorage.setItem("todoList", JSON.stringify(todoList));
        }, [todoList]);

        const handleAddNewTodo = (e: KeyboardEvent<HTMLInputElement>): void => {
            if (e.key !== "Enter") {
                return;
            }
            if (!todo.trim()) {
                return;
            }

            setTodoList((prevTodoList) => [
                ...prevTodoList,
                { id: Date.now(), date: formatDate(selectedDate), content: todo },
            ]);
            setTodo("");
        };

        const handleDeleteTodo = (id: number): void => {
            const newTodoList = todoList.filter((item) => item.id !== id);
            setTodoList(newTodoList);
        };

        const handleChange = (e: SyntheticEvent) => {
            const target = e.target as HTMLInputElement;

            setTodo(target.value);
        };

        const renderTodoList = () => (
            <TodoListContainer
                todo={todo}
                handleChange={handleChange}
                todoList={todoList}
                handleAddNewTodo={handleAddNewTodo}
                handleDeleteTodo={handleDeleteTodo}
                selectedDate={formatDate(selectedDate)}
            />
        );

        return (
            <Component
                {...(hocProps as T)}
                renderTodoList={renderTodoList}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
        );
    };
}

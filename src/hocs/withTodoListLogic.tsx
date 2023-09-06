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
import { formatDateToString, getTodosFromLocalStorage } from "@/helpers";
import { IDate, ISelectedDate, ITodo } from "@/interfaces";

export function withTodoListLogic<T>(
    Component: ComponentType<T>,
    selectedDate: ISelectedDate,
    setSelectedDate: Dispatch<SetStateAction<ISelectedDate>>,
    shownDate: IDate,
    setShownDate: Dispatch<SetStateAction<IDate>>
) {
    return (
        hocProps: Omit<
            T,
            "selectedDate" | "setSelectedDate" | "shownDate" | "handleDayClick" | "setShownDate"
        >
    ) => {
        const [todoList, setTodoList] = useState<ITodo[]>(() => getTodosFromLocalStorage());
        const [todo, setTodo] = useState<string>("");

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
                { id: Date.now(), date: formatDateToString(selectedDate), content: todo },
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

        const handleDayClick = (e: SyntheticEvent): void => {
            const target = e.target as HTMLElement;

            setSelectedDate({
                year: shownDate.year,
                month: shownDate.month,
                day: parseInt(target.innerText, 10),
            } as ISelectedDate);
        };

        const renderTodoList = (): JSX.Element => (
            <TodoListContainer
                todo={todo}
                handleChange={handleChange}
                todoList={todoList}
                handleAddNewTodo={handleAddNewTodo}
                handleDeleteTodo={handleDeleteTodo}
                selectedDate={formatDateToString(selectedDate)}
            />
        );

        return (
            <Component
                {...(hocProps as T)}
                renderTodoList={renderTodoList}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                handleDayClick={handleDayClick}
                shownDate={shownDate}
                setShownDate={setShownDate}
            />
        );
    };
}

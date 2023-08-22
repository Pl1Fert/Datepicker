import { FC, KeyboardEvent, useEffect, useState } from "react";

import { CalendarBody, CalendarHeader, TodoList } from "@/components";
import { StartDay } from "@/constants";
import { IDate, IHolidaysDates, ISelectedDate, ITodo } from "@/interfaces";
import { GlobalStyles } from "@/styles/global";
import { formatDate, formatHolidays, getHolidays } from "@/utils";

import { IProps } from "./calendar.interfaces";
import { StyledInput, StyledMain } from "./calendar.styled";

const currentDate: IDate = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    day: new Date().getDate(),
};

export const Calendar: FC<IProps> = ({
    startDay = StartDay.Monday,
    maxDate,
    minDate,
    color,
    highlightHolidays = false,
    highlightWeekends = false,
}) => {
    const initialSelectedDate: ISelectedDate = {
        month: undefined,
        year: undefined,
        day: undefined,
    };

    const initialShownDate: IDate = {
        ...currentDate,
    };

    const [selectedDate, setSelectedDate] = useState<ISelectedDate>(initialSelectedDate);
    const [shownDate, setShownDate] = useState<IDate>(initialShownDate);
    const [holidays, setholidays] = useState<IHolidaysDates>({});
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [todo, setTodo] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await getHolidays();
            const dates = formatHolidays(data);
            setholidays(dates);
        };

        fetchData().catch(() => {});
    }, []);

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

    const handleDeleteTodo = (id: number) => {
        const newTodoList = todoList.filter((item) => item.id !== id);
        setTodoList(newTodoList);
    };

    return (
        <>
            <GlobalStyles />
            <StyledMain>
                <CalendarHeader
                    currentDate={currentDate}
                    shownDate={shownDate}
                    setShownDate={setShownDate}
                    maxDate={maxDate}
                    minDate={minDate}
                />
                <CalendarBody
                    selectedDate={selectedDate}
                    startDay={startDay}
                    currentDate={currentDate}
                    setSelectedDate={setSelectedDate}
                    shownDate={shownDate}
                    color={color}
                    highlightHolidays={highlightHolidays}
                    highlightWeekends={highlightWeekends}
                    holidays={holidays}
                />
                <StyledInput
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Create a new todo..."
                    onKeyDown={handleAddNewTodo}
                />
                <TodoList
                    todoList={todoList}
                    formattedSelectedDate={formatDate(selectedDate)}
                    handleDeleteTodo={handleDeleteTodo}
                />
            </StyledMain>
        </>
    );
};

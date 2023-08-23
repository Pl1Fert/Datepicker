import { FC, KeyboardEvent, SyntheticEvent, useEffect, useState } from "react";

import { CalendarBody, CalendarHeader, Picker, TodoList } from "@/components";
import { CURRENT_DATE, StartDay } from "@/constants";
import { IDate, IHolidaysDates, ISelectedDate, ITodo } from "@/interfaces";
import { GlobalStyles } from "@/styles/global";
import { formatDate, formatHolidays, formatStringToDate, getHolidays, isValidDate } from "@/utils";

import { IProps } from "./calendar.interfaces";
import { StyledInput, StyledMain } from "./calendar.styled";

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
        ...CURRENT_DATE,
    };

    const [selectedDate, setSelectedDate] = useState<ISelectedDate>(initialSelectedDate);
    const [shownDate, setShownDate] = useState<IDate>(initialShownDate);
    const [holidays, setholidays] = useState<IHolidaysDates>({});
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [todo, setTodo] = useState<string>("");
    const [dateString, setDateString] = useState<string>("");

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

    const handleDeleteTodo = (id: number): void => {
        const newTodoList = todoList.filter((item) => item.id !== id);
        setTodoList(newTodoList);
    };

    const handleInputChange = (e: SyntheticEvent): void => {
        const target = e.target as HTMLInputElement;

        setDateString(target.value);
    };

    const handleEnterDate = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key !== "Enter") {
            return;
        }
        if (!dateString.trim()) {
            return;
        }

        const date: IDate | undefined = formatStringToDate(dateString);

        if (!isValidDate(date) || !date) {
            return;
        }

        setShownDate(date);
        setSelectedDate(date as ISelectedDate);
    };

    const handleClearDate = () => {
        setDateString("");
        setSelectedDate({ year: undefined, month: undefined, day: undefined });
    };

    const handleDayClick = (e: SyntheticEvent): void => {
        const target = e.target as HTMLElement;

        setSelectedDate({
            year: shownDate.year,
            month: shownDate.month,
            day: parseInt(target.innerText, 10),
        } as ISelectedDate);
        setDateString(
            formatDate({
                year: shownDate.year,
                month: shownDate.month,
                day: parseInt(target.innerText, 10),
            })
        );
    };

    const handleChange = (e: SyntheticEvent): void => {
        const target = e.target as HTMLInputElement;

        if (target.name === "currentYear") {
            setShownDate(
                (prevState: IDate): IDate => ({
                    ...prevState,
                    year: parseInt(target.value, 10),
                })
            );
        } else {
            setShownDate(
                (prevState: IDate): IDate => ({
                    ...prevState,
                    month: parseInt(target.value, 10),
                })
            );
        }
    };

    const handleNextMonthClick = (): void => {
        if (shownDate.month < 11) {
            setShownDate(
                (prevState: IDate): IDate => ({
                    ...prevState,
                    month: shownDate.month + 1,
                })
            );
        } else {
            setShownDate(
                (prevState: IDate): IDate => ({
                    ...prevState,
                    month: 0,
                    year: shownDate.year + 1,
                })
            );
        }
    };

    const handlePrevMonthClick = (): void => {
        if (shownDate.month > 0) {
            setShownDate(
                (prevState: IDate): IDate => ({
                    ...prevState,
                    month: shownDate.month - 1,
                })
            );
        } else {
            setShownDate(
                (prevState: IDate): IDate => ({
                    ...prevState,
                    month: 11,
                    year: shownDate.year - 1,
                })
            );
        }
    };

    const handleTodayClick = (): void => {
        setShownDate({ ...CURRENT_DATE });
    };

    return (
        <>
            <GlobalStyles />
            <StyledMain>
                <Picker
                    value={dateString}
                    onChange={handleInputChange}
                    onKeyDown={handleEnterDate}
                    onClick={handleClearDate}
                />
                <CalendarHeader
                    shownDate={shownDate}
                    maxDate={maxDate}
                    minDate={minDate}
                    onChange={handleChange}
                    onClick={handleTodayClick}
                    handleNextMonthClick={handleNextMonthClick}
                    handlePrevMonthClick={handlePrevMonthClick}
                />
                <CalendarBody
                    selectedDate={selectedDate}
                    startDay={startDay}
                    shownDate={shownDate}
                    color={color}
                    highlightHolidays={highlightHolidays}
                    highlightWeekends={highlightWeekends}
                    holidays={holidays}
                    handleDayClick={handleDayClick}
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

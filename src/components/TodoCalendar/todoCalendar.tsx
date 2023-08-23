import { Calendar } from "@/components";
import { withMainLogic } from "@/hocs";

import { StyledMain } from "./todoCalendar.styled";

const CalendarWithMainLogic = withMainLogic(Calendar);

export const TodoCalendar = () => (
    <StyledMain>
        <CalendarWithMainLogic />
    </StyledMain>
);

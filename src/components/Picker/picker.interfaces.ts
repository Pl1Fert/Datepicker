import { KeyboardEvent, SyntheticEvent } from "react";

export interface IProps {
    value: string;
    onChange: (e: SyntheticEvent) => void;
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

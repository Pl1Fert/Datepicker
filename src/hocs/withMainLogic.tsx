import { ComponentType } from "react";

export function withMainLogic<T>(Component: ComponentType<T>) {
    return (hocProps: T) => <Component {...hocProps} />;
}

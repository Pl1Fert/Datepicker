import { Component, ErrorInfo } from "react";

import { IProps, IState } from "./errorBoundary.interfaces";

export class ErrorBoundary extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    public static getDerivedStateFromError(_: Error): IState {
        return { hasError: true };
    }

    override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    override render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <h1>Sorry.. there was an error</h1>;
        }

        return children;
    }
}

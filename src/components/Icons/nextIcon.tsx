import { memo } from "react";

import { IProps } from "./icons.interfaces";

export const NextIcon = memo<IProps>(({ size }) => (
    <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.27337 4L3.33337 4.94L6.38671 8L3.33337 11.06L4.27337 12L8.27337 8L4.27337 4Z"
            fill="black"
        />
        <path
            d="M8.66668 4L7.72668 4.94L10.78 8L7.72668 11.06L8.66668 12L12.6667 8L8.66668 4Z"
            fill="black"
        />
    </svg>
));

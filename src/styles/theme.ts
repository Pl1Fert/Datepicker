const blue = "#2f80ed";
const lightBlue = "#2f80ed23";
const green = "#26c94a";
const black = "#000";
const white = "#fff";
const red = "#fc0313";

interface ITheme {
    colors: {
        [key: string]: string;
    };
}

export const theme: ITheme = {
    colors: {
        blue,
        lightBlue,
        green,
        black: "#000",
        white,
        red,
    },
};

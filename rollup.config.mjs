import external from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import styles from "rollup-plugin-styles";
import commonjs from "rollup-plugin-commonjs";

export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
            },
            {
                file: "dist/index.es.js",
                format: "es",
                exports: "named",
            },
        ],
        plugins: [
            external(),
            typescript({ tsconfig: "./tsconfig.json" }),
            babel({
                exclude: "node_modules/**",
                presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
                plugins: ["styled-components"],
            }),
            resolve({
                jsnext: true,
                main: true,
                browser: true,
            }),
            terser(),
            commonjs(),
            styles(),
        ],
    },
    {
        input: "./src/index.ts",
        output: [
            {
                file: "dist/types.d.ts",
                format: "es",
            },
        ],
        plugins: [dts],
    },
];

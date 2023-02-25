import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import pkg from "./package.json" assert { type: "json" };
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import { resolve } from "path";

export default [
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
    plugins: [
      external(),
      typescript(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
        extensions: [".js", ".ts"],
        include: resolve("src", "**", "*.ts"),
      }),
      //terser(), //minified bundle
      del({ targets: ["dist/*"] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
  {
    input: pkg.source,
    output: [
      { file: pkg.types, format: "es" },
    ],
    plugins: [
      dts()
    ]
  },
];

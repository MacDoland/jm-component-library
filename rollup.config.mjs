import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import pkg from "./package.json" assert { type: "json" };
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import { resolve as pathResolve } from "path";
import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [
      del({ targets: ["dist/*"] }),
      external(),
      commonjs({
        esmExternals: true
      }),
      typescript(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
        extensions: [".js", ".ts"],
        include: pathResolve("src", "**", "*.js", "*.ts"),
      }),
      resolve(),
      //terser(), //minified bundle
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

import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json" assert { type: "json" };
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import resolve from "@rollup/plugin-node-resolve";
import addDefaultToRequire from "./plugins/add-default-to-require.mjs";

export default [
  {
    input: pkg.source,
    output: [
      { file: "dist/index.cjs.js", format: "cjs" },
      { file: "dist/index.esm.js", format: "es" },
    ],
    plugins: [
      del({ targets: ["dist/*"] }),
      external(),
      typescript(),
      resolve(),
      addDefaultToRequire({
        file: "dist/index.cjs.js",
        targetPattern: '@mui/material/[A-Z]+[a-z0-9]*',
      }),
      //terser(), //minified bundle
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/jm-component-library.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

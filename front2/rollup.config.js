import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: './src/page.ts',
    output: {
      file: 'dist/main.js',
      format: 'esm'
    },
    plugins: [commonjs(), nodeResolve({browser: true}), typescript(), terser()],
  }
];
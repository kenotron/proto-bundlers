import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";

import { terser } from "rollup-plugin-terser";

const config = {
  input: "index.js",
  output: {
    format: "esm",
    dir: "dist",
    entryFileNames: "office-ui-fabric-react.js",
    chunkFileNames: "[name].js"
  },
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
    babel({ exclude: "node_modules/**" }),
    commonjs({
      include: ["node_modules/@microsoft/load-themed-styles/**"]
    })
  ]
};

export default config;

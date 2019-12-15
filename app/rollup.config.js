import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import html from "@rollup/plugin-html";
import path from "path";

const buckets = new Map();

const config = {
  input: "src/index.js",
  output: {
    format: "esm",
    dir: "dist",
    entryFileNames: "[name].js"
  },
  external: ["react", "react-dom"],
  plugins: [
    babel({ exclude: "node_modules/**" }),
    resolve(),
    commonjs({ namedExports: { react: ["React"] } }),
    html({
      template: ({ files }) => {
        return `
        <!DOCTYPE html>

<html>
  <body>
    <div id="root"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"
    ></script>
    <script type="module">
      import render from "./index.js";
      render();
    </script>
  </body>
</html>
`;
      }
    })
  ],
  manualChunks(id) {
    if (id.includes("node_modules") && !id.includes("node_modules/react")) {
      // Return the directory name following the last `node_modules`.
      // Usually this is the package, but it could also be the scope.
      const dirs = id.split(path.sep);
      const last = dirs[dirs.lastIndexOf("node_modules") + 1];

      let key;

      if (last.startsWith("@")) {
        key = `${last}/${dirs[dirs.lastIndexOf("node_modules") + 2]}`;
      } else {
        key = last;
      }

      if (buckets.has(key)) {
        return buckets.get(key);
      } else {
        const version = require(`${key}/package.json`).version;
        const value = `${key.replace("/", "-")}-${version}`;
        buckets.set(key, value);
        return value;
      }
    }
  }
};

export default config;

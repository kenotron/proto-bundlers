import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import html from "@rollup/plugin-html";
import ignore from "rollup-plugin-ignore-import";
import copy from "rollup-plugin-copy";
import serve from "rollup-plugin-serve";
import path from "path";

const buckets = new Map();

const config = {
  input: "src/index.js",
  output: {
    format: "esm",
    dir: "dist",
    entryFileNames: "[name].js",
    chunkFileNames: "[name].js"
  },
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    ignore({
      include: ["**/node_modules/office-ui-fabric-react/**/*.js"],
      body: "export default undefined"
    }),
    replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
    babel({ exclude: "node_modules/**" }),
    commonjs({
      include: [
        "node_modules/create-react-class/**",
        "node_modules/fbjs/**",
        "node_modules/object-assign/**",
        "node_modules/react/**",
        "node_modules/react-dom/**",
        "node_modules/prop-types/**",
        "node_modules/scheduler/**",
        "node_modules/@microsoft/load-themed-styles/**"
      ],
      namedExports: {
        react: [
          "createElement",
          "createRef",
          "Children",
          "Component",
          "Fragment",
          "cloneElement",
          "PureComponent",
          "useState",
          "useContext",
          "createContext",
          "useRef",
          "isValidElement",
          "forwardRef",
          "useCallback"
        ],
        "react-dom": ["findDOMNode", "createPortal"]
      }
    }),
    //terser(),
    serve({
      open: true,
      contentBase: "dist"
    }),
    copy({
      targets: [
        { src: "../oufr-lib/dist/office-ui-fabric-react.js", dest: "dist/" },
        { src: "blank.js", dest: "dist/" }
      ]
    }),
    html({
      template: ({ files }) => {
        return `
        <!DOCTYPE html>

<html>
  <body>
    <div id="root"></div>
    <script defer src="https://unpkg.com/es-module-shims@latest/dist/es-module-shims.js"></script>
    <script type="importmap-shim">
      {
        "imports": {
          "react": "https://unpkg.com/@pika/react@0.1.0/dist-es2019/react.min.js",
          "react-dom": "https://unpkg.com/@pika/react-dom@0.1.0/dist-es2019/react-dom.min.js",
          "@pika/react": "https://unpkg.com/@pika/react@0.1.0/dist-es2019/react.min.js",
          "@pika/react-dom": "https://unpkg.com/@pika/react-dom@0.1.0/dist-es2019/react-dom.min.js",
          "office-ui-fabric-react": "http://localhost:9000/dist/office-ui-fabric-react.js"

        }
      }
    </script>
    <script>
    const process = {
      env: {
        NODE_ENV: 'development'
      }
    };
    </script>
    <script type="module-shim">
     import render from "./index.js";
      render();
    </script>
  </body>
</html>
`;
      }
    })
  ]
  // manualChunks(id) {
  //   if (id.includes("node_modules")) {
  //     // Return the directory name following the last `node_modules`.
  //     // Usually this is the package, but it could also be the scope.
  //     const dirs = id.split(path.sep);
  //     const last = dirs[dirs.lastIndexOf("node_modules") + 1];

  //     let key;

  //     if (last.startsWith("@")) {
  //       key = `${last}/${dirs[dirs.lastIndexOf("node_modules") + 2]}`;
  //     } else {
  //       key = last;
  //     }

  //     if (buckets.has(key)) {
  //       return buckets.get(key);
  //     } else {
  //       //const version = require(`${key}/package.json`).version;
  //       const value = `${key.replace("/", "-")}`;
  //       buckets.set(key, value);
  //       return value;
  //     }
  //   }
  // }
};

export default config;

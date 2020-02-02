import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { loadTheme } from "office-ui-fabric-react";

export default () => {
  loadTheme({});
  ReactDOM.render(<App />, document.getElementById("root"));
};

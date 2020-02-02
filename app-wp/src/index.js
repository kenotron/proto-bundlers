import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
export function boot() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

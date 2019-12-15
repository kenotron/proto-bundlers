import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

window.testme = function() {
  console.log(__webpack_require__);
};

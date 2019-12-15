import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

export default () => {
  ReactDOM.render(<App />, document.getElementById("root"));
  window.testme = function() {
    console.log(__webpack_require__);
  };
};

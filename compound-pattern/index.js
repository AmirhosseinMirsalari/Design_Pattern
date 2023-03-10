import React from "react";
import ReactDOM from "react-dom";

import ImagesList from "./components/images";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <ImagesList />
    </div>
  </React.StrictMode>,
  rootElement
);

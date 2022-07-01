import React from "react";
import ReactDOM from "react-dom";
// update to react 18
// import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = createRoot(document.getElementById("root")! as Element); // createRoot(container!) if you use TypeScript
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const myStore = createStore(
//   combineReducers({ about1: aboutReducer }),
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__()
// );
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

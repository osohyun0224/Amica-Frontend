import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./redux/store.js";
import "./index.scss";
import "simplebar-react/dist/simplebar.min.css";
import "react-indiana-drag-scroll/dist/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

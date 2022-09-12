import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 导入路由
import { BrowserRouter as Router } from "react-router-dom";

// 导入仓库
import { Provider } from "react-redux";
import store from "@/redux/index.jsx";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

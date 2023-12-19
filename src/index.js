import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import "./styles/font.scss";
import "./styles/common.scss";
import "./styles/navigation.scss";
import "./styles/homepage.scss";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/navigation/navigationBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationBar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

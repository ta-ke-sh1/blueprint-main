import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import "./styles/font.scss";
import "./styles/common.scss";
import "./styles/navigation.scss";
import "./styles/homepage.scss";
import "./styles/preloader.scss";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/navigation/navigationBar";
import { PreloaderWrapper } from "./hooks/usePreloader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PreloaderWrapper value={false}>
        <NavigationBar />
        <App />
      </PreloaderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import FilimProvider from "./contexts/FilimContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilimProvider>
        <App />
      </FilimProvider>
    </BrowserRouter>
  </React.StrictMode>
);

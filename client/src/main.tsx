import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SkeletonTheme baseColor="#D3D3D3" highlightColor="#44444444">
        <App />
      </SkeletonTheme>
    </BrowserRouter>
  </React.StrictMode>
);

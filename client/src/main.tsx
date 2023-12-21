import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SkeletonTheme baseColor="#D3D3D3" highlightColor="#44444444">
        <QueryClientProvider client={queryClient}>
          <App />
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              duration: 5000,
            }}
          />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </SkeletonTheme>
    </BrowserRouter>
  </React.StrictMode>
);

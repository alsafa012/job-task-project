import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyCreatedRouter from "./Router/Router";
import AuthProvider from "./Provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
          <AuthProvider>
               <QueryClientProvider client={queryClient}>
                    <HelmetProvider>
                         <RouterProvider router={MyCreatedRouter} />
                    </HelmetProvider>
               </QueryClientProvider>
          </AuthProvider>
     </React.StrictMode>
);

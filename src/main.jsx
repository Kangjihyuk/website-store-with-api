import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pages from "./pages/pages"
import Error from "./pages/error"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Error />,
    errorElement: <Error />,
  },
  {
    path: "/pages",
    element: <Pages />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

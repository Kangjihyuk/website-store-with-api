import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pages from "./pages/pages"
import Error from "./pages/error"
import Search from "./pages/Search";
import Jawalery from "./pages/jawalery";
import Electronics from "./pages/electronics";
import MensClothing from "./pages/mensClothing";
import WomenClothing from "./pages/womenClothing";
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
  {
    path: "search",
    element: <Search />,
  },
  {
    path: "jawalery",
    element: <Jawalery />,
  },
  {
    path: "electronics",
    element: <Electronics />,
  },
  {
    path: "mens clothing",
    element: <MensClothing />,
  },
  {
    path: "women clothing",
    element: <WomenClothing />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

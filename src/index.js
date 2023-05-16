import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import ProductList from "./views/ProductList";
import Error from "./views/Error";
import ProductDetail from "./views/ProductDetail";
import UploadProduct from "./views/UploadProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/products/:category",
        element: <ProductList />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/product/upload",
        element: <UploadProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

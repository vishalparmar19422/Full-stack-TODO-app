import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Todos from "./components/todos.jsx";
import Layout from "./components/Layout.jsx";
import CreatTodo from "./components/creatTodo.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Todos />,
      },
    ],
  },
  {
    path: "/createtodo",
    element: <CreatTodo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

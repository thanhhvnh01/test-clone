import { Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./views/Home";
import Products from "@views/Products";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "/", element: <Navigate to="/home" /> },
    ],
  },
];

export default routes;

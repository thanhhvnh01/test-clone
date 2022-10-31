import { Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./views/Home";
import Products from "@views/Products";
import ProductDetails from "@views/Products/ProductDetails";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "product/details", element: <ProductDetails /> },
      { path: "/", element: <Navigate to="/home" /> },
    ],
  },
];

export default routes;

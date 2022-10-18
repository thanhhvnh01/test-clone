import { Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./views/Home";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "/", element: <Navigate to="/home" /> },
    ],
  },
];

export default routes;

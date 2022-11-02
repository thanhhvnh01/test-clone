import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";
// icon

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

<Outlet />;

export default MainLayout;

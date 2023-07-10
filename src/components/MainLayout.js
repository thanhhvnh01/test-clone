import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";

import "react-whatsapp-chat-widget/index.css";
import Widget from "./Widget";
import LocaleHeader from "./header/LocaleHeader";
// icon

const MainLayout = () => {

  return (
    <>
    <LocaleHeader  />
      <Navbar />
      <Outlet />
      <Footer />
      <Widget />
    </>
  );
};

export default MainLayout;

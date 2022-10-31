import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";
// icon
import { ChevronUpIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import useMobile from "@hooks/useMobile";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const transferVisile = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", transferVisile);
  return (
    <IconButton
      onClick={scrollToTop}
      sx={{
        display: visible ? "block" : "none",
        position: "fixed",
        right: "2%",
        bottom: "40px",
        background: "#FFFFFF",
        boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "25px",
        border: "none",
      }}
      icon={<ChevronUpIcon color="black" boxSize={8} />}
    />
  );
};

const MainLayout = () => {
  const [isMobile] = useMobile();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {!isMobile && <ScrollToTopButton />}
    </>
  );
};

export default MainLayout;

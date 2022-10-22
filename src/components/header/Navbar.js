import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import useMobile from "@hooks/useMobile";
import React from "react";
import { ResponsiveNavbarHeight } from "src/theme/ResponsiveTheme";
import LocaleHeader from "./LocaleHeader";
import Logo from "./Logo";
import NavbarItems from "./NavbarItems";
import NavbarVertical from "./NavbarVertical";
import { ToggleButton } from "./ToggleButton";

const NavBarContainer = ({ children, isMobile, ...props }) => {
  return (
    <Box
      w="100%"
      sx={{
        opacity: 0.9,
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        position: "fixed",
        top: 0,
        zIndex: 6,
      }}
    >
      <LocaleHeader isMobile={isMobile} sx={{ px: isMobile ? "10px" : "11%" }} />
      <Flex
        as="nav"
        align="center"
        justifyContent="space-between"
        alignContent="center"
        wrap="wrap"
        h={ResponsiveNavbarHeight}
        p={4}
        sx={{ px: isMobile ? "7%" : "11%" }}
        bg={["#6B6E72 !important", "#6B6E72", "transparent", "transparent"]}
        color={["#FFEA85", "#FFEA85", "#FFEA85", "#FFEA85"]}
        {...props}
      >
        {children}
      </Flex>
    </Box>
  );
};

const Navbar = ({ ...props }) => {
  const [isMobile] = useMobile();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer isMobile={isMobile} {...props}>
      <Logo w="100px" color={["white", "white", "primary.500", "primary.500"]} />
      <ToggleButton isMobile={isMobile} toggle={onOpen} isOpen={isOpen} />
      <NavbarItems />
      {isOpen && <NavbarVertical isOpen={isOpen} onClose={onClose} />}
    </NavBarContainer>
  );
};

export default Navbar;

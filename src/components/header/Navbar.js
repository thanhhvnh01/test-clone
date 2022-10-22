import { Box, Flex } from "@chakra-ui/react";
import useMobile from "@hooks/useMobile";
import React from "react";
import { ResponsiveNavbarHeight } from "src/theme/ResponsiveTheme";
import Logo from "./Logo";
import NavbarItems from "./NavbarItems";
import { ToggleButton } from "./ToggleButton";

const NavBarContainer = ({ children, isMobile, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justifyContent="space-between"
      alignContent="center"
      wrap="wrap"
      w="100%"
      h={ResponsiveNavbarHeight}
      mb={8}
      p={4}
      bg={["#6B6E72 !important", "#6B6E72", "transparent", "transparent"]}
      color={["#FFEA85", "#FFEA85", "#FFEA85", "#FFEA85"]}
      sx={{
        opacity: 0.9,
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        position: "fixed",
        top: 0,
        zIndex: 6,
        px: isMobile ? "10px" : "11%",
      }}
      {...props}
    >
      {children}
    </Flex>
  );
};

const Navbar = ({ ...props }) => {
  const [isMobile] = useMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer isMobile={isMobile} {...props}>
      <Logo w="100px" color={["white", "white", "primary.500", "primary.500"]} />
      <ToggleButton isMobile={isMobile} toggle={toggle} isOpen={isOpen} />
      <NavbarItems />
    </NavBarContainer>
  );
};

export default Navbar;

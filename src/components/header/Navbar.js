import { Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import NavbarItems from "./NavbarItems";
import { ToggleButton } from "./ToggleButton";

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={4}
      bg={["#6B6E72 !important", "#6B6E72", "transparent", "transparent"]}
      color={["#FFEA85", "#FFEA85", "#FFEA85", "#FFEA85"]}
      sx={{ opacity: 0.9 }}
      {...props}
    >
      {children}
    </Flex>
  );
};

const Navbar = ({ ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo w="100px" color={["white", "white", "primary.500", "primary.500"]} />
      <ToggleButton toggle={toggle} isOpen={isOpen} />
      <NavbarItems />
    </NavBarContainer>
  );
};

export default Navbar;

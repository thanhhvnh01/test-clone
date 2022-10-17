import { Box, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

const NavbarItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text fontSize="xl" as="b" textTransform="uppercase" display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const NavbarItems = ({ isOpen }) => {
  return (
    <Box display={{ base: isOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <NavbarItem to="/">About us</NavbarItem>
        <NavbarItem to="/how">Product</NavbarItem>
        <NavbarItem to="/how">Contact</NavbarItem>
        <NavbarItem to="/how">Subscribe</NavbarItem>
      </Stack>
    </Box>
  );
};

export default NavbarItems;

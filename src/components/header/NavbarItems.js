import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FormattedMessage } from "react-intl";

const NavbarItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link className="navbar-item" href={to} sx={{ textDecoration: "none" }}>
      <Flex
        alignContent="center"
        justifyContent="center"
        fontSize="18px"
        fontWeight="500"
        textTransform="uppercase"
        display="block"
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
};

const NavbarItems = ({ isOpen }) => {
  return (
    <Box display={{ base: isOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
      <Stack
        spacing={12}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <NavbarItem to="/">
          <FormattedMessage id="title.aboutUs" />
        </NavbarItem>
        <NavbarItem to="/products">
          <HStack justifyContent="center">
            <Text>
              <FormattedMessage id="title.products" />
            </Text>
            <TriangleDownIcon w="12px" mt={1.5} />
          </HStack>
        </NavbarItem>
        <NavbarItem to="/how">
          <FormattedMessage id="title.contact" />
        </NavbarItem>
        <NavbarItem sx={{ border: "2px solid #FFEA85 !important", p: 1, px: 4 }} to="/how">
          <FormattedMessage id="title.subsrcibe" />
        </NavbarItem>
      </Stack>
    </Box>
  );
};

export default NavbarItems;

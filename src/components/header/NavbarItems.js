import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FormattedMessage } from "react-intl";
import Dropdown from "react-multilevel-dropdown";

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

const data = [
  { label: "Toc1" },
  { label: "Toc2", submenu: [{ label: "meo" }, { label: "meo" }] },
  { label: "Toc3" },
  { label: "Toc4" },
];

const ProductMenu = () => {
  return (
    <Dropdown
      openOnHover
      position="right"
      className="dropdown"
      title={
        <Flex
          alignContent="center"
          justifyContent="center"
          fontSize="18px"
          fontWeight="500"
          textTransform="uppercase"
          //   display="block"
        >
          <HStack justifyContent="center">
            <Text>
              <FormattedMessage id="title.products" />
            </Text>
            <TriangleDownIcon w="12px" mt={1.5} />
          </HStack>
        </Flex>
      }
    >
      <Box bg="#575757" sx={{ border: "2px solid black", opacity: "1 !important" }}>
        {data.map((item) => {
          return (
            <Dropdown.Item>
              {item.label}
              {!!item.submenu && (
                <Dropdown.Submenu position="right">
                  <Box sx={{ border: "2px solid black" }}>
                    {item.submenu.map((i) => {
                      return <Dropdown.Item>{i.label}</Dropdown.Item>;
                    })}
                  </Box>
                </Dropdown.Submenu>
              )}
            </Dropdown.Item>
          );
        })}
      </Box>
    </Dropdown>
  );
};

const NavbarItems = ({ isOpen, onMouseOver, onMouseLeave }) => {
  const signUpElement = document.getElementById("sign-up-section");

  const handleScroll = () => {
    signUpElement.scrollIntoView({ behavior: "smooth" });
  };
  // console.log("aaa", isOpen);
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

        {/* <Text>
              <FormattedMessage id="title.products" />
            </Text>
            <TriangleDownIcon w="12px" mt={1.5} /> */}
        <ProductMenu />

        <NavbarItem to="/how">
          <FormattedMessage id="title.contact" />
        </NavbarItem>
        <Flex
          className="navbar-item"
          onClick={() => {
            handleScroll();
          }}
          alignContent="center"
          justifyContent="center"
          fontSize="18px"
          fontWeight="500"
          textTransform="uppercase"
          display="block"
          sx={{ border: "2px solid #FFEA85 !important", p: 1, px: 4, cursor: "pointer" }}
        >
          <FormattedMessage id="title.subsrcibe" />
        </Flex>
      </Stack>
    </Box>
  );
};

export default NavbarItems;

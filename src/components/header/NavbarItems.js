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

const ProductMenu = ({ dropDownData }) => {
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
          <HStack className="navbar-item" justifyContent="center">
            <Link href="/products">
              <Text>
                <FormattedMessage id="title.products" />
              </Text>
            </Link>
            <TriangleDownIcon w="12px" sx={{ mt: "2px !important" }} />
          </HStack>
        </Flex>
      }
    >
      <Box
        bg="#575757"
        sx={{
          borderBottom: "none",
          // opacity: "1 !important",
          boxShadow: "-4px 0px 3px rgba(0, 0, 0, 0.25)",
        }}
      >
        {dropDownData.map((item, index) => {
          const isLastItem = Boolean(index + 1 === dropDownData.length);
          return (
            <Dropdown.Item className={!isLastItem ? "Item_item__eDdfj" : "last-menu-item"} key={item.categoryId}>
              {item.categoryName}
              {!!item.productTypes && (
                <Dropdown.Submenu position="right">
                  <Box sx={{ borderBottom: "none" }}>
                    {item.productTypes.map((i, a) => {
                      const isLastChildItem = Boolean(a + 1 === item.productTypes.length);
                      return (
                        <Dropdown.Item
                          className={!isLastChildItem ? "child-item" : "last-child-item"}
                          key={i.productTypeId}
                        >
                          {i.productTypeName}
                        </Dropdown.Item>
                      );
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

const NavbarItems = ({ isOpen, dropDownData }) => {
  const signUpElement = document.getElementById("sign-up-section");

  const handleScroll = () => {
    signUpElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      display={[isOpen ? "block" : "none", isOpen ? "block" : "none", isOpen ? "block" : "none", "block", "block"]}
      flexBasis={{ base: "100%", md: "auto" }}
    >
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
        <ProductMenu dropDownData={dropDownData} />
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

import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Link, Stack, Text } from "@chakra-ui/react";
import DropDownSubmenu from "@components/DropDownSubmenu";
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
        <NavbarItem to="/about-andeahair">
          <FormattedMessage id="title.aboutUs" />
        </NavbarItem>
        {/* <ProductMenu dropDownData={dropDownData} /> */}
        <DropDownSubmenu
          data={dropDownData}
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
        />
        <NavbarItem to="/contact">
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

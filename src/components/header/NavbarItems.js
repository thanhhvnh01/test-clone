import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Link, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
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

const ProductMenu = ({ isOpen, ...rest }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  console.log(subMenuOpen);

  const toggleOn = () => setSubMenuOpen(true);
  const toggleOff = () => setSubMenuOpen(false);

  const SubMenu = () => {
    return (
      <Box onMouseOver={toggleOn} onMouseLeave={toggleOff}>
        <Menu isLazy>
          <MenuButton>
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
          </MenuButton>
          <MenuList bg="#575757" sx={{ borderRadius: "0px", p: 0 }}>
            <MenuItem sx={{ borderBottom: "1px solid #000000" }}>aaas</MenuItem>
            {/* <MenuItem sx={{ borderBottom: "1px solid #000000" }}>Download</MenuItem>
            <MenuItem sx={{ borderBottom: "1px solid #000000" }}>Download</MenuItem>
            <MenuItem sx={{ borderBottom: "1px solid #000000" }}>Download</MenuItem> */}
          </MenuList>
        </Menu>
      </Box>
    );
  };

  return (
    <Box {...rest}>
      <Menu isLazy isOpen={isOpen}>
        <MenuButton>
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
        </MenuButton>
        <MenuList bg="#575757" sx={{ borderRadius: "0px", p: 0 }}>
          <MenuItem sx={{ borderBottom: "1px solid #000000" }}>
            <SubMenu />
          </MenuItem>
          {/* <MenuItem sx={{ borderBottom: "1px solid #000000" }}>Download</MenuItem>
          <MenuItem sx={{ borderBottom: "1px solid #000000" }}>Download</MenuItem>
          <MenuItem sx={{ borderBottom: "1px solid #000000" }}>Download</MenuItem> */}
        </MenuList>
      </Menu>
    </Box>
  );
};

const NavbarItems = ({ isOpen, onMouseOver, onMouseLeave }) => {
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
        <ProductMenu isOpen={isOpen} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />

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

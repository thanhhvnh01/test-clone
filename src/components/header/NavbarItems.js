import { getProductForHomePageAPI } from "@api/main";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Link, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
          <HStack justifyContent="center">
            <Text>
              <FormattedMessage id="title.products" />
            </Text>
            <TriangleDownIcon w="12px" mt={1.5} />
          </HStack>
        </Flex>
      }
    >
      <Box bg="#575757" sx={{ border: "2px solid black", borderBottom: "none", opacity: "1 !important" }}>
        {dropDownData.map((item) => {
          return (
            <Dropdown.Item key={item.categoryId}>
              {item.categoryName}
              {!!item.productTypes && (
                <Dropdown.Submenu position="right">
                  <Box sx={{ border: "2px solid black", borderBottom: "none" }}>
                    {item.productTypes.map((i) => {
                      return <Dropdown.Item key={i.productTypeId}>{i.productTypeName}</Dropdown.Item>;
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
  const [dropDownData, setDropDownData] = useState([]);

  const fetchDropDownData = async () => {
    const res = await getProductForHomePageAPI();
    setDropDownData(res.data);
  };

  useEffect(() => {
    fetchDropDownData();
  }, []);

  const signUpElement = document.getElementById("sign-up-section");

  const handleScroll = () => {
    signUpElement.scrollIntoView({ behavior: "smooth" });
  };

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

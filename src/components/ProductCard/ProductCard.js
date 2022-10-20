import { Box, Center, Image, Text } from "@chakra-ui/react";
import useMobile from "@hooks/useMobile";
import React from "react";
// import { VisibilityContext } from "react-horizontal-scrolling-menu";

const ProductCard = ({ title, image }) => {
  const [isMobile] = useMobile();

  return (
    <Box bg="#ffff" tabIndex={0} w={isMobile ? "112px" : "280px"} h={isMobile ? "139px" : "380px"} sx={{ mr: 10 }}>
      <Image mx={2} w={isMobile && "94px"} src="/images/product_1.png" />
      <Center h="20%" sx={{ display: "flex", alignContent: "center" }}>
        <Text textTransform="uppercase" fontWeight="600" m="auto" fontSize={isMobile ? "12px" : "20px"}>
          {title}
        </Text>
      </Center>
    </Box>
  );
};

export default ProductCard;

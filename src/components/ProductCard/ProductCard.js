import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
// import { VisibilityContext } from "react-horizontal-scrolling-menu";

const ProductCard = ({ title, image }) => {
  return (
    <Box bg="#ffff" tabIndex={0} w="280px" h="380px" sx={{ mr: 10 }}>
      <Image mx={2} src="/images/product_1.png" />
      <Center h="20%" sx={{ display: "flex", alignContent: "center" }}>
        <Text textTransform="uppercase" fontWeight="600" m="auto" sx={{}}>
          {title}
        </Text>
      </Center>
    </Box>
  );
};

export default ProductCard;

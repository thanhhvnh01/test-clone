import { Box, Button, Center, Image, Text, VStack } from "@chakra-ui/react";
import useMobile from "@hooks/useMobile";
import React from "react";
// import { VisibilityContext } from "react-horizontal-scrolling-menu";

const ProductCard = ({ title, image }) => {
  const [isMobile] = useMobile();

  return (
    <Box
      bg="#ffff"
      tabIndex={0}
      w={isMobile ? "112px" : "236px"}
      h={isMobile ? "139px" : "318px"}
      sx={{ border: "1px solid #AAAAAA" }}
      mr={10}
    >
      <Image mb={3} mx={isMobile ? 2 : 5} w={isMobile ? "94px" : "198px"} src="/images/product_1.png" />
      <Center h="20%" sx={{ display: "flex", alignContent: "center" }}>
        <VStack spacing="5px">
          <Text textTransform="uppercase" fontWeight="600" m="auto" fontSize={isMobile ? "12px" : "16px"}>
            {title}
          </Text>
          <Text fontSize="11px" color="#FFB800">
            {"(Single color hair)"}
          </Text>
          <Button p={3} borderRadius="206px" bg="#FFB800" variant="solid" h="25px">
            <Text fontSize="13px">Explore</Text>
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default ProductCard;

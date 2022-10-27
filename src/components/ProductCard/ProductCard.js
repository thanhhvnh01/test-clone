import { Box, Button, Center, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ title, subtitle, image }) => {
  return (
    <Box
      bg="#ffff"
      tabIndex={0}
      // w={isMobile ? "112px" : "236px"}
      w={["112px", "112px", "112px", "236px", "236px"]}
      // h={isMobile ? "139px" : "318px"}
      h={["139px", "139px", "139px", "318px", "318px"]}
      sx={{ border: "1px solid #AAAAAA" }}
      ml={[5, 5, 5, 2, 10]}
    >
      <Image
        mb={3}
        mx={[2, 2, 2, 5, 5]}
        w={["94px", "94px", "94px", "198px", "198px"]}
        h={["161px", "161px", "161px", "208px", "208px"]}
        src={image}
        alt="product"
      />
      <Center h="20%" sx={{ display: "flex", alignContent: "center" }}>
        <VStack spacing="5px">
          <Text textTransform="uppercase" fontWeight="600" m="auto" fontSize={["12px", "12px", "12px", "16px", "16px"]}>
            {title}
          </Text>
          <Text fontSize="7px" color="#FFB800">
            {`(${subtitle})`}
          </Text>
          <Button
            _hover={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            p={3}
            borderRadius="206px"
            bg="#FFB800"
            variant="solid"
            h="25px"
            w="125px"
          >
            <Text fontSize="9px" textTransform="none">
              Explore
            </Text>
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default ProductCard;

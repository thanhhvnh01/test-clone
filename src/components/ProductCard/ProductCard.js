import { Box, Button, Center, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ title, subtitle, image, sx, onClick }) => {
  return (
    <Box
      bg="#ffff"
      tabIndex={0}
      _hover={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      // w={isMobile ? "112px" : "236px"}
      maxW={["175px", "182px", "182px", "216px", "216px"]}
      // h={isMobile ? "139px" : "318px"}
      h={["248px", "248px", "248px", "318px", "318px"]}
      sx={{ ...sx, border: "1px solid #AAAAAA !important" }}
      ml={[1, 5, 5, 2, 10]}
    >
      <Center mb={2}>
        <Image
          w={["152px", "152px", "152px", "180px", "180px"]}
          h={["162px", "162px", "162px", "208px", "208px"]}
          src={image}
          alt="product"
        />
      </Center>
      <Center h="26%" sx={{ display: "flex", alignContent: "center" }}>
        <VStack spacing="5px" px={1}>
          <Text
            textTransform="uppercase"
            fontWeight="600"
            m="auto"
            fontSize={["12px", "12px", "12px", "15px", "15px"]}
            textAlign="center"
          >
            {title}
          </Text>
          <Text fontSize="10px" color="#FFB800">
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
            onClick={onClick}
          >
            <Text fontSize={["9px", "9px", "9px", "12px", "12px"]} textTransform="none">
              Explore
            </Text>
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default ProductCard;

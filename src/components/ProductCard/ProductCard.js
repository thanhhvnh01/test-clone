import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const ProductCard = ({ title, subtitle, thumbImage, images, sx, onClick }) => {
  const [hoverImage, setHoverImage] = useState(null);
  console.log(hoverImage);
  return (
    <Box
      onClick={() => {
        onClick();
      }}
      bg="#ffff"
      tabIndex={0}
      _hover={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      // w={isMobile ? "112px" : "236px"}
      maxW={["175px", "182px", "182px", "270px", "270px"]}
      // h={isMobile ? "139px" : "318px"}
      h={["248px", "248px", "248px", "411px", "411px"]}
      sx={{ ...sx, border: "1px solid #AAAAAA !important" }}
      ml={[1, 5, 5, 2, 10]}
      position="relative"
    >
      <Image
        w="100%"
        h={["162px", "162px", "162px", "278px", "278px"]}
        src={hoverImage === null ? thumbImage : images[hoverImage]}
        alt="product"
      />
      <Box mt={1}>
        <VStack spacing="5px" px={1} display="block">
          <Text textTransform="uppercase" fontWeight="600" m="auto" fontSize={["12px", "12px", "12px", "15px", "15px"]}>
            {title}
          </Text>
        </VStack>
        <Box position="absolute" sx={{ bottom: 0 }} mb={2} ml={1}>
          <Text textTransform="none" fontSize="10px" color="#AAAAAA">
            {`${subtitle}`}
          </Text>
          <HStack display="flex">
            {images?.map((image, index) => {
              return (
                <Image
                  onMouseEnter={() => {
                    setHoverImage(index);
                  }}
                  onMouseLeave={() => {
                    setHoverImage(null);
                  }}
                  h="47px"
                  w="48px"
                  key={index}
                  src={image}
                />
              );
            })}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;

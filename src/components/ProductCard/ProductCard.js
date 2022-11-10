import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

const ProductCard = ({ title, subtitle, thumbImage, images, sx, hover, onClick, isBestSelling }) => {
  const [hoverImage, setHoverImage] = useState(null);
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      onClick={() => {
        onClick();
      }}
      bg="#ffff"
      tabIndex={0}
      _hover={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        transfrom: "scale(1.1)",
        transitionDuration: "0.2s",
      }}
      w={["175px", "182px", "182px", "270px", "270px"]}
      h={["248px", "248px", "248px", "390px", "390px"]}
      sx={{ ...sx, cursor: "pointer", position: "relative" }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Image
        w="100%"
        h={["162px", "162px", "162px", "278px", "278px"]}
        src={hoverImage === null ? thumbImage : images[hoverImage]}
        alt="product"
      />
      {isBestSelling && (
        <Box p={1} px={2} bg="red" top="10px" left="-3px" sx={{ position: "absolute" }}>
          <Text color="#ffff" fontSize="13px">
            <FormattedMessage id="label.bestSelling" />
          </Text>
        </Box>
      )}

      <Box mt={1}>
        <VStack spacing="5px" px={1} display="block">
          <Text
            textTransform="uppercase"
            fontWeight="600"
            m="auto"
            fontSize={["12px", "12px", "12px", "13px", "13px"]}
            noOfLines={2}
          >
            {title}
          </Text>
        </VStack>
        <Box sx={{ bottom: 0 }} mb={2} ml={1}>
          <Text textTransform="none" fontSize="12px" color="#AAAAAA">
            {`${subtitle}`}
          </Text>
          {isHover && (
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
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;

import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// responsive
import { ResponsiveImage } from "src/theme/ResponsiveTheme";

const ImageSlider = ({ images }) => {
  return (
    <Box h={ResponsiveImage} sx={{ width: "100%", zIndex: 1, position: "block" }}>
      <Carousel infiniteLoop autoPlay showStatus={false} className="slide-container">
        {images.map((slideImage) => (
          <Box sx={{ position: "relative", color: "#ffff", textAlign: "center" }}>
            <Image
              src={slideImage.url}
              h={ResponsiveImage}
              sx={{ width: "100%", maxHeight: "700px", objectFit: "cover" }}
            />
            <Text
              fontSize="93px"
              as="b"
              textTransform="uppercase"
              fontWeight="700"
              fontFamily="Josefin Sans"
              sx={{
                position: "absolute",
                top: "45%",
                left: "35%",
                textShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
              }}
            >
              AndreaHair
            </Text>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageSlider;

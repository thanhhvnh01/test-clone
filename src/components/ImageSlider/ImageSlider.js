import { Box, Container, Image, Text } from "@chakra-ui/react";
import useMobile from "@hooks/useMobile";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// responsive
import { ResponsiveImage } from "src/theme/ResponsiveTheme";

const ImageSlider = ({ images }) => {
  const [isMobile] = useMobile();

  return (
    <Container p={isMobile && 0} maxW={isMobile ? "100%" : "90%"}>
      <Box
        h={ResponsiveImage}
        sx={{ mt: isMobile ? "60px" : "120px", width: "100%", display: "flex", mr: "auto", ml: "auto" }}
      >
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          showArrows={false}
          showStatus={false}
          className="slide-container"
        >
          {images.map((slideImage, index) => (
            <Box key={index} sx={{ position: "relative", color: "#ffff", textAlign: "center" }}>
              <Image
                src={slideImage.url}
                h={ResponsiveImage}
                sx={{ width: "100%", maxHeight: "700px", objectFit: "cover" }}
              />
              <Box>
                <Text
                  fontSize={isMobile ? "32px" : "93px"}
                  as="b"
                  textTransform="uppercase"
                  fontWeight="700"
                  fontFamily="Josefin Sans"
                  sx={{
                    position: "absolute",
                    top: isMobile ? "35%" : "45%",
                    left: "35%",
                    textShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                  }}
                >
                  AndreaHair
                </Text>
                <Text
                  fontSize={isMobile ? "15px" : "45px"}
                  as="b"
                  textTransform="uppercase"
                  fontWeight="500"
                  fontFamily="Josefin Sans"
                  sx={{
                    position: "absolute",
                    top: isMobile ? "52%" : "61%",
                    left: isMobile ? "46%" : "46%",
                    textShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                  }}
                >
                  Beautiful hair
                </Text>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default ImageSlider;

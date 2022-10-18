import React from "react";
import { FormattedMessage } from "react-intl";
import { Box, Button, Container, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import ImageSlider from "@components/ImageSlider";
import ProductSlider from "@components/ProductSlider";
// css
// slider

const slideImages = [
  {
    url: "images/picture_1.png",
    caption: "Slide 1",
  },
  {
    url: "images/slide_3.jpg",
    caption: "Slide 2",
  },
  {
    url: "images/slide_4.jpg",
    caption: "Slide 3",
  },
];

const AboutUsSection = ({ content }) => {
  return (
    <Flex bg="#F5F5F5" px={[10, 10, 10, 10, 20]} py={10} justifyContent="center">
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Image src="/images/about_us_picture.png" />
        </GridItem>
        <GridItem colSpan={1} p={10}>
          <Box py={[1, 2, 3, 10, 20]}>
            <Text
              sx={{ borderBottom: "4px solid black" }}
              fontSize="40px"
              fontWeight="bold"
              textTransform="uppercase"
              textAlign="center"
            >
              <FormattedMessage id="label.aboutUs" defaultMessage="About us" />
            </Text>
          </Box>
          <Text textAlign="justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. . .
          </Text>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
            <Button>Read more</Button>
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
};

const BestSaleSection = () => {
  return (
    <Box>
      <Box pb={6}>
        <Text
          // sx={{ borderBottom: "4px solid black" }}
          fontSize="40px"
          fontWeight="bold"
          textAlign="center"
          textTransform="uppercase"
        >
          Best sale products
        </Text>
        <Flex bg="black" w={97} h="3px" m="auto" />
      </Box>
      <Box bg="#6B6E72">
        <ProductSlider />
      </Box>
    </Box>
  );
};

const Home = () => {
  return (
    <>
      <ImageSlider images={slideImages} />
      <Container maxW="container.2xl" sx={{ minHeight: "120vh !important", p: 0, mr: "auto", ml: "auto" }}>
        <Box bg="#F5F5F5">
          <AboutUsSection />
          <BestSaleSection />
        </Box>
      </Container>
    </>
  );
};

export default Home;

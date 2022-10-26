import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  SlideFade,
  Text,
  VStack,
} from "@chakra-ui/react";
import ImageSlider from "@components/ImageSlider";
import { useInView } from "react-intersection-observer";
// slider
import useMobile from "@hooks/useMobile";
import SupporterCard from "@components/SupporterCard";
import { subscribeNewMemberAPI } from "@api/main";
import ProductSlider from "@components/ProductSlider";
import { ChevronRightIcon } from "@chakra-ui/icons";

const slideImages = [
  {
    url: "images/picture_1.png",
    caption: "Slide 1",
  },
  {
    url: "images/picture_1.png",
    caption: "Slide 2",
  },
  {
    url: "images/picture_1.png",
    caption: "Slide 3",
  },
];

const Home = () => {
  const [isMobile] = useMobile();
  return (
    <>
      <ImageSlider images={slideImages} />
      <Container
        p={isMobile && 0}
        maxW={isMobile ? "100%" : "80%"}
        sx={{ mt: 0, minHeight: "120vh !important", mr: "auto", ml: "auto" }}
      >
        <Box bg="#F5F5F5">
          <BestSaleSection isMobile={isMobile} />
          <AboutUsSection isMobile={isMobile} />
          <SupportSection isMobile={isMobile} />
        </Box>
      </Container>
      <SignUpSection isMobile={isMobile} />
    </>
  );
};

const AboutUsSection = ({ content, isMobile }) => {
  const { ref, inView } = useInView();
  return (
    <SlideFade ref={ref} in={inView} offsetY="100px">
      {!isMobile ? (
        <Flex bg="#F5F5F5" px={[10, 10, 10, 10, "50px"]} py={0} justifyContent="center">
          <Grid templateColumns="repeat(2, 1fr)" gap={3}>
            <GridItem colSpan={1}>
              <Image src="/images/about_us_picture.png" />
            </GridItem>
            <GridItem colSpan={1}>
              <Box pt={20}>
                <Box py={[1, 2, 3, 10, 15]}>
                  <Text fontSize="40px" fontWeight="bold" textTransform="uppercase" textAlign="center">
                    <FormattedMessage id="title.aboutUs" defaultMessage="About us" />
                  </Text>
                  <Flex bg="black" w={97} h="3px" m="auto" />
                </Box>
                <Box bg="#DFDFDF" p={7} borderRadius="17px">
                  <Text textAlign="justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standa1rd dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum. . .
                  </Text>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                  <Button sx={{ color: " #2D3748", borderColor: "#2D3748" }}>
                    <FormattedMessage id="button.readMore" />
                  </Button>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Flex>
      ) : (
        <Box bg="#F5F5F5" py={5}>
          <VStack spacing="24px">
            <Box>
              <Text fontSize="20px" fontWeight="bold" textTransform="uppercase" textAlign="center">
                <FormattedMessage id="title.aboutUs" defaultMessage="About us" />
              </Text>
              <Flex bg="black" w={97} h="3px" m="auto" />
            </Box>
            <Image px={10} pt={0} src="/images/about_us_picture.png" />
            <Text px={10} fontSize="10px" textAlign="justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standa1rd dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum. . .
            </Text>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
              <Button size="sm">Read more</Button>
            </Box>
          </VStack>
        </Box>
      )}
    </SlideFade>
  );
};

const BestSaleSection = ({ isMobile }) => {
  const { ref, inView } = useInView();
  return (
    <SlideFade ref={ref} in={inView} offsetY="100px">
      <Box>
        <Box pb={6}>
          <Text
            // sx={{ borderBottom: "4px solid black" }}
            fontSize={isMobile ? "20px" : "40px"}
            fontWeight="bold"
            textAlign="center"
            textTransform="uppercase"
            pt={5}
          >
            <FormattedMessage id="label.bestSelling" />
          </Text>
          <Flex bg="black" w={97} h="3px" m="auto" />
        </Box>
        <Box bg="#EEEEEE" p={isMobile ? 0 : 10}>
          {/* <Grid templateColumns={isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)"} gap={3}>
            {products.map((item, index) => {
              return (
                <GridItem key={index} mt={5} display="flex" justifyContent="center">
                  <ProductCard title={item.title} itemId={index} />
                </GridItem>
              );
            })}
          </Grid> */}
          <ProductSlider />
          <Button
            variant="link"
            className="navbar-item"
            sx={{
              textTransform: "none",
              textDecoration: "none",
              display: "flex",
              ml: "auto",
              color: "black",
            }}
          >
            <FormattedMessage id="button.more" /> {<ChevronRightIcon />}
          </Button>
        </Box>
      </Box>
    </SlideFade>
  );
};

const SupportSection = ({ isMobile }) => {
  const { ref, inView } = useInView();
  return (
    <Box bgImage="url('/backgrounds/support_background.png')">
      <SlideFade ref={ref} in={inView} offsetY="100px">
        <Box pb={5}>
          <Text
            pt={10}
            fontSize={isMobile ? "20px" : "40px"}
            fontWeight="bold"
            textAlign="center"
            textTransform="uppercase"
          >
            <FormattedMessage id="label.supportOnline" />
          </Text>
          <Flex bg="black" w={97} h="3px" m="auto" />
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem colSpan={1} p={isMobile ? "10px" : "50px"}>
              <SupporterCard isMobile={isMobile} />
            </GridItem>
            <GridItem colSpan={1} p={isMobile ? "10px" : "50px"}>
              <SupporterCard isMobile={isMobile} />
            </GridItem>
            <GridItem colSpan={1} p={isMobile ? "10px" : "50px"}>
              <SupporterCard isMobile={isMobile} />
            </GridItem>
          </Grid>
          <Button
            variant="link"
            className="navbar-item"
            sx={{
              textTransform: "none",
              textDecoration: "none",
              display: "flex",
              ml: "auto",
              mr: 10,
              color: "black",
            }}
          >
            <FormattedMessage id="button.more" /> {<ChevronRightIcon />}
          </Button>
        </Box>
      </SlideFade>
    </Box>
  );
};

const SignUpSection = ({ isMobile }) => {
  const { ref, inView } = useInView();
  const [email, setEmail] = useState("");

  const handleChangeInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = async () => {
    await subscribeNewMemberAPI({ email });
  };

  return (
    <Box bg="#6B6E72" id="sign-up-section">
      <SlideFade ref={ref} in={inView} offsetY="100px">
        <Text pt={isMobile ? 10 : 20} fontSize="20px" color="#FFEA85" textAlign="center">
          <FormattedMessage id="label.subscribeForInfo" />
        </Text>
        <VStack
          spacing="15px"
          sx={{ justifyContent: "center", m: "auto", mt: 4 }}
          pb={isMobile ? "60px" : "105px"}
          w={isMobile ? "80%" : "25%"}
        >
          <InputGroup>
            <InputLeftAddon children="Email" />
            <Input
              value={email}
              onChange={handleChangeInput}
              variant="outline"
              bg="#fffff"
              placeholder="examle@gmail.com"
            />
          </InputGroup>
          <Button onClick={handleSignUp} className="btn-sub" color="#FFEA85" borderColor="#FFEA85">
            <FormattedMessage id="button.subsrcibe" />
          </Button>
        </VStack>
      </SlideFade>
    </Box>
  );
};

export default Home;

import React from "react";
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
import ProductCard from "@components/ProductCard";

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

const products = [
  {
    title: "RED Hair",
    image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
  },
  {
    title: "RED Hair",
    image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
  },
  {
    title: "RED Hair",
    image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
  },
  {
    title: "RED Hair",
    image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
  },
  {
    title: "RED Hair",
    image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
  },
  {
    title: "RED Hair",
    image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
  },
  {
    title: "RED Hair",
    image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
  },
  {
    title: "RED Hair",
    image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
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
          <AboutUsSection isMobile={isMobile} />
          <BestSaleSection isMobile={isMobile} />
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
        <Flex bg="#F5F5F5" px={[10, 10, 10, 10, 20]} py={10} justifyContent="center">
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem colSpan={1}>
              <Image src="/images/about_us_picture.png" />
            </GridItem>
            <GridItem colSpan={1} p={10}>
              <Box py={[1, 2, 3, 10, 15]}>
                <Text fontSize="40px" fontWeight="bold" textTransform="uppercase" textAlign="center">
                  <FormattedMessage id="label.aboutUs" defaultMessage="About us" />
                  <Flex bg="black" w={97} h="3px" m="auto" />
                </Text>
              </Box>
              <Text textAlign="justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standa1rd dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum. . .
              </Text>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                <Button>Read more</Button>
              </Box>
            </GridItem>
          </Grid>
        </Flex>
      ) : (
        <Box bg="#F5F5F5" py={5}>
          <VStack spacing="24px">
            <Box>
              <Text fontSize="20px" fontWeight="bold" textTransform="uppercase" textAlign="center">
                <FormattedMessage id="label.aboutUs" defaultMessage="About us" />
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
          >
            <FormattedMessage id="label.bestSelling" />
          </Text>
          <Flex bg="black" w={97} h="3px" m="auto" />
        </Box>
        <Box bg="#EEEEEE" p={10}>
          <Grid templateColumns={isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)"} gap={3}>
            {products.map((item, index) => {
              return (
                <GridItem key={index} mt={5} display="flex" justifyContent="center">
                  <ProductCard title={item.title} itemId={index} />
                </GridItem>
              );
            })}
          </Grid>
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
        <Box pb={20}>
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
        </Box>
      </SlideFade>
    </Box>
  );
};

const SignUpSection = ({ isMobile }) => {
  const { ref, inView } = useInView();
  return (
    <Box bg="#6B6E72">
      <SlideFade ref={ref} in={inView} offsetY="100px">
        <Text pt={isMobile ? 10 : 20} color="#FFEA85" textAlign="center">
          <FormattedMessage id="label.subscribeForInfo" />
        </Text>
        <VStack
          spacing="15px"
          sx={{ justifyContent: "center", m: "auto", mt: 4 }}
          pb={isMobile ? "60px" : "120px"}
          w={isMobile ? "80%" : "25%"}
        >
          <InputGroup>
            <InputLeftAddon children="Email" />
            <Input variant="outline" bg="#fffff" placeholder="examle@gmail.com" />
          </InputGroup>
          <Button color="#FFEA85" borderColor="#FFEA85">
            <FormattedMessage id="button.subsrcibe" />
          </Button>
        </VStack>
      </SlideFade>
    </Box>
  );
};

export default Home;

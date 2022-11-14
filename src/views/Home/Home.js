import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  SlideFade,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import ImageSlider from "@components/ImageSlider";
import { useInView } from "react-intersection-observer";
// slider
import useMobile from "@hooks/useMobile";
import SupporterCard from "@components/SupporterCard";
import { getBestSaleProductsAPI, getSupportersAPI } from "@api/main";
import ProductSlider from "@components/ProductSlider";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { getErrorMessage } from "@api/handleApiError";
import { useNavigate } from "react-router-dom";

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
  const initLang = localStorage.getItem("language");
  const toast = useToast();
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState([]);
  const [supporterData, setSupporterData] = useState([]);

  const fetchProductData = async (lang) => {
    try {
      const res = await getBestSaleProductsAPI(lang);
      setProductsData(res.data.pageData);
    } catch (error) {
      toast({
        title: "Api error",
        description: getErrorMessage(error),
        status: "error",
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    fetchProductData(initLang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initLang]);

  const fetchSupporterData = async () => {
    try {
      const res = await getSupportersAPI(3, 1);
      setSupporterData(res.data.pageData);
    } catch (error) {
      toast({
        title: "Api error",
        description: getErrorMessage(error),
        status: "error",
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    fetchSupporterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isMobile] = useMobile();
  return (
    <>
      <ImageSlider images={slideImages} />
      <Container
        p={0}
        maxW={["100%", "100%", "100%", "1200px", "1200px"]}
        sx={{ mt: 0, minHeight: "120vh !important", mr: "auto", ml: "auto" }}
      >
        <Box>
          <BestSaleSection isMobile={isMobile} data={productsData} navigate={navigate} />
          <AboutUsSection isMobile={isMobile} navigate={navigate} />
          <SupportSection isMobile={isMobile} data={supporterData} />
        </Box>
      </Container>
    </>
  );
};

const BestSaleSection = ({ isMobile, data, navigate }) => {
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
        <Box bg="#FFFF" p={isMobile ? 0 : 0}>
          <ProductSlider data={data} isMobile={isMobile} />

          <Button
            variant="link"
            className="navbar-item"
            fontWeight="500"
            sx={{
              textTransform: "none",
              textDecoration: "none",
              display: "flex",
              ml: "auto",
              mr: 10,
              color: "black",
            }}
            onClick={() => {
              navigate("/products", { state: { isBestSelling: true } });
            }}
          >
            <FormattedMessage id="button.more" /> {<ChevronRightIcon mt={0.5} />}
          </Button>
        </Box>
      </Box>
    </SlideFade>
  );
};

const AboutUsSection = ({ content, isMobile, navigate }) => {
  const { ref, inView } = useInView();
  return (
    <SlideFade ref={ref} in={inView} offsetY="100px">
      {!isMobile ? (
        <Flex bg="#F5F5F5" px={[10, 10, 10, 10, "50px"]} my={5} justifyContent="center">
          <Flex mx="auto" justifyContent="center">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem colSpan={1} display="flex" ml="auto">
                <Image src="/images/about_us_picture.png" />
              </GridItem>
              <GridItem colSpan={1} sx={{ mt: "auto", mb: "auto", display: "flex" }} maxW="690px">
                <Box>
                  <Box pb={[1, 2, 3, 5, 10]}>
                    <Text fontSize="40px" fontWeight="bold" textTransform="uppercase" textAlign="center">
                      <FormattedMessage id="title.aboutUs" defaultMessage="About us" />
                    </Text>
                    <Flex bg="black" w={97} h="3px" m="auto" />
                  </Box>
                  <Box bg="#DFDFDF" p={7} borderRadius="17px">
                    <Text textAlign="justify">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standa1rd dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. . .
                    </Text>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                    <Button
                      onClick={() => {
                        navigate("/about-us");
                      }}
                      textTransform="none"
                      _hover={{ backgroundColor: "#D8D8D8" }}
                      sx={{ color: " #2D3748", borderColor: "#2D3748" }}
                    >
                      <FormattedMessage id="button.readMore" />
                    </Button>
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </Flex>
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
              <Button
                onClick={() => {
                  navigate("/about-us");
                }}
                size="sm"
                textTransform="none"
                _hover={{ backgroundColor: "#D8D8D8" }}
                sx={{ color: " #2D3748", borderColor: "#2D3748" }}
              >
                <FormattedMessage id="button.readMore" />
              </Button>
            </Box>
          </VStack>
        </Box>
      )}
    </SlideFade>
  );
};

const SupportSection = ({ isMobile, data }) => {
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
          <Grid templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)"} gap={6}>
            {data?.map((item, index) => {
              return (
                <GridItem key={index} colSpan={1} p={isMobile ? "10px" : "50px"}>
                  <SupporterCard
                    isMobile={isMobile}
                    image={item.avatarUrl}
                    name={item.supporterName}
                    email={item.email}
                    fb={item.facebookUrl}
                    ig={item.instagramUrl}
                    whatsapp={item.whatsappPhoneNumber}
                  />
                </GridItem>
              );
            })}
          </Grid>
          <Button
            variant="link"
            className="navbar-item"
            fontWeight="500"
            sx={{
              textTransform: "none",
              textDecoration: "none",
              display: "flex",
              ml: "auto",
              mr: 10,
              color: "black",
            }}
          >
            <FormattedMessage id="button.more" /> {<ChevronRightIcon mt={0.5} />}
          </Button>
        </Box>
      </SlideFade>
    </Box>
  );
};

export default Home;

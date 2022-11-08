import { getProductDetailsAPI, getRelateProductAPI } from "@api/main";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import ProductSlider from "@components/ProductSlider";
import useMobile from "@hooks/useMobile";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useLocation, useNavigate } from "react-router-dom";
import ContactModal from "./ContactModal";

const ProductDetails = () => {
  const [isMobile] = useMobile();
  const navigate = useNavigate();
  const query = useLocation().search;
  const productId = new URLSearchParams(query).get("productId");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState();
  const [relatedProductData, setRelatedProductData] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  const fetchData = async (productId) => {
    if (!!productId) {
      try {
        const res = await getProductDetailsAPI(productId);
        setData(res.data);
      } catch (error) {}
    }
  };

  useEffect(() => {
    fetchData(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  console.log(data);

  const fetchRelatedProductData = async () => {
    if (!!productId) {
      try {
        const productRes = await getRelateProductAPI(12, 1, productId);
        setRelatedProductData(productRes.data.pageData);
      } catch (error) {}
    }
  };

  useEffect(() => {
    fetchRelatedProductData(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  //* actions
  const handleColorClick = (item) => {
    navigate(`/product/details?productId=${item.productId}`);
  };

  return (
    <>
      <Image mt="113px" w="100%" h={["128px", "128px", "128px", "auto", "auto"]} src="/images/product_main.png" />
      <Container
        bg="#ffff"
        p={2}
        maxW={isMobile ? "100%" : "1200px"}
        sx={{
          mt: "-100px",
          mb: "20px",
          minHeight: "120vh !important",
          mr: "auto",
          ml: "auto",
          position: "relative",
          zIndex: 5,
          boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
          pb: "30px",
        }}
      >
        <Box bg="#ffff" py="3" px={3}>
          <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem color="#3182CE">
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem color="#3182CE">
              <BreadcrumbLink href="#">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">{data?.productName}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box mt={10} borderBottom="3px solid #D9D9D9" pb={5}>
          <Grid templateColumns="repeat(7,1fr)">
            <GridItem colSpan={[7, 4, 4, 4, 4]}>
              <Center>
                <Image
                  sx={{ boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.27);" }}
                  maxW="560px"
                  maxH="520px"
                  src={data?.imageUrls[imageIndex]}
                />
              </Center>
              <Center mt={4}>
                <HStack spacing="27px">
                  {data?.imageUrls.map((image, index) => {
                    return (
                      <Image
                        onClick={() => {
                          setImageIndex(index);
                        }}
                        sx={{
                          boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.27);",
                          cursor: "pointer",
                          border: "1px solid #AAAAAA",
                        }}
                        key={index}
                        w="90px"
                        h="90px"
                        src={image}
                      />
                    );
                  })}
                </HStack>
              </Center>
            </GridItem>
            <GridItem colSpan={[7, 3, 3, 3, 3]}>
              <VStack alignItems="flex-start" p={3} sx={{ borderBottom: "1px solid black" }}>
                <Text fontWeight="bold">{data?.productName}</Text>
                <Button
                  _hover={{
                    boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.27);",
                  }}
                  variant="solid"
                  bg="tomato"
                  color="#ffff"
                  onClick={onOpen}
                >
                  Contact
                </Button>
                <HStack>
                  <Text fontWeight="bold">Color: </Text>
                  <Text>{data?.colorName}</Text>
                </HStack>
                <HStack sx={{ cursor: "pointer" }}>
                  <Box
                    width="35px"
                    height="35px"
                    bg={
                      data?.colorCode.length > 1
                        ? `linear-gradient(to bottom,${data?.colorCode[0]}, ${data?.colorCode[2]} 100%)`
                        : `${data?.colorCode[0]}`
                    }
                    borderRadius="50%"
                  />
                  {data?.referenceProducts.map((a, i) => {
                    return (
                      <Box
                        onClick={() => {
                          handleColorClick(a);
                        }}
                        key={i}
                        width="35px"
                        height="35px"
                        bg={
                          a?.colorCode.length > 1
                            ? `linear-gradient(to bottom,${a?.colorCode[0]}, ${a?.colorCode[2]} 100%)`
                            : `${a?.colorCode[0]}`
                        }
                        borderRadius="50%"
                      />
                    );
                  })}
                </HStack>
              </VStack>
              <VStack alignItems="flex-start" p={3}>
                <VStack>
                  <Text fontWeight="bold">
                    <FormattedMessage id="label.productDetails" />
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      <FormattedMessage id="label.substance" />
                    </ListItem>
                    <ListItem>
                      <FormattedMessage id="label.substance" />
                    </ListItem>
                    <ListItem>
                      <FormattedMessage id="label.substance" />
                    </ListItem>
                    <ListItem>
                      <FormattedMessage id="label.substance" />
                    </ListItem>
                    <ListItem>
                      <FormattedMessage id="label.substance" />
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </VStack>
            </GridItem>
          </Grid>
        </Box>
        <Box mt={5}>
          <Grid templateColumns="repeat(7,1fr)">
            <GridItem colSpan={[7, 4, 4, 4, 4]}>
              <AspectRatio _before={{ p: "0px !important" }} w="100%" h={["184px", "128px", "128px", "620px", "620px"]}>
                <iframe title="video" src="https://www.youtube.com/embed/okz5RIZRT0U" />
              </AspectRatio>
            </GridItem>
            <GridItem colSpan={[7, 3, 3, 3, 3]}>
              <VStack alignItems="flex-start" p={3}>
                <VStack>
                  <Text fontWeight="bold">
                    <FormattedMessage id="label.productDetails" />
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      <FormattedMessage id="label.substance" />
                    </ListItem>
                    <ListItem>
                      <FormattedMessage id="label.substance" />
                    </ListItem>
                    <ListItem>
                      <FormattedMessage id="label.substance" />
                    </ListItem>
                    <ListItem>
                      <FormattedMessage id="label.substance" />
                    </ListItem>
                    <ListItem>
                      <FormattedMessage id="label.substance" />
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </VStack>
            </GridItem>
          </Grid>
        </Box>
        <Box>
          <Box pb={6}>
            <Text
              // sx={{ borderBottom: "4px solid black" }}
              fontSize={isMobile ? "20px" : "32px"}
              fontWeight="bold"
              textAlign="center"
              textTransform="uppercase"
              pt={5}
            >
              <FormattedMessage id="label.relatedProduct" />
            </Text>
            <Flex bg="black" w={97} h="3px" m="auto" />
          </Box>
          <Box bg="#EEEEEE" p={isMobile ? 0 : 10}>
            <ProductSlider data={relatedProductData} isMobile={isMobile} />

            <Button
              variant="link"
              className="navbar-item"
              fontWeight="500"
              sx={{
                textTransform: "none",
                textDecoration: "none",
                ml: "auto",
                color: "black",
                display: isMobile ? "none" : "flex",
              }}
            >
              <FormattedMessage id="button.more" /> {<ChevronRightIcon mt={0.5} />}
            </Button>
          </Box>
        </Box>
        {isOpen && <ContactModal isOpen={isOpen} onClose={onClose} productId={productId} />}
      </Container>
    </>
  );
};

export default ProductDetails;

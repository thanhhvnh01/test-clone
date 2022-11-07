import { getProductDetailsAPI } from "@api/main";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import useMobile from "@hooks/useMobile";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ContactModal from "./ContactModal";

const ProductDetails = () => {
  const [isMobile] = useMobile();
  const query = useLocation().search;
  const productId = new URLSearchParams(query).get("productId");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState();

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
  }, [productId]);

  console.log(data);
  // const [image, setImage] = useState();
  // const [imageIndex, setImageIndex] = useState(0);

  // const getImageUrl = () => {};

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
        <Box mt={10}>
          <Grid templateColumns="repeat(7,1fr)">
            <GridItem colSpan={4}>
              <Center>
                <Image maxW="700px" maxH="620px" src={data?.imageUrls[0]} />
              </Center>
              <Center>
                <HStack spacing="27px">
                  <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
                  <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
                  <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
                  <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
                  <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
                </HStack>
              </Center>
            </GridItem>
            <GridItem colSpan={3}>
              <VStack alignItems="flex-start" p={3} sx={{ borderBottom: "1px solid black" }}>
                <Text fontWeight="bold">{data?.productName}</Text>
                <Button onClick={onOpen}>Contact</Button>
                <HStack>
                  <Text fontWeight="bold">Color: </Text>
                  <Text>{data?.colorName}</Text>
                </HStack>
                <HStack>
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
                </HStack>
              </VStack>
            </GridItem>
          </Grid>
        </Box>
        {isOpen && <ContactModal isOpen={isOpen} onClose={onClose} />}
      </Container>
    </>
  );
};

export default ProductDetails;

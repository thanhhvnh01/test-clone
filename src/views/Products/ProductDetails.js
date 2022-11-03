import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Checkbox,
  CheckboxGroup,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import useMobile from "@hooks/useMobile";
import React, { useState } from "react";

const ProductDetails = ({ productId }) => {
  const [isMobile] = useMobile();
  // const [image, setImage] = useState();
  // const [imageIndex, setImageIndex] = useState(0);

  // const getImageUrl = () => {};
  const [demo, setDemo] = useState();
  console.log(demo);

  return (
    <>
      <Image mt="113px" w="100%" h={["128px", "128px", "128px", "auto", "auto"]} src="/images/product_main.png" />
      <Container
        bg="#ffff"
        p={2}
        maxW={isMobile ? "100%" : "80%"}
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
              <BreadcrumbLink href="#">All Products</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box mt={10}>
          <Grid templateColumns="repeat(6,1fr)">
            <GridItem colSpan={1}>
              <VStack>
                <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
                <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
                <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
                <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
                <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
              </VStack>
            </GridItem>
            <GridItem colSpan={3} mt="-7px">
              <Flex justifyContent="center">
                <Image w="500px" h="500px" src="/images/image_2.png" />
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              <Box>
                <Text>Ten san pham</Text>
                <Text>Ten san pham</Text>
                <Text>Ten san pham</Text>
                <Text>Ten san pham</Text>
              </Box>
              <CheckboxGroup
                onChange={(e) => {
                  console.log(e);
                  setDemo(e);
                }}
                value={demo}
              >
                <Checkbox value={"1"}>aaa</Checkbox>
                <Checkbox value="2">aba</Checkbox>
                <Checkbox value="3">aac</Checkbox>
              </CheckboxGroup>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ProductDetails;

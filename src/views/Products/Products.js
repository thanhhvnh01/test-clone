import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import useMobile from "@hooks/useMobile";
import React from "react";
import { FormattedMessage } from "react-intl";

const Products = () => {
  const [isMobile] = useMobile();

  return (
    <>
      <Image w="100%" src="/images/product_main.png" />

      <Container
        bg="#ffff"
        maxW={isMobile ? "100%" : "80%"}
        sx={{
          mt: "-50px",
          mb: "20px",
          minHeight: "120vh !important",
          mr: "auto",
          ml: "auto",
          position: "relative",
          zIndex: 5,
          boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        }}
      >
        <Box bg="#ffff" py="3">
          <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">All Products</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box className="product-main" p={5} mt={2}>
          <Flex justifyContent="space-between">
            <Text fontSize="2xl" fontWeight="bold">
              <FormattedMessage id="title.allProducts" />
            </Text>
            <Input w="234px" />
          </Flex>
          <Grid templateColumns="repeat(5, 1fr)">
            <GridItem colSpan={1}>aa</GridItem>
            <GridItem colSpan={4}>bb</GridItem>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Products;

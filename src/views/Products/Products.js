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
  VStack,
} from "@chakra-ui/react";
import ProductCard from "@components/ProductCard";
import ProductFilter from "@components/ProductFilter";
import useMobile from "@hooks/useMobile";
import React from "react";
import { FormattedMessage } from "react-intl";

const Products = () => {
  const [isMobile] = useMobile();
  // filter
  // const [selectedCategory, setSelectedCategory] = useState();
  // const [selectedProductType, setSelectedProductType] = useState();

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
          <Grid templateColumns="repeat(13, 1fr)" gap={6}>
            <GridItem colSpan={3}>
              <FilterSection />
            </GridItem>
            <GridItem colSpan={10}>
              <ProductSection />
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

const FilterSection = () => {
  return (
    <VStack>
      <Flex sx={{ width: "100%" }}>
        <FormattedMessage id="label.filter" />
      </Flex>
      <Box sx={{ width: "100%" }}>
        <ProductFilter />
      </Box>
    </VStack>
  );
};

const ProductSection = () => {
  return (
    <Box>
      <Flex pl={10} justifyContent="space-between">
        <Text>Showing 13 items</Text>
        <Text>Sort</Text>
      </Flex>
      <Grid
        mt={7}
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
      >
        {data.map((item, index) => {
          return (
            <ProductCard
              sx={{ mb: 5, border: "1px solid #AAAAAA !important", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              key={index}
              title={item.productName}
              image={item.image}
              subtitle={item.productTypeName}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

const data = [
  {
    productName: "lala",
    productTypeName: "aa",
    image: "/images/product_1.png",
  },
  {
    productName: "lala",
    productTypeName: "aa",
    image: "/images/product_1.png",
  },
  {
    productName: "lala",
    productTypeName: "aa",
    image: "/images/product_1.png",
  },
  {
    productName: "lala",
    productTypeName: "aa",
    image: "/images/product_1.png",
  },
  {
    productName: "lala",
    productTypeName: "aa",
    image: "/images/product_1.png",
  },
  {
    productName: "lala",
    productTypeName: "aa",
    image: "/images/product_1.png",
  },
  {
    productName: "lala",
    productTypeName: "aa",
    image: "/images/product_1.png",
  },
  {
    productName: "lala",
    productTypeName: "aa",
    image: "/images/product_1.png",
  },
  {
    productName: "lala",
    productTypeName: "aa",
    image: "/images/product_1.png",
  },
  {
    productName: "lala",
    productTypeName: "aa",
    image: "/images/product_1.png",
  },
  {
    productName: "lala",
    productTypeName: "aa",
    image: "/images/product_1.png",
  },
  {
    productName: "lala",
    productTypeName: "aa",
    image: "/images/product_1.png",
  },
  {
    productName: "lala",
    productTypeName: "aa",
    image: "/images/product_1.png",
  },
];

export default Products;

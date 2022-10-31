import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import ProductCard from "@components/ProductCard";
import ProductFilter from "@components/ProductFilter";
import useMobile from "@hooks/useMobile";
import React from "react";
import { FormattedMessage } from "react-intl";
// icon
import { BsFilterLeft, BsFilter } from "react-icons/bs";
import MobileProductFilter from "@components/MobileProductFilter";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// paging
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [isMobile] = useMobile();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // filter
  // const [selectedCategory, setSelectedCategory] = useState();
  // const [selectedProductType, setSelectedProductType] = useState();

  return (
    <>
      <Image mt="113px" w="100%" h={["128px", "128px", "128px", "auto", "auto"]} src="/images/product_main.png" />

      <Container
        bg="#ffff"
        p={isMobile ? 0 : 2}
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
        <Box bg="#ffff" py={3} px={3}>
          <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem color="#3182CE">
              <BreadcrumbLink href="/home">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem color="#3182CE">
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">All Products</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box className="product-main" p={3} mt={2}>
          {!isMobile ? (
            <>
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
            </>
          ) : (
            <>
              <Flex justifyContent="space-between">
                <HStack onClick={onOpen}>
                  <BsFilter style={{ height: "19px", width: "19px" }} />
                  <Text fontWeight="bold">Filter</Text>
                </HStack>
                <HStack>
                  <Text fontWeight="bold" color="#FFB800">
                    30
                  </Text>
                  <Text fontWeight="bold">items</Text>
                </HStack>
                <HStack>
                  <BsFilterLeft style={{ height: "19px", width: "19px" }} />
                  <Text fontWeight="bold">Sort:</Text>
                  <Text color="#FFB800" fontWeight="bold">
                    A-Z
                  </Text>
                </HStack>
              </Flex>
              <ProductSection />
            </>
          )}
        </Box>
        {isOpen && <MobileProductFilter isOpen={isOpen} onClose={onClose} />}
      </Container>
    </>
  );
};

const FilterSection = () => {
  return (
    <VStack>
      <Flex sx={{ width: "100%" }}>
        <BsFilter style={{ height: "19px", width: "19px" }} />
        <FormattedMessage id="label.filter" />
      </Flex>
      <Box sx={{ width: "100%" }}>
        <ProductFilter />
      </Box>
    </VStack>
  );
};

const ProductSection = () => {
  const navigate = useNavigate();
  // const [pageSize, setPageSize] = useState(5);
  // const [pageNumber, setPageNumber] = useState();

  const handleOnClick = () => {
    navigate("/product/details");
  };

  return (
    <Box>
      <Flex display={["none", "none", "none", "flex", "flex"]} pl={[0, 0, 0, 10, 10]} justifyContent="space-between">
        <HStack fontWeight="bold">
          <Text>Showing</Text>
          <Text color="#FFB800"> 12 </Text>
          <Text>items </Text>
        </HStack>
        <HStack fontWeight="bold">
          <BsFilterLeft />
          <Text>Sort</Text>
        </HStack>
      </Flex>
      <Grid
        mt={2}
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
      >
        {data.map((item, index) => {
          return (
            <GridItem colSpan={1} key={index}>
              <ProductCard
                sx={{
                  mb: 5,
                  mx: "auto",
                  border: "1px solid #AAAAAA !important",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                key={index}
                title={item.productName}
                image={item.image}
                subtitle={item.productTypeName}
                onClick={handleOnClick}
              />
            </GridItem>
          );
        })}
      </Grid>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ChevronRightIcon boxSize={5} color="#6B6E72" />}
        onPageChange={() => {}}
        pageRangeDisplayed={5}
        pageCount={5}
        previousLabel={<ChevronLeftIcon boxSize={5} color="#6B6E72" />}
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        pageClassName={"pagingateItem"}
        activeClassName={"active"}
      />
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
];

export default Products;

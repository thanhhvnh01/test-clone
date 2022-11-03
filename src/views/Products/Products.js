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
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import ProductCard from "@components/ProductCard";
import ProductFilter from "@components/ProductFilter";
import useMobile from "@hooks/useMobile";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
// icon
import { BsFilterLeft, BsFilter } from "react-icons/bs";
import MobileProductFilter from "@components/MobileProductFilter";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
// paging
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";
import { FormProvider } from "@components/hook-form";
import { useForm } from "react-hook-form";
import { getProductsAPI } from "@api/main";

const Products = () => {
  const [isMobile] = useMobile();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const query = useLocation().search;
  const categoryIdParam = new URLSearchParams(query).get("categoryId");
  const productTypeId = new URLSearchParams(query).get("productTypeId");
  // filter
  const [selectedProductType, setSelectedProductType] = useState();
  const [keyword, setKeyword] = useState("");
  // product data
  const [pageSize] = useState(12);
  const [pageNumber] = useState(0);
  const [products, setProducts] = useState([]);

  // form
  const methods = useForm({
    mode: "all",
  });

  const {
    watch,
    setValue,
    // formState: { isValid },
  } = methods;

  const categoryId = watch("categoryId");
  const productTypes = watch("productTypes");
  const colors = watch("colors");

  // action ( reset productTypes when categoryId changed )
  useEffect(() => {
    setValue("productTypes", []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  // get products
  const fetchProductData = async (pageSize, pageNumber, keyword, lang, data) => {
    try {
      const productRes = await getProductsAPI(pageSize, pageNumber, keyword, lang, data);
      setProducts(productRes.data.pageData);
    } catch (error) {}
  };

  useEffect(() => {
    const productTypeIds = productTypes?.map((i) => {
      return Number(i);
    });
    const colorIds = colors?.map((i) => {
      return Number(i);
    });
    fetchProductData(pageSize, pageNumber + 1, keyword, "en", {
      categoryId: Number(categoryId),
      productTypeIds: productTypeIds,
      colorIds: colorIds,
    });
  }, [pageSize, pageNumber, keyword, categoryId, productTypes, colors]);

  useEffect(() => {
    setValue("categoryId", categoryIdParam);
    setSelectedProductType(productTypeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryIdParam, productTypeId]);

  // * actions
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

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
              <BreadcrumbLink href="/home">
                <FormattedMessage id="label.home" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem color="#3182CE">
              <BreadcrumbLink href="/products">
                <FormattedMessage id="label.products" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">{}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <FormProvider methods={methods}>
          <Box className="product-main" p={3} mt={2}>
            {!isMobile ? (
              <>
                <Flex justifyContent="space-between">
                  <Text fontSize="2xl" fontWeight="bold">
                    <FormattedMessage id="title.allProducts" />
                  </Text>
                  <Box mb={2}>
                    <InputGroup>
                      <Input w="234px" onChange={handleKeywordChange} value={keyword} />
                      <InputRightElement children={<SearchIcon />} />
                    </InputGroup>
                  </Box>
                </Flex>
                <Grid templateColumns="repeat(13, 1fr)" gap={6}>
                  <GridItem colSpan={3}>
                    <FilterSection
                      categoryId={categoryId}
                      selectedProductType={selectedProductType}
                      setValue={setValue}
                    />
                  </GridItem>
                  <GridItem colSpan={10}>
                    <ProductSection
                      categoryId={categoryId}
                      keyword={keyword}
                      pageSize={pageSize}
                      pageNumber={pageNumber}
                      data={products}
                    />
                  </GridItem>
                </Grid>
              </>
            ) : (
              <>
                <Flex justifyContent="space-between">
                  <HStack onClick={onOpen}>
                    <BsFilter style={{ height: "19px", width: "19px" }} />
                    <Text fontWeight="bold">
                      <FormattedMessage id="label.filter" />
                    </Text>
                  </HStack>
                  <HStack>
                    <Text fontWeight="bold" color="#FFB800">
                      30
                    </Text>
                    <Text fontWeight="bold">
                      <FormattedMessage id="label.items" />
                    </Text>
                  </HStack>
                  <HStack>
                    <BsFilterLeft style={{ height: "19px", width: "19px" }} />
                    <Text fontWeight="bold">
                      <FormattedMessage id="label.sort" />
                    </Text>
                    <Text color="#FFB800" fontWeight="bold">
                      A-Z
                    </Text>
                  </HStack>
                </Flex>
                <ProductSection
                  categoryId={categoryId}
                  keyword={keyword}
                  pageSize={pageSize}
                  pageNumber={pageNumber}
                  data={products}
                />
              </>
            )}
          </Box>

          {isOpen && <MobileProductFilter isOpen={isOpen} onClose={onClose} />}
        </FormProvider>
      </Container>
    </>
  );
};

const FilterSection = ({ categoryId, selectedProductType, setSelectedCategory, setValue }) => {
  return (
    <VStack>
      <Flex sx={{ width: "100%" }}>
        <BsFilter style={{ height: "19px", width: "19px" }} />
        <FormattedMessage id="label.filter" />
      </Flex>
      <Box sx={{ width: "100%" }}>
        <ProductFilter setValue={setValue} categoryId={categoryId} setSelectedCategory={setSelectedCategory} />
      </Box>
    </VStack>
  );
};

const ProductSection = ({ categoryId, keyword, pageSize, pageNumber, data }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/product/details");
  };

  return (
    <Box>
      <Flex
        display={["none", "none", "none", "flex", "flex"]}
        pr={[0, 0, 0, 5, 5]}
        pl={[0, 0, 0, 10, 12]}
        justifyContent="space-between"
      >
        <HStack fontWeight="bold">
          <Text>
            <FormattedMessage id="label.showing" />
          </Text>
          <Text color="#FFB800"> 12 </Text>
          <Text>
            <FormattedMessage id="label.items" />{" "}
          </Text>
        </HStack>
        <HStack fontWeight="bold">
          <BsFilterLeft />
          <Text>
            <FormattedMessage id="label.sort" />
          </Text>
        </HStack>
      </Flex>
      <Grid
        mt={2}
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
      >
        {data.length > 0 ? (
          data?.map((item, index) => {
            return (
              <GridItem sx={{ display: "flex", mx: "auto" }} colSpan={1} key={index}>
                <ProductCard
                  sx={{
                    mb: 5,
                    mx: "auto",
                    border: "1px solid #AAAAAA !important",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                  key={index}
                  title={item.productName}
                  image={item.imageUrl}
                  subtitle={item.productTypeName}
                  onClick={handleOnClick}
                />
              </GridItem>
            );
          })
        ) : (
          <Text>
            <FormattedMessage id="label.noitemhere" />
          </Text>
        )}
      </Grid>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <ChevronRightIcon
            boxSize={5}
            color="#6B6E72"
            onClick={() => {
              // setPageNumber(pageNumber + 1);
            }}
          />
        }
        onPageChange={() => {}}
        pageRangeDisplayed={5}
        pageCount={5}
        previousLabel={
          <ChevronLeftIcon
            boxSize={5}
            color="#6B6E72"
            onClick={() => {
              // setPageNumber(pageNumber - 1);
            }}
          />
        }
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        pageClassName={"pagingateItem"}
        activeClassName={"active"}
      />
    </Box>
  );
};

export default Products;

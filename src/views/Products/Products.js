import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Skeleton,
  SkeletonText,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import ProductCard from "@components/ProductCard";
import ProductFilter from "@components/ProductFilter";
import useMobile from "@hooks/useMobile";
import React, { useCallback, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
// icon
import { BsFilterLeft, BsFilter } from "react-icons/bs";
import MobileProductFilter from "@components/MobileProductFilter";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
// paging
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";
import { FormProvider } from "@components/hook-form";
import { useForm } from "react-hook-form";
import { getProductsAPI } from "@api/main";
import { OrderByTypeEnum } from "@utility/constant";
import { getErrorMessage } from "@api/handleApiError";
import { debounce } from "lodash";

const Products = () => {
  // hooks
  const [isMobile] = useMobile();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const initLang = localStorage.getItem("language");

  const { state } = useLocation();
  const categoryIdParam = state?.categoryId;
  const productTypeId = state?.productTypeId;
  // filter
  const [selectedProductType, setSelectedProductType] = useState();
  const [keyword, setKeyword] = useState("");
  const [categoryName, setCategoryName] = useState();
  // product data
  const [pageSize] = useState(9);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [orderBy] = useState("productName");
  const [orderByType, setOrderByType] = useState(OrderByTypeEnum.Asc);
  const [isLoading, setIsLoading] = useState(false);

  // form
  const methods = useForm({
    mode: "all",
  });

  const {
    watch,
    setValue,
    formState: { isDirty },
  } = methods;

  const categoryId = watch("categoryId");
  const productTypes = watch("productTypes");
  const colors = watch("colors");

  useEffect(() => {
    if (pageNumber !== 0) {
      setPageNumber(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, productTypes]);

  useEffect(() => {
    if (!!productTypeId) {
      setValue("productTypes", [String(productTypeId)]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productTypeId]);

  // * get products
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchProductData = useCallback(
    debounce(async (pageSize, pageNumber, orderByType, orderBy, keyword, lang, data) => {
      try {
        setIsLoading(true);
        const productRes = await getProductsAPI(pageSize, pageNumber, orderByType, orderBy, keyword, lang, data);
        const pageCount = productRes.data.paging.totalItem / 9;
        setPageCount(pageCount);
        setProducts(productRes.data.pageData);
      } catch (error) {
        toast({
          title: "Api error",
          description: getErrorMessage(error),
          status: "error",
          duration: 3000,
        });
      } finally {
        setIsLoading(false);
      }
    }, 400),
    []
  );

  useEffect(() => {
    const productTypeIds = productTypes?.map((i) => {
      return Number(i);
    });
    const colorIds = colors?.map((i) => {
      return Number(i);
    });
    fetchProductData(pageSize, pageNumber + 1, orderByType, orderBy, keyword, initLang, {
      categoryId: !!categoryId ? Number(categoryId) : null,
      productTypeIds: productTypeIds,
      colorIds: colorIds,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize, pageNumber, keyword, categoryId, productTypes, colors, orderByType, orderBy, initLang]);

  useEffect(() => {
    setValue("categoryId", categoryIdParam);
    setSelectedProductType(productTypeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryIdParam, productTypeId]);

  // * actions
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleClearFilter = () => {
    setValue("productTypes", []);
    setValue("categoryId", null);
    setValue("colors", []);
  };

  const handleRequestSort = (e) => {
    e.preventDefault();
    setOrderByType(e.target.value);
  };

  const handlePageChange = (e) => {
    setPageNumber(e.selected);
  };

  return (
    <>
      <Image
        mt={isMobile ? "87px" : "113px"}
        w="100%"
        h={["184px", "184px", "184px", "auto", "auto"]}
        src="/images/product_main.png"
      />

      <Container
        bg="#ffff"
        p={isMobile ? 0 : 2}
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
        <Box bg="#ffff" py={3} px={3}>
          <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem color="#3182CE">
              <BreadcrumbLink href="/">
                <FormattedMessage id="label.home" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem color="#3182CE">
              <BreadcrumbLink href="/products">
                <FormattedMessage id="label.products" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">
                {!!categoryId ? categoryName : <FormattedMessage id="title.allProducts" />}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <FormProvider methods={methods}>
          <Box className="product-main" p={3} mt={2}>
            {!isMobile ? (
              <>
                <Flex justifyContent="space-between">
                  <Text fontSize="2xl" fontWeight="bold">
                    {!!categoryId ? categoryName : <FormattedMessage id="title.allProducts" />}
                  </Text>
                </Flex>
                <Grid templateColumns="repeat(13, 1fr)" gap={6}>
                  <GridItem colSpan={3}>
                    <FilterSection
                      isDirty={isDirty}
                      categoryId={categoryId}
                      selectedProductType={selectedProductType}
                      setValue={setValue}
                      handleClearFilter={handleClearFilter}
                      setCategoryName={setCategoryName}
                    />
                  </GridItem>
                  <GridItem colSpan={10}>
                    <ProductSection
                      pageCount={pageCount}
                      categoryId={categoryId}
                      keyword={keyword}
                      pageSize={pageSize}
                      pageNumber={pageNumber}
                      handleRequestSort={handleRequestSort}
                      data={products}
                      handlePageChange={handlePageChange}
                      handleKeywordChange={handleKeywordChange}
                      isLoading={isLoading}
                    />
                  </GridItem>
                </Grid>
              </>
            ) : (
              <>
                <Flex justifyContent="space-between">
                  <HStack fontWeight="bold">
                    <HStack>
                      <BsFilterLeft style={{ height: "19px", width: "19px" }} />
                      <Text>
                        <FormattedMessage id="label.sort" />:
                      </Text>
                    </HStack>
                    <Select
                      onChange={(e) => {
                        handleRequestSort(e);
                      }}
                      variant="unstyled"
                      borderColor="#ffff"
                      fontWeight="bold"
                      textColor="#FFA800"
                    >
                      <option value={OrderByTypeEnum.Asc} style={{ fontWeight: "bold" }}>
                        A-Z
                      </option>
                      <option value={OrderByTypeEnum.Desc} style={{ fontWeight: "bold" }}>
                        Z-A
                      </option>
                    </Select>
                  </HStack>
                  <HStack>
                    <Text fontWeight="bold" color="#FFB800">
                      {products.length}
                    </Text>
                    <Text fontWeight="bold">items</Text>
                  </HStack>

                  <HStack onClick={onOpen}>
                    <BsFilter style={{ height: "19px", width: "19px" }} />
                    <Text fontWeight="bold">Filter</Text>
                  </HStack>
                </Flex>
                <ProductSection
                  pageCount={pageCount}
                  categoryId={categoryId}
                  keyword={keyword}
                  pageSize={pageSize}
                  pageNumber={pageNumber}
                  data={products}
                />
              </>
            )}
          </Box>

          {isOpen && (
            <MobileProductFilter
              isOpen={isOpen}
              onClose={onClose}
              categoryId={categoryId}
              handleClearFilter={handleClearFilter}
            />
          )}
        </FormProvider>
      </Container>
    </>
  );
};

const FilterSection = ({ categoryId, setSelectedCategory, setValue, handleClearFilter, setCategoryName }) => {
  return (
    <VStack>
      <Flex sx={{ width: "100%" }} justifyContent="space-between">
        <HStack>
          <BsFilter style={{ height: "19px", width: "19px" }} />
          <FormattedMessage id="label.filter" />
        </HStack>
        <Button
          onClick={handleClearFilter}
          fontWeight="500"
          textTransform="none"
          variant="solid"
          fontSize="14px"
          rightIcon={<SmallCloseIcon />}
          p={3}
          bg="#FFA800"
          h="23px"
        >
          <FormattedMessage id="button.clearFilter" />
        </Button>
      </Flex>
      <Box sx={{ width: "100%" }}>
        <ProductFilter
          setCategoryName={setCategoryName}
          setValue={setValue}
          categoryId={categoryId}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
    </VStack>
  );
};

const ProductSection = ({
  data,
  handleRequestSort,
  handlePageChange,
  handleKeywordChange,
  keyword,
  isLoading,
  pageCount,
  pageNumber,
}) => {
  const navigate = useNavigate();

  const handleOnClick = (item) => {
    navigate(`/product/details?productId=${item.productId}`);
  };

  return (
    <Box>
      <Flex mb={2}>
        <InputGroup display="flex" justifyContent="flex-end" mr={[0, 0, 0, 3, 5]}>
          <Input w="234px" onChange={handleKeywordChange} value={keyword} />
          <InputRightElement children={<SearchIcon />} />
        </InputGroup>
      </Flex>
      <Flex
        display={["none", "none", "none", "flex", "flex"]}
        pr={[0, 0, 0, 0, 5]}
        pl={[0, 0, 0, 5, 12]}
        justifyContent="space-between"
      >
        <HStack>
          <Text>
            <FormattedMessage id="label.showing" />
          </Text>
          <Text color="#FFB800">{data.length} </Text>
          <Text>
            <FormattedMessage id="label.items" />{" "}
          </Text>
        </HStack>
        <HStack>
          <HStack>
            <BsFilterLeft style={{ height: "19px", width: "19px" }} />
            <Text>
              <FormattedMessage id="label.sort" />:
            </Text>
          </HStack>
          <Select
            onChange={(e) => {
              handleRequestSort(e);
            }}
            variant="unstyled"
            borderColor="#ffff"
            textColor="#FFA800"
          >
            <option value={OrderByTypeEnum.Asc} style={{ fontWeight: "bold", textAlign: "center" }}>
              A-Z
            </option>
            <option value={OrderByTypeEnum.Desc} style={{ fontWeight: "bold", textAlign: "center" }}>
              Z-A
            </option>
          </Select>
        </HStack>
      </Flex>
      <Grid
        mt={2}
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]}
      >
        {isLoading &&
          [...Array(9)].map((e, i) => {
            return (
              <GridItem sx={{ display: "flex", mx: "auto" }} colSpan={1} key={i}>
                <Box w="200px" mb={5}>
                  <Skeleton
                    h={["162px", "162px", "162px", "278px", "278px"]}
                    w={["175px", "182px", "182px", "100%", "200px"]}
                  />
                  <SkeletonText mt={3} noOfLines={2} spacing="2" />
                  <HStack mt={2}>
                    <Skeleton h="47px" w="48px" />
                    <Skeleton h="47px" w="48px" />
                    <Skeleton h="47px" w="48px" />
                  </HStack>
                </Box>
              </GridItem>
            );
          })}
        {data.length > 0 ? (
          data?.map((item, index) => {
            return (
              <GridItem sx={{ display: "flex", mx: "auto" }} colSpan={1} key={index}>
                <ProductCard
                  sx={{
                    mb: 1,
                    mx: "auto",
                  }}
                  key={index}
                  title={item.productName}
                  thumbImage={item.mainImageUrl}
                  images={item.imageUrls}
                  subtitle={item.productTypeName}
                  onClick={() => {
                    handleOnClick(item);
                  }}
                />
              </GridItem>
            );
          })
        ) : (
          <GridItem colSpan={3}>
            <Text textAlign="center">
              <FormattedMessage id="label.noitemhere" />
            </Text>
          </GridItem>
        )}
      </Grid>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ChevronRightIcon boxSize={5} color="#6B6E72" />}
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<ChevronLeftIcon boxSize={5} color="#6B6E72" />}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        pageClassName={"pagingateItem"}
        activeClassName={"active"}
        forcePage={pageNumber}
      />
    </Box>
  );
};

export default Products;

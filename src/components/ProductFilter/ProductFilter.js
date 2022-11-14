import { getCategoriesAPI, getColorAPI, getProductTypesAPI } from "@api/main";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Text } from "@chakra-ui/react";
import { RHFRadioGroup } from "@components/hook-form";
import { RHFSingleCheckbox } from "@components/hook-form/RHFCheckbox";
import { arrayToSelectOptions } from "@utility/ultils";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

const ProductFilter = ({ categoryId, setValue, setCategoryName }) => {
  const navigate = useNavigate();
  const initLang = localStorage.getItem("language");
  const [categoryData, setCategoryData] = useState([]);
  const [productTypeData, setProductTypeData] = useState([]);
  const [colorData, setColorData] = useState([]);

  const handleMenuClick = (category) => {
    navigate(`/products?categoryId=${category}`);
  };

  const fetchCategoryData = async (initLang) => {
    try {
      const categoryRes = await getCategoriesAPI(initLang);
      setCategoryData(categoryRes.data);
      if (!!categoryId) {
        const item = categoryRes.data?.filter((i) => i.categoryId === Number(categoryId));
        setCategoryName(item[0].categoryName);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategoryData(initLang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initLang, categoryId]);

  const fetchProductTypeData = async (categoryId, lang) => {
    try {
      const productTypeRes = await getProductTypesAPI(categoryId, lang);
      setProductTypeData(productTypeRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!!categoryId) {
      fetchProductTypeData(categoryId, initLang);
    }
  }, [categoryId, initLang]);

  // fetch color
  const fetchColorData = async (lang) => {
    try {
      const colorRes = await getColorAPI(lang);
      setColorData(colorRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchColorData(initLang);
  }, [initLang]);

  return (
    <Box>
      <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
        <AccordionItem borderTop="none">
          {({ isExpanded }) => (
            <>
              <AccordionButton py={3}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="bold">
                    <FormattedMessage id="label.category" />
                  </Text>
                </Box>
                {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
              </AccordionButton>
              <AccordionPanel p={0} pl={3} sx={{ borderTop: "1px solid #AAAAAA" }}>
                <RHFRadioGroup
                  resetProductTypes={() => {
                    setValue("productTypes", []);
                  }}
                  handleClick={handleMenuClick}
                  name="categoryId"
                  options={arrayToSelectOptions(categoryData, "categoryName", "categoryId")}
                />
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        {productTypeData.length > 0 && !!categoryId && (
          <AccordionItem borderTop="none">
            {({ isExpanded }) => (
              <>
                <AccordionButton py={3}>
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="bold">
                      <FormattedMessage id="label.productType" />
                    </Text>
                  </Box>
                  {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
                </AccordionButton>
                <AccordionPanel p={0} pl={3} sx={{ borderTop: "1px solid #AAAAAA" }}>
                  <RHFRadioGroup
                    name="productTypes"
                    options={arrayToSelectOptions(productTypeData, "productTypeName", "productTypeId")}
                  />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        )}
        <AccordionItem borderTop="none" borderBottom="none">
          {({ isExpanded }) => (
            <>
              <AccordionButton py={3}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="bold">
                    <FormattedMessage id="label.color" />
                  </Text>
                </Box>
                {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
              </AccordionButton>
              <AccordionPanel p={0} pl={3} sx={{ borderTop: "1px solid #AAAAAA" }}>
                <RHFRadioGroup
                  name="colors"
                  isColor
                  options={arrayToSelectOptions(colorData, "colorName", "colorId", "colorCode")}
                />
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <Flex justifyContent="space-between" mt="2" ml="4">
        <Text fontWeight="bold">
          <FormattedMessage id="label.bestSelling" />
        </Text>
        <RHFSingleCheckbox name="isBestSelling" fontWeight="bold" />
      </Flex>
    </Box>
  );
};

export default ProductFilter;

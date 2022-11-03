import { getCategoriesAPI, getColorAPI, getProductTypesAPI } from "@api/main";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  CheckboxGroup,
  VStack,
} from "@chakra-ui/react";
import { RHFRadioGroup } from "@components/hook-form";
import RHFCheckbox from "@components/hook-form/RHFCheckbox";
import { arrayToSelectOptions } from "@utility/ultils";
import React, { useEffect } from "react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
// import { FormattedMessage } from "react-intl";

const ProductFilter = ({ categoryId, selectedProductType, setValue }) => {
  const initLang = localStorage.getItem("language");
  const [categoryData, setCategoryData] = useState([]);
  const [productTypeData, setProductTypeData] = useState([]);
  const [colorData, setColorData] = useState([]);

  const fetchCategoryData = async (initLang) => {
    try {
      const categoryRes = await getCategoriesAPI(initLang);
      setCategoryData(categoryRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategoryData(initLang);
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
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionButton py={3}>
                <Box flex="1" textAlign="left">
                  <FormattedMessage id="label.category" />
                </Box>
                {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
              </AccordionButton>
              <AccordionPanel p={0} sx={{ borderTop: "1px solid #e2e8f0" }}>
                <CheckboxGroup>
                  <RHFRadioGroup
                    name="categoryId"
                    options={arrayToSelectOptions(categoryData, "categoryName", "categoryId")}
                  />
                </CheckboxGroup>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionButton py={3}>
                <Box flex="1" textAlign="left">
                  <FormattedMessage id="label.productstype" />
                </Box>
                {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
              </AccordionButton>
              <AccordionPanel p={0} sx={{ borderTop: "1px solid #e2e8f0" }}>
                <CheckboxGroup>
                  <VStack p={0} alignItems="flex-start" px={4} spacing={4} py={3}>
                    <RHFCheckbox
                      name="productTypes"
                      options={arrayToSelectOptions(productTypeData, "productTypeName", "productTypeId")}
                    />
                  </VStack>
                </CheckboxGroup>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionButton py={3}>
                <Box flex="1" textAlign="left">
                  <FormattedMessage id="label.color" />
                </Box>
                {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
              </AccordionButton>
              <AccordionPanel p={0} sx={{ borderTop: "1px solid #e2e8f0" }}>
                <CheckboxGroup>
                  <VStack p={0} alignItems="flex-start" px={4} spacing={4} py={3}>
                    <RHFCheckbox
                      name="colors"
                      isColor
                      options={arrayToSelectOptions(colorData, "colorName", "colorId", "colorCode")}
                    />
                  </VStack>
                </CheckboxGroup>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default ProductFilter;

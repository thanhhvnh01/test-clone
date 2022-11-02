import { getCategoriesAPI, getProductTypesAPI } from "@api/main";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RHFCheckbox, RHFRadioGroup } from "@components/hook-form";
import { arrayToSelectOptions } from "@utility/ultils";
import React, { useEffect } from "react";
import { useState } from "react";
// import { FormattedMessage } from "react-intl";

const ProductFilter = ({ categoryId, selectedProductType, setValue }) => {
  const initLang = localStorage.getItem("language");
  const [categoryData, setCategoryData] = useState([]);
  const [productTypeData, setProductTypeData] = useState([]);

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

  return (
    <Box>
      <Accordion defaultIndex={[0, 2]} allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionButton py={3}>
                <Box flex="1" textAlign="left">
                  Category
                </Box>
                {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
              </AccordionButton>
              <AccordionPanel p={0} sx={{ borderTop: "1px solid #e2e8f0" }}>
                <CheckboxGroup>
                  <RHFRadioGroup
                    name="categoryId"
                    options={arrayToSelectOptions(categoryData, "categoryName", "categoryId")}
                  />
                  {/* {categoryData?.map((item) => {
                        return (
                          <RHFCheckbox
                            onChange={() => {
                              handleSelectCategory(item);
                            }}
                            name={`category${item.categoryId}`}
                            key={item.categoryId}
                            label={item.categoryName}
                          />
                        );
                      })} */}
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
                  Product Type
                </Box>
                {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
              </AccordionButton>
              <AccordionPanel p={0} sx={{ borderTop: "1px solid #e2e8f0" }}>
                <CheckboxGroup>
                  <VStack p={0} alignItems="flex-start" px={4} spacing={4} py={3}>
                    {productTypeData?.map((item) => {
                      return (
                        <RHFCheckbox
                          name={`productType${item.productTypeId}`}
                          key={item.productTypeId}
                          label={item.productTypeName}
                        />
                      );
                    })}
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
                  Color
                </Box>
                {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
              </AccordionButton>
              <AccordionPanel py={3} sx={{ borderTop: "1px solid #e2e8f0" }}>
                <Checkbox>
                  <HStack>
                    <Box bg="#FF0000" width="15px" height="15px" borderRadius="50%" /> <Text>Color 1</Text>
                  </HStack>
                </Checkbox>
              </AccordionPanel>
              <AccordionPanel py={3}>
                <Checkbox>
                  <HStack>
                    <Box bg="#FF0000" width="15px" height="15px" borderRadius="50%" /> <Text> Color 2 </Text>
                  </HStack>
                </Checkbox>
              </AccordionPanel>
              <AccordionPanel py={3}>
                <Checkbox>
                  <HStack>
                    <Box bg="#FF0000" width="15px" height="15px" borderRadius="50%" /> <Text> Color 3</Text>
                  </HStack>
                </Checkbox>
              </AccordionPanel>
              <AccordionPanel py={3}>
                <Checkbox>
                  <HStack>
                    <Box bg="#FF0000" width="15px" height="15px" borderRadius="50%" /> <Text> Color 4 </Text>
                  </HStack>
                </Checkbox>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default ProductFilter;

// import { getCategoriesAPI, getProductTypesAPI } from "@api/main";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ProductFilter = ({ selectedCategory }) => {
  //   const [categoryData, setCategoryData] = useState([]);
  //   const [productTypeData, setProductTypeData] = useState([]);
  //   const [categoryData, setCategoryData] = useState([]);

  //   const fetchCategoryData = async () => {
  //     try {
  //       const categoryRes = await getCategoriesAPI(50, 1, "");
  //       setCategoryData(categoryRes.data.pageData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchCategoryData();
  //   }, []);

  //   const fetchProductTypeData = async (data) => {
  //     try {
  //       const productTypeRes = await getProductTypesAPI(50, 1, "", data);
  //       setProductTypeData(productTypeRes.data.pageData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchProductTypeData(selectedCategory);
  //   }, [selectedCategory]);

  return (
    <Box>
      <Accordion allowMultiple>
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
                <RadioGroup>
                  <VStack p={0} alignItems="flex-start" px={4} spacing={4} py={3}>
                    <Radio value="1">Category 1</Radio>

                    <Radio value="2">Category 2</Radio>

                    <Radio value="3">Category 3</Radio>

                    <Radio value="5">Category 4</Radio>
                  </VStack>
                </RadioGroup>
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
              <AccordionPanel p={0}>
                <CheckboxGroup>
                  <VStack p={0} alignItems="flex-start" px={4} spacing={4} py={3}>
                    <Checkbox>Product1</Checkbox>

                    <Checkbox>Product2</Checkbox>

                    <Checkbox>Product3</Checkbox>

                    <Checkbox>Product4</Checkbox>
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
                <Checkbox>Product1</Checkbox>
              </AccordionPanel>
              <AccordionPanel py={3} sx={{ borderTop: "1px solid #e2e8f0" }}>
                <Checkbox>Product2</Checkbox>
              </AccordionPanel>
              <AccordionPanel py={3} sx={{ borderTop: "1px solid #e2e8f0" }}>
                <Checkbox>Product3</Checkbox>
              </AccordionPanel>
              <AccordionPanel py={3} sx={{ borderTop: "1px solid #e2e8f0" }}>
                <Checkbox>Product4</Checkbox>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default ProductFilter;

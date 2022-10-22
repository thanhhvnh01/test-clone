import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Link } from "@chakra-ui/react";
import React from "react";
import { FormattedMessage } from "react-intl";

const ProductsAccordion = () => {
  return (
    <Accordion borderBottom="1px solid" borderTop="none" w="100%" allowMultiple allowToggle>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton px={5} border="none" bg="#353535" sx={{ borderColor: "#00000 !important" }} h="50px">
                <Box
                  fontSize="14px"
                  fontWeight="500"
                  textTransform="uppercase"
                  color="#FFEA85"
                  flex="1"
                  textAlign="left"
                >
                  <Link href="/products">
                    <FormattedMessage id="title.products" />
                  </Link>
                </Box>
                <Box color="#FFEA85">{isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}</Box>
              </AccordionButton>
            </h2>
            <AccordionPanel></AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default ProductsAccordion;

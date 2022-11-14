import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Text } from "@chakra-ui/react";
import ProductFilter from "@components/ProductFilter";
// icon
import { BsFilter } from "react-icons/bs";
import { FormattedMessage } from "react-intl";

const MobileProductFilter = ({
  isOpen,
  onClose,
  categoryId,
  setValue,
  productTypeId,
  colorId,
  isBestSelling,
  handleClearFilter,
}) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg="#FFFFFF">
        <DrawerHeader borderBottomWidth="1px" p={4}>
          <HStack>
            <BsFilter style={{ height: "24px", width: "24px" }} />
            <Text fontWeight="bold" fontSize="15px">
              <FormattedMessage id="label.filter" />
            </Text>
          </HStack>
        </DrawerHeader>
        <DrawerBody p={0}>
          <ProductFilter
            productTypeId={productTypeId}
            colorId={colorId}
            isBestSelling={isBestSelling}
            setValue={setValue}
            categoryId={categoryId}
          />
          <HStack p={5} justifyContent="center">
            <Button onClick={handleClearFilter}>
              <FormattedMessage id="button.clearFilter" />
            </Button>
          </HStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileProductFilter;

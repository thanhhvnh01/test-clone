import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Text } from "@chakra-ui/react";
import ProductFilter from "@components/ProductFilter";
// icon
import { BsFilter } from "react-icons/bs";

const MobileProductFilter = ({ isOpen, onClose, categoryId, setValue }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg="#FFFFFF">
        <DrawerHeader borderBottomWidth="1px" p={4}>
          <HStack>
            <BsFilter style={{ height: "24px", width: "24px" }} />
            <Text fontWeight="bold" fontSize="15px">
              Filter
            </Text>
          </HStack>
        </DrawerHeader>
        <DrawerBody p={0}>
          <ProductFilter setValue={setValue} categoryId={categoryId} />
          <HStack p={5} justifyContent="center">
            <Button>Reset</Button>
            <Button>Apply</Button>
          </HStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileProductFilter;

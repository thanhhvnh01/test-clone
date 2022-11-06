import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import useMobile from "@hooks/useMobile";
import React from "react";
import ContactModal from "./ContactModal";

const ProductDetails = ({ productId }) => {
  const [isMobile] = useMobile();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [image, setImage] = useState();
  // const [imageIndex, setImageIndex] = useState(0);

  // const getImageUrl = () => {};

  return (
    <>
      <Image mt="113px" w="100%" h={["128px", "128px", "128px", "auto", "auto"]} src="/images/product_main.png" />
      <Container
        bg="#ffff"
        p={2}
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
        <Box bg="#ffff" py="3" px={3}>
          <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem color="#3182CE">
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem color="#3182CE">
              <BreadcrumbLink href="#">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">All Products</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box mt={10}>
          <Grid templateColumns="repeat(7,1fr)">
            <GridItem colSpan={4}>
              <Center>
                <Image maxW="700px" maxH="620px" src="/images/image_2.png" />
              </Center>
              <Center>
                <HStack spacing="27px">
                  <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
                  <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
                  <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
                  <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
                  <Image maxW="90px" maxH="90px" src="/images/image_1.png" />
                </HStack>
              </Center>
            </GridItem>
            <GridItem colSpan={3}>
              <Box>
                <Text fontWeight="bold">Ten san pham</Text>
                <Button onClick={onOpen}>Contact</Button>
                <Text fontWeight="bold">Color:</Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        {isOpen && <ContactModal isOpen={isOpen} onClose={onClose} />}
      </Container>
    </>
  );
};

export default ProductDetails;

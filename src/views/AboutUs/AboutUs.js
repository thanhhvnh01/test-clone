import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Container,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import useMobile from "@hooks/useMobile";
import React from "react";
import { FormattedMessage } from "react-intl";

const AboutUs = () => {
  const [isMobile] = useMobile();
  return (
    <>
      <Box>
        <AspectRatio
          _before={{ p: "0px !important" }}
          mt={isMobile ? "87px" : "113px"}
          w="100%"
          h={["184px", "128px", "128px", "620", "620"]}
        >
          <iframe title="video" src="https://www.youtube.com/embed/okz5RIZRT0U" />
        </AspectRatio>
      </Box>
      <Box>
        <Container
          p={isMobile ? 0 : 2}
          maxW={isMobile ? "100%" : "1150px"}
          height="100%"
          bg="url('/backgrounds/support_background.png')"
          sx={{
            boxShadow: "0px -5px 4px 1px rgba(0, 0, 0, 0.38)",
            paddingBottom: "30px !important",
          }}
        >
          <Box py={3} px={3}>
            <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
              <BreadcrumbItem color="#3182CE">
                <BreadcrumbLink href="/">
                  <FormattedMessage id="label.home" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem color="#3182CE">
                <BreadcrumbLink href="/about-andeahair">
                  <FormattedMessage id="title.aboutUs" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">{}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Box px={[4, 5, 5, "200px", "200px"]}>
            <Text
              fontFamily="Cinzel Decorative"
              fontSize={["32px", "43px", "43px", "90px", "90px"]}
              fontWeight="regular"
              color="#000000"
              textAlign="center"
              textTransform="uppercase"
            >
              Andrea Hair
            </Text>
            <Text
              fontSize={["14px", "14px", "14px", "14px", "14px"]}
              fontWeight="regular"
              color="#000000"
              textAlign="center"
              textTransform="capitalize"
            >
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "There is
              no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            </Text>
            <Center>
              <Image maxWidth={["376px", "500px", "500px", "500px", "500px"]} pt={10} src="/images/about_us_1.png" />
            </Center>
            <VStack pt={14} spacing={14}>
              <Box>
                <Text
                  fontSize={["14px", "14px", "14px", "14px", "14px"]}
                  fontWeight="bold"
                  color="#000000"
                  textAlign="center"
                  textTransform="capitalize"
                >
                  What is Lorem Ipsum?
                </Text>
                <Text
                  fontSize={["14px", "14px", "14px", "14px", "14px"]}
                  fontWeight="regular"
                  color="#000000"
                  textAlign="center"
                  textTransform="capitalize"
                >
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                  Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                  humour and the like).
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize={["14px", "14px", "14px", "14px", "14px"]}
                  fontWeight="bold"
                  color="#000000"
                  textAlign="center"
                  textTransform="capitalize"
                >
                  What is Lorem Ipsum?
                </Text>
                <Text
                  fontSize={["14px", "14px", "14px", "14px", "14px"]}
                  fontWeight="regular"
                  color="#000000"
                  textAlign="center"
                  textTransform="capitalize"
                >
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                  Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                  humour and the like).
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize={["14px", "14px", "14px", "14px", "14px"]}
                  fontWeight="bold"
                  color="#000000"
                  textAlign="center"
                  textTransform="capitalize"
                >
                  What is Lorem Ipsum?
                </Text>
                <Text
                  fontSize={["14px", "14px", "14px", "14px", "14px"]}
                  fontWeight="regular"
                  color="#000000"
                  textAlign="center"
                  textTransform="capitalize"
                >
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                  Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                  humour and the like).
                </Text>
              </Box>
            </VStack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;

import {
  Box,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Flex,
  GridItem,
  Grid,
  Button,
  Input,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { CgMail, CgPhone } from "react-icons/cg";
import { ImLocation2 } from "react-icons/im";
import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useMobile from "@hooks/useMobile";
import SupporterCard from "@components/SupporterCard";
import { getSupportersAPI } from "@api/main";

const Contact = () => {
  const [isMobile] = useMobile();
  const [supporterData, setSupporterData] = useState([]);

  const fetchSupporterData = async () => {
    try {
      const res = await getSupportersAPI(3, 1);
      setSupporterData(res.data.pageData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchSupporterData();
  }, []);
  return (
    <Box bg="#F5F5F5">
      <Box>
        <Image
          mt={isMobile ? "87px" : "113px"}
          w="100%"
          h={["184px", "184px", "184px", "574px", "574px"]}
          src="/images/contact.jfif"
        />
      </Box>
      <Container
        p={[0, 0, 0, 5, 5]}
        // maxW={isMobile ? "100%" : "80%"}
        maxW={["100%", "100%", "100%", "1200px", "1200px"]}
        sx={{ mt: 0, minHeight: "120vh !important", mr: "auto", ml: "auto" }}
      >
        <Box py={3} px={3}>
          <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem color="#3182CE">
              <BreadcrumbLink href="/">
                <FormattedMessage id="label.home" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem color="#3182CE">
              <BreadcrumbLink href="/contact-andeahair">
                <FormattedMessage id="title.contact" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">{}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box>
          <Text
            fontSize={["32px", "40px", "40px", "40px", "40px"]}
            fontWeight="bold"
            color="#000000"
            textAlign="center"
            textTransform="uppercase"
          >
            <FormattedMessage id="label.contactUs" />
          </Text>
          <Text
            fontSize={["12px", "18px", "18px", "18px", "18px"]}
            fontWeight="regular"
            color="#000000"
            textAlign="center"
            textTransform="uppercase"
          >
            <FormattedMessage id="label.any" />
          </Text>
        </Box>
        {!isMobile ? (
          <Flex bg="#FFFFFF" my={5}>
            <Grid templateColumns="repeat(10, 1fr)" gap={6}>
              <GridItem colSpan={4} bg="url('/backgrounds/contact_2.jpg')">
                <Box sx={{ p: 10 }}>
                  <Text
                    fontSize={["16px", "24px", "24px", "24px", "24px"]}
                    fontWeight="bold"
                    color="#FFFFFF"
                    textTransform="uppercase"
                  >
                    <FormattedMessage id="label.ContactInformation" />
                  </Text>
                  <Text fontSize={["6px", "14px", "14px", "14px", "14px"]} fontWeight="regular" color="#FFFFFF">
                    <FormattedMessage id="label.Saysomething" />
                  </Text>
                  <VStack alignItems="flex-start" mt={5} spacing={4}>
                    <HStack mt={10}>
                      <CgPhone style={{ color: "#FFFF", height: "19px", width: "19px" }} />
                      <Text fontSize={["6px", "14px", "14px", "14px", "14px"]} fontWeight="regular" color="#FFFFFF">
                        +1012 3456 789
                      </Text>
                    </HStack>
                    <HStack mt={10}>
                      <CgMail style={{ color: "#FFFF", height: "22px", width: "22px" }} />
                      <Text fontSize={["6px", "14px", "14px", "14px", "14px"]} fontWeight="regular" color="#FFFFFF">
                        demo@gmail.com
                      </Text>
                    </HStack>
                    <HStack>
                      <ImLocation2 style={{ color: "#FFFF", height: "22px", width: "22px" }} />
                      <Text fontSize={["6px", "14px", "14px", "14px", "14px"]} fontWeight="regular" color="#FFFFFF">
                        132 Dartmouth Street Boston, Massachusetts 02156 United States
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              </GridItem>
              <GridItem colSpan={6} sx={{ mt: "auto", mb: "auto", display: "flex" }} maxW="690px">
                <Box w="100%" p={6} py={10}>
                  <Grid templateColumns="repeat(2,1fr)" gap={10}>
                    <GridItem colSpan={1}>
                      <Box>
                        <Text>
                          <FormattedMessage id="label.firstName" />
                        </Text>
                        <Input variant="flushed" />
                      </Box>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Box>
                        <Text>
                          <FormattedMessage id="label.lastName" />
                        </Text>
                        <Input variant="flushed" />
                      </Box>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Box>
                        <Text>
                          <FormattedMessage id="label.Email" />
                        </Text>
                        <Input variant="flushed" />
                      </Box>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Box>
                        <Text>
                          <FormattedMessage id="label.phoneNumber" />
                        </Text>
                        <Input variant="flushed" />
                      </Box>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Box>
                        <Text>
                          <FormattedMessage id="label.Message" />
                        </Text>
                        <Input placeholder="Write your message..." variant="flushed" />
                      </Box>
                    </GridItem>
                  </Grid>
                  <Box sx={{ display: "flex", mt: 10 }}>
                    <Button ml="auto" p={6} bg="#000000" variant="solid" fontWeight="500" textTransform="none">
                      <FormattedMessage id="label.sendMessage" />
                    </Button>
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </Flex>
        ) : (
          <Box>
            <Grid templateColumns="repeat(1, 1fr)" gap={6}>
              <GridItem colSpan={1} sx={{ mt: "auto", mb: "auto", display: "flex" }} maxW="690px">
                <Box w="100%" p={6} py={10}>
                  <Grid templateColumns="repeat(2,1fr)" gap={10}>
                    <GridItem colSpan={1}>
                      <Box>
                        <Text>
                          <FormattedMessage id="label.lastName" />
                        </Text>
                        <Input variant="flushed" />
                      </Box>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Box>
                        <Text>Last Name</Text>
                        <Input variant="flushed" />
                      </Box>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Box>
                        <Text>
                          <FormattedMessage id="label.Email" />
                        </Text>
                        <Input variant="flushed" />
                      </Box>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Box>
                        <Text>
                          <FormattedMessage id="label.phoneNumber" />
                        </Text>
                        <Input variant="flushed" />
                      </Box>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Box>
                        <Text>
                          <FormattedMessage id="label.Message" />
                        </Text>
                        <Input placeholder="Write your message..." variant="flushed" />
                      </Box>
                    </GridItem>
                  </Grid>
                  <Box sx={{ display: "flex", mt: 10, justifyContent: "center" }}>
                    <Button p={6} bg="#000000" variant="solid" fontWeight="500" textTransform="none">
                      <FormattedMessage id="label.sendMessage" />
                    </Button>
                  </Box>
                </Box>
              </GridItem>
              <GridItem colSpan={1} bg="url('/backgrounds/contact_2.jpg')">
                <Box sx={{ p: 10 }}>
                  <Text
                    fontSize={["22px", "24px", "24px", "24px", "24px"]}
                    fontWeight="bold"
                    color="#FFFFFF"
                    textTransform="uppercase"
                  >
                    <FormattedMessage id="label.ContactInformation" />
                  </Text>
                  <Text fontSize={["15px", "14px", "14px", "14px", "14px"]} fontWeight="regular" color="#FFFFFF">
                    <FormattedMessage id="label.Saysomething" />
                  </Text>
                  <VStack alignItems="flex-start" mt={5} spacing={4}>
                    <HStack mt={10}>
                      <CgPhone style={{ color: "#FFFF", height: "19px", width: "19px" }} />
                      <Text fontSize={["15px", "14px", "14px", "14px", "14px"]} fontWeight="regular" color="#FFFFFF">
                        +1012 3456 789
                      </Text>
                    </HStack>
                    <HStack mt={10}>
                      <CgMail style={{ color: "#FFFF", height: "22px", width: "22px" }} />
                      <Text fontSize={["15px", "14px", "14px", "14px", "14px"]} fontWeight="regular" color="#FFFFFF">
                        demo@gmail.com
                      </Text>
                    </HStack>
                    <HStack>
                      <ImLocation2 style={{ color: "#FFFF", height: "22px", width: "22px" }} />
                      <Text fontSize={["15px", "14px", "14px", "14px", "14px"]} fontWeight="regular" color="#FFFFFF">
                        132 Dartmouth Street Boston, Massachusetts 02156 United States
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        )}

        <Box bgImage="url('/backgrounds/support_background.png')">
          <Box pb={5}>
            <Text
              pt={10}
              fontSize={isMobile ? "20px" : "40px"}
              fontWeight="bold"
              textAlign="center"
              textTransform="uppercase"
            >
              <FormattedMessage id="label.supportOnline" />
            </Text>
            <Flex bg="black" w={97} h="3px" m="auto" />
            <Grid templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)"} gap={6}>
              {supporterData?.map((item, index) => {
                return (
                  <GridItem key={index} colSpan={1} p={isMobile ? "10px" : "50px"}>
                    <SupporterCard
                      isMobile={isMobile}
                      image={item.avatarUrl}
                      name={item.supporterName}
                      email={item.email}
                    />
                  </GridItem>
                );
              })}
            </Grid>
            <Button
              variant="link"
              className="navbar-item"
              fontWeight="500"
              sx={{
                textTransform: "none",
                textDecoration: "none",
                display: "flex",
                ml: "auto",
                mr: 10,
                color: "black",
              }}
            >
              <FormattedMessage id="button.more" /> {<ChevronRightIcon mt={0.5} />}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

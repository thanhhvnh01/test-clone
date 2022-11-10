import { getErrorMessage } from "@api/handleApiError";
import { subscribeNewMemberAPI } from "@api/main";
import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Stack,
  Image,
  HStack,
  VStack,
  Flex,
  useToast,
  SlideFade,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
} from "@chakra-ui/react";
import Logo from "@components/header/Logo";
import useMobile from "@hooks/useMobile";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FormattedMessage } from "react-intl";

const InfomationSection = ({ isMobile }) => {
  return (
    <Box color="#AAAAAA" p={4}>
      <Logo />
      <Stack spacing="16px">
        <Text fontSize="xl" fontWeight="bold">
          Andreahairvn.com
        </Text>
        <HStack spacing="12px" className="address">
          <Image h="16px" src="icons/location_icon.svg" />
          <Text fontSize="small">
            <FormattedMessage id="info.address" />
          </Text>
        </HStack>
        <HStack spacing="12px" className="phone">
          <Image h="16px" src="icons/phone_icon.svg" />
          <Text fontSize="small">
            <FormattedMessage id="info.phoneNumber" />
          </Text>
        </HStack>
        <HStack spacing="12px" className="email">
          <Image h="16px" src="icons/mail_icon.svg" />
          <Text fontSize="small">
            <FormattedMessage id="info.email" />
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
};

const PaymentSection = ({ isMobile }) => {
  return (
    <VStack color="#AAAAAA" p={4} display={isMobile ? "block" : "flex"} textTransform="uppercase">
      <Text align={isMobile ? "left" : "center"} fontSize={isMobile ? "16px" : "xl"} fontWeight="bold">
        <FormattedMessage id="info.payment" />
      </Text>
      <Flex>
        <Image sx={{ display: "flex", mr: "auto", ml: "auto" }} src="/images/footer_payment.png" />
      </Flex>
    </VStack>
  );
};

const ShippingSection = ({ isMobile }) => {
  return (
    <VStack color="#AAAAAA" p={4} display={isMobile ? "block" : "flex"} textTransform="uppercase">
      <Text align={isMobile ? "left" : "center"} fontSize={isMobile ? "16px" : "xl"} fontWeight="bold">
        <FormattedMessage id="info.shipping" />
      </Text>
      <Flex>
        <Image sx={{ display: "flex", mr: "auto", ml: "auto" }} src="/images/footer_shipping.png" />
      </Flex>
    </VStack>
  );
};

const SocialNetworkSection = ({ isMobile }) => {
  return (
    <VStack color="#AAAAAA" p={4} display={isMobile ? "block" : "flex"} textTransform="uppercase">
      <Text fontSize={isMobile ? "16px" : "xl"} fontWeight="bold">
        <FormattedMessage id="label.socialNetwork" />
      </Text>
    </VStack>
  );
};

const SignUpSection = ({ isMobile }) => {
  const { ref, inView } = useInView();
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleChangeInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      await subscribeNewMemberAPI({ email });
    } catch (error) {
      toast({
        title: "Api error",
        description: getErrorMessage(error),
        status: "error",
        duration: 3000,
      });
    }
  };

  return (
    <Box bg="rgb(107,110,114,0.8)" id="sign-up-section">
      <SlideFade ref={ref} in={inView} offsetY="100px">
        <Box sx={{ display: "flex", mt: "auto", mb: "auto", justifyContent: "center" }}>
          <Box>
            <Text
              pt={isMobile ? 5 : 5}
              fontSize={["20px", "50px", "50px", "30px", "30px"]}
              fontWeight="bold"
              color="#FFEA85"
              textAlign="center"
              textTransform="uppercase"
            >
              <FormattedMessage id="label.newsLetter" />
            </Text>
            <Text
              fontStyle="italic"
              fontSize={["12px", "18px", "18px", "14px", "14px"]}
              color="#FFEA85"
              textAlign="center"
              fontWeight={300}
            >
              <FormattedMessage id="label.subscribeForInfo" />
            </Text>
            <VStack spacing="20px" sx={{ justifyContent: "center", m: "auto", mt: 4 }} pb={isMobile ? 5 : 10} w="100%">
              <Flex sx={{ display: "flex", mr: "auto", ml: "auto" }}>
                <InputGroup borderColor="#6B6E72">
                  <InputLeftAddon
                    bg="#434343"
                    borderColor="#898B8E"
                    justifyContent="center"
                    children={<EmailIcon boxSize={5} color="#FFEA85" />}
                    h={["30px", "30px", "30px", "32px", "32px"]}
                    w={["50px", "50px", "50px", "60px", "60px"]}
                    size={["sm", "md", "md", "md", "md"]}
                  />
                  <Input
                    borderColor="#898B8E"
                    w={["250px", "350px", "350px", "350px", "350px"]}
                    h={["30px", "30px", "30px", "32px", "32px"]}
                    type="email"
                    value={email}
                    fontSize="12px"
                    onChange={handleChangeInput}
                    variant="outline"
                    bg="#fffff"
                    placeholder="examle@gmail.com"
                  />
                </InputGroup>
                {!isMobile && (
                  <Button
                    size={["sm", "md", "md", "sm", "sm"]}
                    onClick={handleSignUp}
                    className="btn-sub"
                    color="#FFEA85"
                    borderColor="#FFEA85"
                    textTransform="none"
                    borderRadius="7px"
                  >
                    <FormattedMessage id="button.submit" />
                  </Button>
                )}
              </Flex>
              {isMobile && (
                <Button
                  size={["sm", "md", "md", "sm", "sm"]}
                  onClick={handleSignUp}
                  className="btn-sub"
                  color="#FFEA85"
                  borderColor="#FFEA85"
                  textTransform="none"
                  borderRadius="7px"
                >
                  <FormattedMessage id="button.submit" />
                </Button>
              )}
            </VStack>
          </Box>
        </Box>
      </SlideFade>
    </Box>
  );
};

const Footer = () => {
  const [isMobile] = useMobile();
  return (
    <>
      <SignUpSection isMobile={isMobile} />
      <Box bg="black" sx={{ mt: "auto", width: "100%", p: 5, px: isMobile ? "10px" : "11%" }}>
        <Grid templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)"} gap={6}>
          <GridItem>
            <InfomationSection isMobile={isMobile} />
          </GridItem>
          <GridItem>
            <PaymentSection isMobile={isMobile} />
            <ShippingSection isMobile={isMobile} />
          </GridItem>
          <GridItem>
            <SocialNetworkSection isMobile={isMobile} />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;

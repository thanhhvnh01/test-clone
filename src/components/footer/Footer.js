import { Box, Text, Grid, GridItem, Stack, Image, HStack, VStack } from "@chakra-ui/react";
import Logo from "@components/header/Logo";
import useMobile from "@hooks/useMobile";
import React from "react";
import { FormattedMessage } from "react-intl";

const InfomationSection = ({ isMobile }) => {
  return (
    <Box color="#AAAAAA" p={!isMobile && 4}>
      <Logo />
      <Stack spacing="16px">
        <Text fontSize="xl" fontWeight="bold">
          Andreahair.com
        </Text>
        <HStack spacing="12px" className="address">
          <Image src="icons/location_icon.svg" />
          <Text fontSize="small">
            <FormattedMessage id="info.address" />
          </Text>
        </HStack>
        <HStack spacing="12px" className="phone">
          <Image src="icons/phone_icon.svg" />
          <Text fontSize="small">
            <FormattedMessage id="info.phoneNumber" />
          </Text>
        </HStack>
        <HStack spacing="12px" className="email">
          <Image src="icons/mail_icon.svg" />
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
    <VStack color="#AAAAAA" p={!isMobile && 4} display={isMobile ? "block" : "flex"}>
      <Text align={isMobile ? "left" : "center"} fontSize={isMobile ? "16px" : "xl"} fontWeight="bold">
        <FormattedMessage id="info.payment" />
      </Text>
      <Image sx={{ display: "flex", mr: "auto", ml: "auto" }} src="/images/footer_payment.png" />
    </VStack>
  );
};

const ShippingSection = ({ isMobile }) => {
  return (
    <VStack color="#AAAAAA" p={!isMobile && 4} display={isMobile ? "block" : "flex"}>
      <Text align={isMobile ? "left" : "center"} fontSize={isMobile ? "16px" : "xl"} fontWeight="bold">
        <FormattedMessage id="info.shipping" />
      </Text>
      <Image sx={{ display: "flex", mr: "auto", ml: "auto" }} src="/images/footer_shipping.png" />
    </VStack>
  );
};

const SocialNetworkSection = ({ isMobile }) => {
  return (
    <VStack color="#AAAAAA" p={!isMobile && 4} display={isMobile ? "block" : "flex"}>
      <Text fontSize={isMobile ? "16px" : "xl"} fontWeight="bold">
        <FormattedMessage id="label.socialNetwork" />
      </Text>
    </VStack>
  );
};

const Footer = () => {
  const [isMobile] = useMobile();
  return (
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
  );
};

export default Footer;

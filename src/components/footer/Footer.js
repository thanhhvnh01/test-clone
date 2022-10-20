import { Box, Text, Grid, GridItem, Stack, Image, HStack } from "@chakra-ui/react";
import Logo from "@components/header/Logo";
import React from "react";
import { FormattedMessage } from "react-intl";

const InfomationSection = () => {
  return (
    <Box color="#AAAAAA" p={4}>
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

const PaymentSection = () => {
  return (
    <Box color="#AAAAAA">
      <Text fontSize="xl" fontWeight="bold">
        <FormattedMessage id="info.payment" />
      </Text>
    </Box>
  );
};

const ShippingSection = () => {
  return (
    <Box color="#AAAAAA">
      <Text fontSize="xl" fontWeight="bold">
        <FormattedMessage id="info.shipping" />
      </Text>
    </Box>
  );
};

const SocialNetworkSection = () => {
  return (
    <Box color="#AAAAAA">
      <Text fontSize="xl" fontWeight="bold">
        <FormattedMessage id="info.payment" />
      </Text>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box bg="black" sx={{ mt: "auto", width: "100%", p: 5 }}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem>
          <InfomationSection />
        </GridItem>
        <GridItem>
          <PaymentSection />
        </GridItem>
        <GridItem>
          <ShippingSection />
        </GridItem>
        <GridItem>
          <SocialNetworkSection />
        </GridItem>
      </Grid>
      {/* <Flex sx={{ p: 3, justifyContent: "space-between" }}>
        <Flex>
          <Stack
            spacing={8}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
          >
            <Image boxSize="50px" src="/icons/facebook_icon.svg" />
            <Image boxSize="50px" src="/icons/instagram_gif.gif" />
            <Image boxSize="50px" src="/icons/twitter_icon.svg" />
          </Stack>
        </Flex>
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
        >
          <NavbarItem to="/">About us</NavbarItem>
          <NavbarItem to="/how">Product</NavbarItem>
          <NavbarItem to="/how">Subscribe</NavbarItem>
        </Stack>
      </Flex> */}
    </Box>
  );
};

export default Footer;

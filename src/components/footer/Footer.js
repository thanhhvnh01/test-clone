import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { FormattedMessage } from "react-intl";

// const NavbarItem = ({ children, isLast, to = "/", ...rest }) => {
//   return (
//     <Link href={to}>
//       <Text fontSize={["xs", "sm", "xl", "xl"]} as="b" textTransform="uppercase" display="block" {...rest}>
//         {children}
//       </Text>
//     </Link>
//   );
// };
const Footer = () => {
  return (
    <Box bg="#181818" sx={{ mt: "auto", width: "100%", p: 5 }}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem bg="blue.500">Infomation section</GridItem>
        <GridItem bg="blue.500">Payment Method section</GridItem>
        <GridItem bg="blue.500">Shipping Method section</GridItem>
        <GridItem bg="blue.500">
          <Text>
            <FormattedMessage id="label.socialNetwork" />
          </Text>
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

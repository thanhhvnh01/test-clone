import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg="primary.700" sx={{ mt: 10, width: "100%", position: "relative", bottom: 0 }}>
      <footer>
        <Flex>
          <Flex>
            <Image boxSize="50px" src="/icons/facebook_icon.svg" />
            <Image boxSize="50px" src="/icons/instagram_gif.gif" />
            <Image boxSize="50px" src="/icons/twitter_icon.svg" />
          </Flex>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;

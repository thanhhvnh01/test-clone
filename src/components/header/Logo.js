import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image boxSize={["50px", "60px", "70px", "86px"]} src="/logo/AndreaHair_logo.svg" />
    </Box>
  );
}

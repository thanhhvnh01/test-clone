import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { ResponsiveLogoConfig } from "src/theme/ResponsiveTheme";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image boxSize={ResponsiveLogoConfig} src="/logo/AndreaHair_logo.svg" />
    </Box>
  );
}

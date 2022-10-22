import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";
import { ResponsiveLogoConfig } from "src/theme/ResponsiveTheme";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link href="/home">
        <Image boxSize={ResponsiveLogoConfig} src="/logo/AndreaHair_logo.svg" />{" "}
      </Link>
    </Box>
  );
}

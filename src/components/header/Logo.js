import React from "react";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { ResponsiveLogoConfig } from "src/theme/ResponsiveTheme";

export default function Logo({ props, type }) {
  return (
    <Box {...props}>
      <Link href="/">
        <Flex>
          <Image sx={{ transform: "scale(1.2)" }} boxSize={ResponsiveLogoConfig} src={type ? "/logo/AndreaHair_logo_2.svg": "/logo/AndreaHair_logo.svg"} />
        </Flex>
      </Link>
    </Box>
  );
}

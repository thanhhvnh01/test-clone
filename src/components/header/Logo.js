import React from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { ResponsiveLogoConfig } from "src/theme/ResponsiveTheme";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link href="/home">
        <Flex>
          <Image boxSize={ResponsiveLogoConfig} src="/logo/AndreaHair_logo.svg" />
          <Text
            sx={{ my: "auto", color: "#FFEA85" }}
            fontSize="18px"
            fontWeight="500"
            cursor="default"
            textTransform="uppercase"
          >
            AndreaHair
          </Text>
        </Flex>
      </Link>
    </Box>
  );
}

import React from "react";
import { Box } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export const ToggleButton = ({ toggle, isOpen, isMobile }) => {
  return (
    <Box display={isMobile ? "block" : "none"} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

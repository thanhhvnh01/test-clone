import { Box, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <Box>
      <Skeleton
        h={["162px", "162px", "162px", "278px", "278px"]}
        maxW={["175px", "182px", "182px", "270px", "270px"]}
      />
      <SkeletonText mt={3} noOfLines={2} spacing="2" />
      <HStack mt={2}>
        <Skeleton h="47px" w="48px" />
        <Skeleton h="47px" w="48px" />
        <Skeleton h="47px" w="48px" />
      </HStack>
    </Box>
  );
};

export default Contact;

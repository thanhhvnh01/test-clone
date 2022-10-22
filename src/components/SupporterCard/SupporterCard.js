import { Avatar, Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SupporterCard = ({ isMobile }) => {
  return (
    <Box bg="#FFFF" py={3} sx={{ border: "1px solid #AAAAAA" }}>
      <Avatar
        w="71px"
        h="71px"
        sx={{ display: "flex", m: "auto", my: 3 }}
        src="https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG"
      />
      <VStack display="flex" spacing="0px">
        <Text align="center" fontSize={isMobile ? "12px" : "22px"} fontWeight="bold">
          Mrs.Mỹ Anh
        </Text>
        <Text fontSize={isMobile ? "11px" : "16px"}>Chuyên gia làm tóc</Text>
        <Text fontSize={isMobile ? "11px" : "16px"}>+84356737790</Text>
      </VStack>
    </Box>
  );
};

export default SupporterCard;

import { Avatar, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SupporterCard = ({ isMobile, image, name, email, phoneNumber, fb, ig, whatsapp }) => {
  // const handleClick = () => {};
  return (
    <Box bg="#FFFF" py={3} sx={{ border: "1px solid #AAAAAA" }}>
      <Avatar w="71px" h="71px" sx={{ display: "flex", m: "auto", my: 3 }} src={image} />
      <VStack display="flex" spacing="1px">
        <Text align="center" fontSize={isMobile ? "12px" : "22px"} fontWeight="bold">
          {name}
        </Text>
        <Text fontSize={isMobile ? "11px" : "16px"}>{email}</Text>
        <Text fontSize={isMobile ? "11px" : "16px"}>{phoneNumber}</Text>
        <HStack>
          <Image h="20px" src="/icons/facebook_gif.gif" />
          <Image h="20px" src="/icons/instagram_gif.gif" />
          <Image h="20px" src="/icons/whatsapp_gif.gif" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default SupporterCard;

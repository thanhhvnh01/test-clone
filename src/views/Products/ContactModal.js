import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent p={10} sx={{ borderRadius: "20px !important" }}>
        <ModalBody>
          <Grid templateColumns="repeat(2,1fr)" gap={10}>
            <GridItem colSpan={1}>
              <Box>
                <Text>First Name</Text>
                <Input variant="flushed" />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box>
                <Text>Last Name</Text>
                <Input variant="flushed" />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box>
                <Text>Email</Text>
                <Input variant="flushed" />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box>
                <Text>Phone Number</Text>
                <Input variant="flushed" />
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box>
                <Text>Message</Text>
                <Input placeholder="Write your message..." variant="flushed" />
              </Box>
            </GridItem>
          </Grid>
        </ModalBody>
        <ModalFooter pt={10}>
          <Button p={6} bg="#000000" variant="solid" fontWeight="500" textTransform="none">
            Send Message
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;

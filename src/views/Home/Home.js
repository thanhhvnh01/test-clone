import React from "react";
import { FormattedMessage } from "react-intl";
import { Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <FormattedMessage id="title.main" />
      <Button colorScheme="blue">Home</Button>
    </div>
  );
};

export default Home;

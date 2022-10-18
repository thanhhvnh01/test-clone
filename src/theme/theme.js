import { extendTheme } from "@chakra-ui/react";
import { CustomButton as Button } from "./CustomStyle/CustomStyle";

export const theme = extendTheme({
  components: {
    Button,
  },
});

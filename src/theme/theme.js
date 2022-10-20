import { extendTheme } from "@chakra-ui/react";
import { CustomButton as Button } from "./CustomStyle/CustomStyle";

export const theme = extendTheme({
  components: {
    Button,
  },
  breakpoints: {
    sm: "414px",
    md: "880px",
    lg: "960px",
    xl: "1600px",
    "2xl": "1650px",
  },
});

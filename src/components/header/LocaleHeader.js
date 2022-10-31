import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, HStack, Select, Text } from "@chakra-ui/react";
import { IntlContext } from "@utility/contexts/Internationalization";
import React, { useContext, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { FormattedMessage } from "react-intl";

const LocaleHeader = ({ isMobile, ...props }) => {
  const intlContext = useContext(IntlContext);

  const [lang, setLang] = useState(intlContext.locale);
  return (
    <Box w="100%" bg="black" {...props}>
      <HStack
        color="#ffff"
        spacing="24px"
        justifyContent={isMobile ? "space-between" : "right"}
        sx={{ ml: "auto", alignContent: "center", justifyContent: isMobile ? "space-between" : "flex-end" }}
      >
        <Text fontSize={["10px", "12px", "12px", "12px", "12px"]}>+84 973360301</Text>
        <Text fontSize={["10px", "12px", "12px", "12px", "12px"]}>example@gmail.com</Text>

        <ReactCountryFlag
          style={{
            width: "1em",
            height: "1em",
          }}
          countryCode={lang === "en" ? "us" : "ru"}
          svg
        />
        <LocalPopover lang={lang} setLang={setLang} intlContext={intlContext} />
      </HStack>
    </Box>
  );
};

const LocalPopover = ({ lang, setLang, intlContext }) => {
  const handleLangUpdate = (e) => {
    e.preventDefault();
    intlContext.switchLanguage(e.target.value);
    setLang(e.target.value);
  };

  return (
    <Select
      color="white"
      icon={<TriangleDownIcon />}
      iconSize="9px"
      variant="unstyled"
      fontSize={["10px", "12px", "12px", "12px", "12px"]}
      bg="black"
      w="90px"
      borderColor="black"
      value={lang}
      onChange={(e) => {
        handleLangUpdate(e);
      }}
      size="xs"
      pb={1}
    >
      <option value="en">
        <FormattedMessage id="title.en" />
      </option>
      <option value="ru">
        <FormattedMessage id="title.ru" />
      </option>
    </Select>
  );
};

export default LocaleHeader;

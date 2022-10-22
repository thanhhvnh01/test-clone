import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, HStack, Select, Text } from "@chakra-ui/react";
import { IntlContext } from "@utility/contexts/Internationalization";
import React, { useContext, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { FormattedMessage } from "react-intl";

const LocaleHeader = ({ ...props }) => {
  const intlContext = useContext(IntlContext);

  const [lang, setLang] = useState(intlContext.locale);
  return (
    <Box w="100%" bg="black" {...props}>
      <HStack color="#ffff" spacing="24px" justifyContent="right" sx={{ ml: "auto" }}>
        <Text fontSize="12px">+84 973360301</Text>
        <Text fontSize="12px">example@gmail.com</Text>
        <ReactCountryFlag
          style={{
            width: "1em",
            height: "1em",
          }}
          countryCode={lang === "vi" ? "vn" : "us"}
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
      <option value="vi">
        <FormattedMessage id="title.vi" />
      </option>

      <option value="en">
        <FormattedMessage id="title.en" />
      </option>
    </Select>
  );
};

export default LocaleHeader;

// form
import { Radio, RadioGroup, VStack } from "@chakra-ui/react";
import { useFormContext, Controller } from "react-hook-form";
// @mui
// import { Radio, RadioGroup, FormHelperText, FormControlLabel } from "@mui/material";
// import FormError from "./FormError";

// ----------------------------------------------------------------------

export default function RHFRadioGroup({
  name,
  options,
  resetProductTypes,
  getOptionLabel,
  isBoolean,
  isClearable,
  sx,
  setCategoryName,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <RadioGroup
              colorScheme="yellow"
              sx={{ m: "0px !important", touchAction: "none", ...sx }}
              onChange={(e) => {
                field.onChange(e);
                resetProductTypes();
                console.log(e);
              }}
              value={Number(field.value)}
              {...other}
            >
              <VStack p={0} alignItems="flex-start" px={4} spacing={2} py={2}>
                {options.map((option, index) => (
                  <Radio key={index} value={option.id} sx={{ touchAction: "none" }}>
                    {option.label}
                  </Radio>
                ))}
              </VStack>
            </RadioGroup>
          </>
        );
      }}
    />
  );
}

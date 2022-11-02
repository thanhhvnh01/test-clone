// form
import { Radio, RadioGroup, VStack } from "@chakra-ui/react";
import { useFormContext, Controller } from "react-hook-form";
// @mui
// import { Radio, RadioGroup, FormHelperText, FormControlLabel } from "@mui/material";
// import FormError from "./FormError";

// ----------------------------------------------------------------------

export default function RHFRadioGroup({ name, options, getOptionLabel, isBoolean, isClearable, sx, ...other }) {
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
              sx={{ m: "0px !important", ...sx }}
              onChange={(e) => {
                field.onChange(e);
              }}
              value={Number(field.value)}
              {...other}
            >
              <VStack p={0} alignItems="flex-start" px={4} spacing={4} py={3}>
                {options.map((option, index) => (
                  <Radio key={index} value={option.id}>
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

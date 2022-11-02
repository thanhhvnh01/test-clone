// form
import { Checkbox } from "@chakra-ui/react";
import { useFormContext, Controller } from "react-hook-form";

// ----------------------------------------------------------------------

export default function RHFCheckbox({ name, label, onChange, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      render={({ field }) => {
        return (
          <Checkbox {...field} onChange={(e) => field.onChange(e.target.checked)} isChecked={field.value} value={name}>
            {label}
          </Checkbox>
        );
      }}
      control={control}
      {...other}
    />
  );
}

// ----------------------------------------------------------------------

// export function RHFMultiCheckbox({ name, options, sx, getOptionLabel, ...other }) {
//   const { control } = useFormContext();

//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field }) => {
//         const onSelected = (option) =>
//           field.value.includes(option) ? field.value.filter((value) => value !== option) : [...field.value, option];

//         return (
//           <FormGroup sx={{ m: "0px !important", ...sx }}>
//             {options.map((option, index) => (
//               <FormControlLabel
//                 key={index}
//                 control={
//                   <Checkbox
//                     checked={field.value.includes(option.value)}
//                     onChange={() => field.onChange(onSelected(option.value))}
//                   />
//                 }
//                 label={!!getOptionLabel ? getOptionLabel(option.label) : option.label}
//                 {...other}
//               />
//             ))}
//           </FormGroup>
//         );
//       }}
//     />
//   );
// }

import { TextField } from "@mui/material";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
interface IInputController {
  control: Control<any>;
  name: string;
}
export const InputController: FC<IInputController> = ({ control, name }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <TextField label={name} variant='outlined' onChange={onChange} />
      )}
    />
  );
};

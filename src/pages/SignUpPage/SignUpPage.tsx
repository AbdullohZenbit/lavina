import { Stack, Typography } from "@mui/material";
import { InputController } from "../../components/InputController";
import { useForm } from "react-hook-form";
import { SinUpContainer } from "./styled";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";

export const SignUpPage = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <SinUpContainer>
      <Typography variant='h1'>Sign Up </Typography>
      <Stack
        mt={2}
        spacing={2}
        component='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputController control={control} name='name' />
        <InputController control={control} name='email' />
        <ButtonComponent type='submit' label='Submit' variant='contained' />
      </Stack>
    </SinUpContainer>
  );
};
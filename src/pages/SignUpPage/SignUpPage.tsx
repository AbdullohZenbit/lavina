import { Stack, Typography } from "@mui/material";
import { InputController } from "../../components/InputController";
import { useForm } from "react-hook-form";
import { SinUpContainer } from "./styled";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { useLoginMutationMutation } from "../../service/LoginService";
import { useNavigate } from "react-router-dom";
import { ROUTE_HOME } from "../../routes/route.constants";

export const SignUpPage = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [login] = useLoginMutationMutation();
  const onSubmit = async (form: any) => {
    const data = await login(form);
    //@ts-ignore

    console.log(data.data);

    //@ts-ignore
    if (data?.data?.isOk) {
      //@ts-ignore
      localStorage.setItem("key", data?.data?.data?.key);
      navigate(ROUTE_HOME);
    }
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

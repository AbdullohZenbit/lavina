import { Button, Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTE_HOME } from "../../routes/route.constants";
import { InputController } from "../../components/InputController";
import { useForm } from "react-hook-form";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { useCreateBookMutation } from "../../service/BookService";

export const BooksPage = () => {
  const { control, handleSubmit } = useForm();
  const [createBook] = useCreateBookMutation();

  const handleCreate = async (data: any) => {
    const res = await createBook(data);
    console.log(res);
  };

  return (
    <Box>
      <Button>
        <Link to={ROUTE_HOME}>Home</Link>
      </Button>
      <Stack
        alignItems='center'
        spacing={2}
        component='form'
        onSubmit={handleSubmit(handleCreate)}
      >
        <Typography>Create Book</Typography>
        <InputController name='title' control={control} />
        <InputController name='author' control={control} />
        <InputController name='2012' control={control} />
        <ButtonComponent type='submit' variant='contained' label='Add' />
      </Stack>
    </Box>
  );
};

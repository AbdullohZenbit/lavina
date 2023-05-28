import React from "react";
import {
  withStyles,
  FilledInput,
  FormHelperText,
  Input,
  InputLabel,
  OutlinedInput,
  FormControl,
  Container,
  Button,
} from "@mui/material";
const styles = (theme: any) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});
const FormPage = () => {
  return (
    <Container style={{ paddingTop: "2em" }}>
      <div>
        <Button href="/">Home</Button>
      </div>
      <div>
        <h5>Form Inputs</h5>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <form action="">
          <FormControl className="formControl" variant="outlined">
            <InputLabel htmlFor="component-outlined">Title</InputLabel>
            <OutlinedInput id="component-outlined" />
          </FormControl>
          <FormControl className="formControl" variant="outlined">
            <InputLabel htmlFor="component-outlined">Cover</InputLabel>
            <OutlinedInput id="component-outlined" />
          </FormControl>
          <FormControl className="formControl" variant="outlined">
            <InputLabel htmlFor="component-outlined">Author</InputLabel>
            <OutlinedInput id="component-outlined" />
          </FormControl>
          <FormControl className="formControl" variant="outlined">
            <InputLabel htmlFor="component-outlined">Pages</InputLabel>
            <OutlinedInput id="component-outlined" />
          </FormControl>
          <FormControl className="formControl" variant="outlined">
            <InputLabel htmlFor="component-outlined">Published</InputLabel>
            <OutlinedInput id="component-outlined" />
          </FormControl>
          <div>
            <Button
              style={{ marginTop: "15px" }}
              variant="outlined"
              size="medium"
              className="update"
              type="submit"
            >
              {/* {selectedRecipe ? 'Edit Book' : 'Create'} */}
              Button
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default FormPage;

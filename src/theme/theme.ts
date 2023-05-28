import { createTheme } from "@mui/material";
import { defaultPalette } from "./palette";
import { typography } from "./typogrophy";

export const theme = createTheme({
  palette: defaultPalette,
  typography,
});

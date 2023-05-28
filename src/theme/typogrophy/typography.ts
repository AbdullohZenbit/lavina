import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography: TypographyOptions = {
  fontFamily: ["Inter", "Roboto", '"Helvetica"', "Arial", "sans-serif"].join(
    ","
  ),
  fontSize: 16,
  h1: {
    fontSize: 34,
    fontWeight: 600,
  },
  h2: {
    fontSize: 20,
    fontWeight: 700,
  },
  h3: {
    fontSize: 18,
    fontWeight: 700,
  },
  h4: {
    fontSize: 16,
    fontWeight: 400,
  },
  h5: {
    fontSize: 14,
    fontWeight: 700,
  },
  body1: {
    fontSize: 16,
    fontWeight: 400,
  },
  body2: {
    fontSize: 16,
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: 18,
    fontWeight: 700,
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: 700,
  },
  button: {
    fontSize: 14,
    fontWeight: 500,
  },
};

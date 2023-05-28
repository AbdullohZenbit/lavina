import { Button, ButtonProps } from "@mui/material";
import React, { FC } from "react";
interface IButton extends ButtonProps {
  label: string;
}
export const ButtonComponent: FC<IButton> = ({
  type,
  onClick,
  label,
  variant,
}) => {
  return (
    <Button variant={variant} type={type} onClick={onClick}>
      {label}
    </Button>
  );
};

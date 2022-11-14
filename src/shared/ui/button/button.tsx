import { Button as ButtonMantine, ButtonProps } from "@mantine/core";
import React from "react";

type Props = ButtonProps & { onClick?: () => void };

export const Button = ({ children, onClick, ...props }: Props) => {
  return (
    <ButtonMantine p={10} uppercase size="sm" {...props} onClick={onClick}>
      {children}
    </ButtonMantine>
  );
};

import React from "react";
import { Container } from "./style";

export const Button = ({
  onClick,
  children,
  type,
  width,
  height,
  disabled,
}) => {
  return (
    <Container
      disabled={disabled}
      width={width}
      height={height}
      onClick={onClick}
      type={type}
    >
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;

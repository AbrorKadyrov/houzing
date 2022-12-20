import React from "react";
import { Container } from "./style";

export const Button = ({ onClick, children, type, width, height }) => {
  return (
    <Container width={width} height={height} onClick={onClick} type={type}>
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;

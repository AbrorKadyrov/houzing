import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = forwardRef(
  (
    {
      onChange,
      type,
      placeholder,
      name,
      value,
      defaultValue,
      width,
      height,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          width={width}
          height={height}
          icon={icon}
        />
      </Wrapper>
    );
  }
);

export default Input;

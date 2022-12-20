import React from "react";
import { Button, Input } from "../Generic";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <h1>Input</h1>
      <Input width="200px" placeholder={"test"} />
      <Button>test</Button>
    </Container>
  );
};

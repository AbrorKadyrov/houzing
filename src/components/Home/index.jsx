import React from "react";
import GenCarousel from "../Carousel";
import { Container } from "./style";
import Category from "../Category";

export const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <Category />
    </Container>
  );
};

export default Home;

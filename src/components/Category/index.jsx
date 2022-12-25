import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";

import CategoryCard from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 4,
  speed: 500,
  arrows: true,
  dots: true,
  appendDots: (dots) => <h1>{dots} </h1>,
};

export const Category = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  console.log(data);
  return (
    <Container>
      <Content>
        <h1 className="title">Category</h1>
        <div className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>

      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              onClick={() => navigate(`/properties?category_id=${value.id}`)}
              data={value}
              key={value.id}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Category;

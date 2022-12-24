import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import HouseCard from "../HouseCard";
import { Container } from "./style";
// import useRequest from "../../hooks/useRequest";

const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { search } = useLocation();
  const request = useRequest();

  useEffect(() => {
    // fetch(`${url}/houses/list${search}`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setData(res?.data || []);
    //   });

    request({ url: `/houses/list${search}` }).then((res) =>
      setData(res?.data || [])
    );
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <Container>
      {data.map((value) => {
        return (
          <HouseCard
            onClick={() => onSelect(value.id)}
            key={value.id}
            data={value}
          />
        );
      })}
    </Container>
  );
};

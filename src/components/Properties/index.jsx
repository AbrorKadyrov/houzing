import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import HouseCard from "../HouseCard";
import { Container } from "./style";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <div className="title">Properties</div>
      <div className="info" style={{ textAlign: "center" }}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
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
    </React.Fragment>
  );
};

import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { PropertiesContext } from "../../context/properties";
// import useRequest from "../../hooks/useRequest";
import HouseCard from "../HouseCard";
import { Container } from "./style";

const { REACT_APP_BASE_URL } = process.env;

export const Favourite = () => {
  // const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { search } = useLocation();
  // const request = useRequest();
  const [, dispatch] = useContext(PropertiesContext);

  const { refetch, data } = useQuery(
    [search],
    async () => {
      const res = await fetch(
        `${REACT_APP_BASE_URL}/houses/getAll/favouriteList`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return await res.json();
    },
    {
      onSuccess: (res) => {
        dispatch({ type: "refetch", payload: refetch });
        // setData(res?.data || []);
      },
    }
  );

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <div className="title">Favourites</div>
      <div className="info" style={{ textAlign: "center" }}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Container>
        {data?.data?.length ? (
          data?.data.map((value) => {
            return (
              <HouseCard
                onClick={() => onSelect(value.id)}
                key={value.id}
                data={value}
              />
            );
          })
        ) : (
          <h1>No Data Found</h1>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Favourite;

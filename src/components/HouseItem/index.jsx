import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import useRequest from "../../hooks/useRequest";
import { Container } from "./style";

// const { REACT_APP_BASE_URL: url } = process.env;
export const HouseItem = () => {
  // const [data, setData] = useState({});
  const params = useParams();
  // const request = useRequest();

  console.log(params, "param");

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
  }, [params?.id]);

  // useEffect(() => {
  //   request({ url: `/houses/list/${params?.id}` }, setData(res?.data || []));
  // }, [params?.id]);

  return (
    <Container>
      <h1>House item</h1>
    </Container>
  );
};

export default HouseItem;

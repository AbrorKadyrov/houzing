import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { Button } from "../Generic";
// import HouseCard from "../HouseCard";
import { AntTable, Container, Icons, User, Wrapper } from "./style";
import noimg from "../../assets/img/noimg.png";

export const MyProfile = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { search } = useLocation();
  const request = useRequest();

  useEffect(() => {
    request({ url: `/houses/me` }).then((res) => setData(res?.data || []));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const columns = [
    {
      title: "Listing Title",

      key: "name",
      render: (data) => (
        <User>
          <User.Img
            src={(data?.attachments && data?.attachments[0]?.imgPath) || noimg}
          />
          <User flex>
            <div className="subTitle">
              {data.country},{data.address}
            </div>
            <div className="info">
              {data.city} {data.region}
            </div>

            <del>
              {" "}
              <div className="info">${data.salePrice}</div>
            </del>
          </User>

          <div style={{ marginLeft: "auto" }}>
            <Button>For sale</Button>
          </div>
        </User>
      ),
    },
    {
      title: "Year Build",
      render: (data) => <span>{data.houseDetails.yearBuilt}</span>,
      key: "houseDetails.yearBuild",
      width: 150,
    },

    {
      title: "Email",
      render: (data) => <span>{data.user.email}</span>,
      key: "email",
      // ellipsis: true,
    },
    {
      title: "Price",
      render: (data) => <span>${data.price}</span>,
      key: "price",
      width: 150,
    },
    {
      title: "Action",
      key: "email",
      width: 100,
      render: (data) => {
        return (
          <User>
            {" "}
            <Icons.Edit />
            <Icons.Delete />
          </User>
        );
      },
      // ellipsis: true,
    },
  ];
  return (
    <Wrapper>
      <User>
        <div style={{ textAlign: "start" }} className="title">
          My Properties
        </div>

        <div style={{ textAlign: "start" }} className="title">
          <Button onClick={() => navigate("/myprofile/newhouse")}>
            {" "}
            Add House
          </Button>
        </div>
      </User>

      <Container>
        <AntTable dataSource={data} columns={columns} />
      </Container>
    </Wrapper>
  );
};

export default MyProfile;

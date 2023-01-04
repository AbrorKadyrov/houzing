import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { Button } from "../Generic";
// import HouseCard from "../HouseCard";
import { AntTable, Container, Icons, User, Wrapper } from "./style";
import noimg from "../../assets/img/noimg.png";
import { useQuery } from "react-query";
import { message } from "antd";

export const MyProfile = () => {
  // const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { search } = useLocation();
  const request = useRequest();

  const { data, refetch } = useQuery([search], () => {
    return request({ url: `/houses/me`, token: true });
  });

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
            <Icons.Edit
              onClick={(event) => {
                event.stopPropagation();
                navigate(`/myprofile/edithouse/${data?.id}`);
              }}
            />
            <Icons.Delete
              onClick={(event) => {
                event.stopPropagation();
                onDelete(data?.id);
              }}
            />
          </User>
        );
      },
      // ellipsis: true,
    },
  ];

  const onDelete = (id) => {
    return request({
      url: `/houses/${id}`,
      token: true,
      method: "DELETE",
    }).then((res) => {
      if (res?.success) {
        message.info("Successfully deleted");
        refetch();
      }
    });
  };

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
        <AntTable
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                navigate(`/properties/${record.id}`);
              }, // click row
            };
          }}
          dataSource={data?.data}
          columns={columns}
        />
      </Container>
    </Wrapper>
  );
};

export default MyProfile;

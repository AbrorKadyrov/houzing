import { Container, Content, Details, Img, Icons, Devider } from "./style";
import noimg from "../../assets/img/noimg.png";
import { message } from "antd";
import { useContext } from "react";
import { PropertiesContext } from "../../context/properties";

export const HouseCard = ({ data = {}, gap, onClick }) => {
  const [state] = useContext(PropertiesContext);
  const {
    attachments,
    salePrice,
    price,
    address,
    city,
    country,
    description,
    houseDetails,
    category,
    favorite,
    id,
  } = data;

  const save = (event) => {
    event?.stopPropagation();
    fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (favorite) res?.success && message.warning("Succesfully disliked");
        else res?.success && message.info("Succesfully liked");

        state.refetch && state.refetch();
      });
  };
  return (
    <Container gap={gap} onClick={onClick}>
      <Img src={(attachments && attachments[0]?.imgPath) || noimg} />
      <Content>
        <div className="subTitle inline">
          {city},{country},{description}
        </div>
        <div className="info">
          {address || "Quincy St, Brooklyn, NY, USA"} -{" "}
          {category?.name || "Category"}- {houseDetails?.room || 0} -rooms
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{houseDetails?.beds || 0} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{houseDetails?.bath || 0} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info">{houseDetails?.garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{houseDetails?.area || 0}kv</div>
          </Details.Item>
        </Details>
      </Content>
      <Devider />
      <Content footer>
        <Details.Item footer>
          <div className="info">${salePrice}/mo</div>
          <div className="subTitle">${price}/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <Icons.Love onClick={save} favorite={"true"} />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;

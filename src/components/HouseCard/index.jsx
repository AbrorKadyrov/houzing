import { Container, Content, Details, Img, Icons, Devider } from "./style";
import noimg from "../../assets/img/noimg.png";

export const HouseCard = ({ url, title, bed, bath, garage, ruler, info }) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{info || "New Apartment Nice Wiew"}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{bed || 0} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{bath || 0} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info">{garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{ruler || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Devider />
      <Content footer>
        <Details.Item footer>
          <div className="info">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;

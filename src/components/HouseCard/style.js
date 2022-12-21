import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/beds.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

const Container = styled.div`
  width: 380px;
  height: 429px;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));

  margin: 100px;

  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) => footer && "space-between"};
  padding-top: 24px;
  padding: 16px 20px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;

Details.Item = styled.div`
  display: flex;
  /* flex-direction: column;  */
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ footer }) => !footer && "center"};
`;

const Icons = styled.div``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Love = styled(love)`
  width: 30px;
  height: 30px;
  padding: 6px;
  background: #f6f8f9;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.8);
  }
`;

const Devider = styled.div`
  background: #e6e9ec;
  height: 1px;
  width: 100%;
`;

export { Container, Img, Content, Details, Icons, Devider };

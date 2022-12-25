import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as bed } from "../../assets/icons/beds.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  ~ .user {
    background: #ffffff;
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    margin-left: 20px;
    padding: 24px;
  }
  gap: 24px;
`;

const Wrapper = styled.div`
  display: flex;

  margin: auto;
  padding: var(--padding);
  max-width: var(--width);
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (!flex ? "column" : "row")};
  align-items: ${({ flex }) => (flex ? "center" : "flex-start")};
  justify-content: ${({ flex }) => !flex && "center"};
`;

Content.Title = styled.div`
  margin-top: ${({ large }) => (large ? "24px" : "48px")};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  line-height: 32px;

  /* margin-top: ${({ mt }) => `${mt}px`}; */
  margin-bottom: ${({ mb }) => `${mb}px`};

  letter-spacing: -0.02em;
  color: #0d263b;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  /* margin-top: 32px; */
  /* padding-top: 16px; */
`;

Details.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 24px 0 8px;
`;

const Icons = styled.div``;

Icons.Share = styled(share)`
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 10px;
  background: #f6f8f9;
  margin: 0px 10px 0px 26px;
  cursor: pointer;
  :active {
    transform: scale(0.8);
  }
`;
Icons.Love = styled(love)`
  width: 35px;
  height: 35px;
  padding: 8px;
  border-radius: 60px;
  background: #f6f8f9;
  margin: 0px 10px 0px 26px;
  cursor: pointer;
  :active {
    transform: scale(0.8);
  }
`;

Icons.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;

const Description = styled.div`
  /* margin-top: 16px; */

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);

  /* margin-bottom: 48px; */
`;

const User = styled.div``;

User.Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 10px;
`;

export {
  Container,
  Wrapper,
  Content,
  Section,
  Icons,
  Details,
  Description,
  User,
};

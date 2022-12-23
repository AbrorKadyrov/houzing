import styled from "styled-components";
import { ReactComponent as mail } from "../../assets/icons/mail.svg";
import { ReactComponent as map } from "../../assets/icons/map.svg";
import { ReactComponent as tel } from "../../assets/icons/tel.svg";

const Container = styled.div`
  height: 417px;
  background: #0d263b;

  display: flex;

  justify-content: space-around;

  /* align-items: center; */
  margin: auto;
  position: relative;
  width: 100%;
  margin-top: 96px;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;

Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

const Icon = styled.div``;

Icon.Email = styled(mail)`
  margin-right: 21px;
`;
Icon.Map = styled(map)`
  margin-right: 21px;
  width: 54px;
  height: 54px;
`;
Icon.Tel = styled(tel)`
  margin-right: 21px;
`;

export { Container, Content, Icon };

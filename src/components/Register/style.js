import styled from "styled-components";
import { Tabs } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  background: #ffff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 30px;

  background: #ffffff;

  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
`;

const AntTabs = styled(Tabs)`
  width: 100%;
  max-width: 580px;
  margin: 64px;
`;

export { Container, Content, AntTabs };

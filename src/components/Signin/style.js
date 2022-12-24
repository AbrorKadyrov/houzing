import styled from "styled-components";

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
  /* align-items: center; */
  width: 100%;
  max-width: 580px;
  gap: 30px;

  background: #ffffff;

  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
  margin-top: 64px;
`;

export { Container, Content };

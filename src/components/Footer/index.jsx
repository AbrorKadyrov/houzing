import { Container, Content, Icon } from "./style";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Map /> Bunyodkor street,Chilanzar 64-apartment, 2-floor,
          Webbrain Academy{" "}
        </Content.Item>
        <Content.Item>
          {" "}
          <Icon.Tel />
          998 33 576 2020
        </Content.Item>
        <Content.Item>
          {" "}
          <Icon.Email />
          support@houzing.com
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Discover</Content.Title>
        <Content.Item>Chicago</Content.Item>
        <Content.Item>Los Angeles</Content.Item>
        <Content.Item>Miami</Content.Item>
        <Content.Item>New York</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>Apartments</Content.Item>
        <Content.Item>Condos</Content.Item>
        <Content.Item>Houses</Content.Item>
        <Content.Item>Offices</Content.Item>
        <Content.Item>Retail</Content.Item>
        <Content.Item>Villas</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>About Us</Content.Item>
        <Content.Item>Terms & Conditions</Content.Item>
        <Content.Item>Support Center</Content.Item>
        <Content.Item>Contact Us</Content.Item>
      </Content>
    </Container>
  );
};

export default Footer;

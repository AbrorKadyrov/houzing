import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { Button, Input } from "../Generic";
import { Container, Content } from "./style";
import { message } from "antd";

const { REACT_APP_BASE_URL } = process.env;

export const Signin = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const info = () => {
    message.info("Successfully logged in");
  };

  const warning = () => {
    message.warning("Email or password not true");
  };

  const onSubmit = async () => {
    // fetch(`${REACT_APP_BASE_URL}/public/auth/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res, "err"));

    request({ url: `/public/auth/login`, method: "POST", body, me: true }).then(
      (res) => {
        if (res?.authenticationToken) {
          navigate("/home");
          localStorage.setItem("token", res?.authenticationToken);
        }
        info();
      }
    );
  };

  return (
    <Container>
      <Content>
        <div className="subTitle">Sign in</div>
        <Input onChange={onChange} placeholder="email" type="email" />
        <Input onChange={onChange} placeholder="password" type="password" />
        <Button onClick={onSubmit} width="%">
          Log in
        </Button>
      </Content>
    </Container>
  );
};

export default Signin;

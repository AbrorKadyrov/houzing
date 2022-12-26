import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { Button, Input } from "../Generic";
import { Content } from "./style";
import { message } from "antd";

export const Signup = () => {
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

  const onSubmit = async () => {
    request({
      url: `/api/public/auth/register`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      info();
      navigate("/signin");
    });
  };

  return (
    <Content>
      <div className="subTitle">Sign up</div>
      <Input onChange={onChange} placeholder="email" type="email" />
      <Input onChange={onChange} placeholder="firstname" type="text" />
      <Input onChange={onChange} placeholder="lastname" type="text" />
      <Input onChange={onChange} placeholder="password" type="password" />
      <Button onClick={onSubmit} width="%">
        Log in
      </Button>
    </Content>
  );
};

export default Signup;

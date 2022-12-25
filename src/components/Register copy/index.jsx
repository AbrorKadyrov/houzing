import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { Button, Input } from "../Generic";
import { AntTabs, Container, Content } from "./style";
import { message } from "antd";

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
      <AntTabs
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: `Sign in`,
            key: "1",
            children: (
              <Content>
                <div className="subTitle">Sign in</div>
                <Input onChange={onChange} placeholder="email" type="email" />
                <Input
                  onChange={onChange}
                  placeholder="password"
                  type="password"
                />
                <Button onClick={onSubmit} width="%">
                  Log in
                </Button>
              </Content>
            ),
          },
          {
            label: `Sign up`,
            key: "2",
            children: (
              <Content>
                <div className="subTitle">Sign in</div>
                <Input onChange={onChange} placeholder="email" type="email" />
                <Input
                  onChange={onChange}
                  placeholder="password"
                  type="password"
                />
                <Button onClick={onSubmit} width="%">
                  Log in
                </Button>
              </Content>
            ),
          },
        ]}
      />
    </Container>
  );
};

export default Signin;

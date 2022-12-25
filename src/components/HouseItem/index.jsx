import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import useRequest from "../../hooks/useRequest";
import nouser from "../../assets/img/nouser.png";
import {
  Container,
  Content,
  Section,
  Icons,
  Details,
  Description,
  Wrapper,
  User,
} from "./style";

import { Input, Button } from "../Generic";
import { Checkbox } from "antd";
// import Google from "../Generic/Google";
import Recent from "../Recent";

export const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();
  // const request = useRequest();

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data));
    window.scrollTo(0, 0);
  }, [params?.id]);

  return (
    <React.Fragment>
      <Wrapper>
        <Container flex={3}>
          <Section>
            <Content>
              <Content.Title large> {data?.name}</Content.Title>
              <div className="info">
                {data?.city}, {data?.address}, {data?.country}
              </div>
            </Content>
            <Content flex>
              <Icons.Share /> <Icons.Title>Share</Icons.Title>
              <Icons.Love /> <Icons.Title>Save</Icons.Title>
            </Content>
          </Section>

          <Section>
            <Details>
              <Icons.Bed />
              <Details.Title>
                {data?.houseDetails?.beds || 0} Beds
              </Details.Title>

              <Icons.Bath />
              <Details.Title>
                {data?.houseDetails?.bath || 0} Baths
              </Details.Title>

              <Icons.Car />
              <Details.Title>
                {data?.houseDetails?.garage || 0} Garage
              </Details.Title>

              <Icons.Ruler />
              <Details.Title>{data?.houseDetails?.area || 0}kv</Details.Title>
            </Details>
            <Content>
              <Content flex>
                <del>
                  <Details.Title>${data?.salePrice || 0}/mo</Details.Title>
                </del>
                <h4 className="title">${data?.price}/mo</h4>
              </Content>
              <div style={{ textAlign: "end" }} className="info">
                ${data?.user?.firstname}
              </div>
            </Content>
          </Section>

          <Content.Title>Description</Content.Title>
          <Description>{data?.description}</Description>

          <Content.Title>Features</Content.Title>
          <Section>
            <Container>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  {data?.houseDetails?.beds || 0} Air Conditioning
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Title>
                  {data?.houseDetails?.bath || 0} Barbeque
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Car />
                <Details.Title>
                  {data?.houseDetails?.garage || 0} Dryer
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  {data?.houseDetails?.area || 0} Gym
                </Details.Title>
              </Content>
            </Container>

            <Container>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  {data?.houseDetails?.beds || 0} Lawn
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Title>
                  {data?.houseDetails?.bath || 0}Laundry
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Car />
                <Details.Title>
                  {data?.houseDetails?.garage || 0} Microwave
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  {data?.houseDetails?.area || 0} Outdoor Shower
                </Details.Title>
              </Content>
            </Container>

            <Container>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  {data?.houseDetails?.beds || 0} Refrigerator
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Title>
                  {data?.houseDetails?.bath || 0} Sauna
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Car />
                <Details.Title>
                  {data?.houseDetails?.garage || 0} Swimming Pool
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  {data?.houseDetails?.area || 0} TV Cable
                </Details.Title>
              </Content>
            </Container>

            <Container>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  {data?.houseDetails?.beds || 0} Washer
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Title>
                  {data?.houseDetails?.bath || 0} WiFi
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Car />
                <Details.Title>
                  {data?.houseDetails?.garage || 0} Window Coverings
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  {data?.houseDetails?.area || 0} Dining room
                </Details.Title>
              </Content>
            </Container>
          </Section>
        </Container>

        <Container className="user" flex={1}>
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={nouser} alt="user image" />
            <Content>
              <div className="subTitle">Vito</div>
              <div className="info">01039003905</div>
            </Content>
          </Section>
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width={"%"}>Send request</Button>
        </Container>
      </Wrapper>

      <Content.Title mt={48} mb>
        Location
        {/* <Google /> */}
      </Content.Title>

      <Recent />
    </React.Fragment>
  );
};

export default HouseItem;

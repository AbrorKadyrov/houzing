import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { Button, Input } from "../Generic";
import { IconDelete, MenuWrapper, Section, SelectAnt, Wrapper } from "./style";

import { useFormik } from "formik";
import { Checkbox } from "antd";
import TextArea from "antd/es/input/TextArea";

export const AddHouse = () => {
  const [data, setData] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [img, setImg] = useState("");
  const { search } = useLocation();
  const request = useRequest();

  useEffect(() => {
    request({ url: `/houses/me` }).then((res) => setData(res?.data || []));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const formik = useFormik({
    initialValues: {
      houseDetails: {},
      homeAmenitiesDto: {},
    },
    onSubmit: (values) => {
      console.log(values, imgs);
    },
  });

  const addImg = () => {
    if (!(imgs.length >= 4) && img) {
      setImgs([
        ...imgs,
        { title: img, id: `${img.length * Math.random()}${img}` },
      ]);
      setImg("");
    }
  };
  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input
              onChange={formik.handleChange}
              name="country"
              value={formik.values.country}
              placeholder={"Country"}
            />
            <Input
              onChange={formik.handleChange}
              name="region"
              value={formik.values.region}
              placeholder={"Region"}
            />
            <Input
              onChange={formik.handleChange}
              name="city"
              value={formik.values.city}
              placeholder={"City"}
            />
            <Input
              onChange={formik.handleChange}
              name="address"
              value={formik.values.address}
              placeholder={"Address"}
            />
          </Section>
          <h1 className="subTitle">Apartment info</h1>
          <Section>
            <Input
              name="area"
              value={formik.values.area}
              onChange={formik.handleChange}
              placeholder={"Area"}
            />
            <Input
              name="bath"
              value={formik.values.bath}
              onChange={formik.handleChange}
              placeholder={"Bath"}
            />
            <Input
              name="beds"
              value={formik.values.beds}
              onChange={formik.handleChange}
              placeholder={"Beds"}
            />
            <Input
              name="garage"
              value={formik.values.garage}
              onChange={formik.handleChange}
              placeholder={"Garage"}
            />
            <Input
              name="yearBuilt"
              value={formik.values.yearBuilt}
              onChange={formik.handleChange}
              placeholder={"YearBuilt"}
            />
            <Input
              name="room"
              value={formik.values.room}
              onChange={formik.handleChange}
              placeholder={"Room"}
            />

            <SelectAnt
              defaultValue={"Select Category"}
              value={formik.values.garage}
              onChange={formik.handleChange}
            >
              <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>

              {data.map((value) => {
                return (
                  <SelectAnt.Option key={value.id} value={value?.id}>
                    {value?.name}
                  </SelectAnt.Option>
                );
              })}
            </SelectAnt>
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section>
            <Input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder={"Name"}
            />
            <Input
              name="zipCode"
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              placeholder={"Zip Code"}
            />
            <Input
              onChange={formik.handleChange}
              name="price"
              value={formik.values.price}
              placeholder={"Price"}
            />
            <Input
              onChange={formik.handleChange}
              name="sale_price"
              value={formik.values.sale_price}
              placeholder={"Sale Price"}
            />
          </Section>

          <Section>
            <Input
              onChange={({ target: { value } }) => setImg(value)}
              value={img}
              placeholder="Add Image URL"
            />{" "}
            <Button onClick={addImg} disabled={imgs.length >= 4}>
              Add Image{" "}
            </Button>
          </Section>
          <Section flex>
            {imgs.map((value) => {
              return (
                <pre key={value.id}>
                  {value.title}{" "}
                  <IconDelete
                    onClick={() => {
                      let res = imgs.filter((vl) => vl !== value);
                      setImgs(res);
                    }}
                  />
                </pre>
              );
            })}
          </Section>

          <Section>
            <TextArea rows={6} placeholder="description" name="description" />
          </Section>
          <h1 className="subTitle">Additional</h1>

          <Section gap>
            <Section flex>
              <Checkbox>Bus Stop</Checkbox>
              <Checkbox>Garden</Checkbox>
              <Checkbox>Market</Checkbox>
              <Checkbox>Park</Checkbox>
              <Checkbox>Parking</Checkbox>
            </Section>
            <Section flex>
              <Checkbox>School</Checkbox>
              <Checkbox>Stadium</Checkbox>
              <Checkbox>Subway</Checkbox>
              <Checkbox>Super Market</Checkbox>
              <Checkbox>TV</Checkbox>
            </Section>

            <Section flex>
              <Checkbox>Air Condition</Checkbox>
              <Checkbox>Courtyard</Checkbox>
              <Checkbox>Furniture</Checkbox>
              <Checkbox>Gas Stove</Checkbox>
              <Checkbox>internet</Checkbox>
            </Section>
          </Section>

          <Button>Save</Button>
        </MenuWrapper>
      </form>
    </Wrapper>
  );
};

export default AddHouse;

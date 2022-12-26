import React from "react";
import { YMaps, Map } from "react-yandex-maps";

const mapstyle = {
  position: "relative",
  left: 0,
  top: 0,
  height: "50vh",
  width: "100wh",
  overflow: "hidden",
};

export const Yandex = ({ center }) => {
  return (
    <YMaps
      // enterprise
      query={{
        apikey: "y0_AgAAAABnYU_KAAjyxwAAAADX3VfVfHekDfeDS-Kgd8l9XrWZxDHFRw8",
        lang: "EN",
      }}
    >
      <Map
        style={mapstyle}
        state={{ center: center || [41.311081, 69.240562], zoom: 10 }}
      ></Map>
    </YMaps>
  );
};

export default Yandex;

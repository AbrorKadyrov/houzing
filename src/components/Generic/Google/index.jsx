import React from "react";
import GoogleMapReact from "google-map-react";

const mapstyle = {
  position: "relative",
  left: 0,
  top: 0,
  height: "50vh",
  width: "100wh",
  overflow: "hidden",
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Google = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "afbb60c1-0761-48a5-b821-b566bf2208b",
        lang: "EN",
      }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    >
      <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    </GoogleMapReact>
  );
};

export default Google;

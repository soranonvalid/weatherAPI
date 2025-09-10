import React from "react";
import InfoTemplate from "./InfoTemplate";

const InfoBar = ({ wind = 0, cloud = 0, humidity = 0 }) => {
  return (
    <>
      <ul className="flex justify-around text-center">
        <InfoTemplate
          icon="airwave"
          value={wind}
          measurement="m/s"
          label="Wind"
        />
        <InfoTemplate
          icon="cloud"
          value={cloud}
          measurement="%"
          label="Clouds"
        />
        <InfoTemplate
          icon="water_voc"
          value={humidity}
          measurement="%"
          label="Humidity"
        />
      </ul>
    </>
  );
};

export default InfoBar;

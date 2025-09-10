import React from "react";

const TempNWeather = ({ temp = 0, desc, weather }) => {
  const weathers = {
    Thunderstorm: "thunderstorm",
    Drizzle: "rainy_light",
    Rain: "rainy",
    Snow: "ac_unit",
    Atmosphere: "atmosphere",
    Clear: "sunny",
    Clouds: "filter_drama",
  };
  return (
    <>
      <span
        style={{
          fontSize: "100px",
          fontVariationSettings: "'FILL' 0, 'wght' 800, 'GRAD' 0, 'opsz' 48",
        }}
        className="material-symbols-outlined"
      >
        {weathers[`${weather}`]}
      </span>
      <div className="flex flex-col gap-3 ">
        <h2 className="font-semibold grotesk text-4xl text-cente">
          {temp}&#8451;
        </h2>
        <h1 className="grotesk text-3xl">{weather}</h1>
        <h1 className="grotesk text-[1rem] italic opacity-75">{desc}</h1>
      </div>
    </>
  );
};

export default TempNWeather;

import React from "react";
import TempNWeather from "./WeatherWidgetComponent/TempNWeather";
import InfoBar from "./WeatherWidgetComponent/InfoBar";

const WeatherWidget = ({
  city = "Tangerang",
  weather = "clear",
  desc = "Clear Sky",
  temp,
  wind = 0,
  humidity = 0,
  clouds = 0,
}) => {
  return (
    <div className="flex flex-col gap-10 w-full max-w-[500px] text-center">
      <h1 className="font-bold grotesk text-4xl text-center">{city}</h1>
      <TempNWeather weather={weather} desc={desc} temp={temp} />
      <InfoBar wind={wind} humidity={humidity} cloud={clouds} />
    </div>
  );
};

export default WeatherWidget;

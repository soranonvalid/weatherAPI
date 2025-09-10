import { useState, useEffect } from "react";
import axios from "axios";
import WeatherWidget from "./components/WeatherWidget";
import SearchComponent from "./components/SearchComponent";

const App = () => {
  const APIKey = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState(null);
  const [info, setInfo] = useState({
    city: "",
    country: "",
    temp: 0,
    weather: "Clear",
    desc: "clear sky",
    wind: 0,
    humidity: 0,
    clouds: 0,
  });
  const [city, setCity] = useState("Jakarta");
  const [LastCity, setLastCity] = useState("");
  const [search, setSearch] = useState("");
  const [Notif, setNotif] = useState("");
  const [Attempt, setAttempt] = useState(0);

  const [loading, setLoading] = useState(false);

  const fetchWeather = async (c = city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${APIKey}&units=metric`
      );

      setData(res.data);
      console.log("fetched data:", res.data);
    } catch (error) {
      if (Attempt >= 3) {
        setTimeout(() => {
          console.error("Error fetching weather data:", error);
          console.warn("attempting reuse last city...");
          setCity(LastCity);
          fetchWeather(LastCity);
          setAttempt(Attempt + 1);
        }, 1000);
      } else {
        setAttempt(0);
        console.error("REQUEST OVER");
      }
    }
  };

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setInfo({
          city: data.name,
          country: data.sys.country,
          temp: Math.round(data.main.temp),
          weather: data.weather[0].main,
          desc: data.weather[0].description,
          wind: data.wind.speed,
          humidity: data.main.humidity,
          clouds: data.clouds.all,
        });
      }, 500);
    } else {
      console.warn("Data not found", data);
    }
  }, [data]);

  useEffect(() => {
    if (info.temp !== 0) {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    }
  }, [info]);

  useEffect(() => {
    fetchWeather();
    setLastCity(city);
    console.log("Saved last city", LastCity);
  }, [city]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    const trimmed = search.trim();
    if (trimmed === "") return;
    if (trimmed === city.toLowerCase()) {
      createNotif("This is your current search.");
      return setSearch("");
    }
    setLoading(false);
    setCity(trimmed);
    setTimeout(() => {
      setSearch("");
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const createNotif = (msg) => {
    setNotif(msg);

    setTimeout(() => {
      setNotif("");
    }, 3000);
  };

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-[#1E213A] text-white">
      <div
        className={`w-full flex flex-col items-center px-5 ${
          !loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      >
        <WeatherWidget
          city={`${info.city}, ${info.country}`}
          temp={info.temp}
          weather={info.weather}
          desc={info.desc}
          wind={info.wind}
          humidity={info.humidity}
          clouds={info.clouds}
        />
        <SearchComponent
          city={info.city}
          search={search}
          onSearchChange={handleSearchChange}
          handleKeyDown={handleKeyDown}
          handleSearch={handleSearchSubmit}
        />
        <div
          className={`mt-7 italic transition-opacity text-[10px] duration-500${
            Notif.length === 0 ? "opacity-0" : "opacity-75"
          }`}
        >
          {Notif}
        </div>
      </div>
    </main>
  );
};

export default App;

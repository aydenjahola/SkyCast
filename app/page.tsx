"use client";

import { useState } from "react";
import Input from "./components/Input";
import Current from "./components/Current";
import WeekForecast from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";

const Home = () => {
  const apiKey = process.env.WEATHER_API_KEY!;
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=yes&alerts=yes`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();
        setData(data);
        setCity("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({});
      }
    }
  };

  const renderWelcomeContent = () => (
    <div className="text-center h-screen mt-[5rem]">
      <h2 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
        Welcome to SkyCast
      </h2>

      <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-red-600 to-purple-700">
        Enter a city to get started
      </p>
    </div>
  );

  const renderErrorContent = () => (
    <div className="text-white text-center h-screen mt-[5rem]">
      <p className="text-3xl font-bold mb-4">City not Found</p>
      <p className="text-xl">Enter a Valid City</p>
    </div>
  );

  const renderWeatherContent = () => (
    <>
      <div className="flex md:flex-row flex-col p-12 items-center justify-between">
        <Current data={data} />
        <WeekForecast data={data} />
      </div>
      <div>
        <WeatherDetails data={data} />
      </div>
    </>
  );

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = renderWelcomeContent();
  } else if (error !== "") {
    content = renderErrorContent();
  } else {
    content = renderWeatherContent();
  }

  const backgroundImageUrl =
    data.location && data.location.localtime_epoch
      ? `https://source.unsplash.com/1600x900/?${data.location.name}`
      : "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1274&q=80";

  return (
    <div
      className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="bg-white/25 w-full flex flex-col h-screen">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setCity={setCity} />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">
            SkyCast.
          </h1>
        </div>
        {content}
        <footer className="bg-transparent py-4 text-center text-white">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SkyCast. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;

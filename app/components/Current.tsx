import { useState } from "react";
import { getCurrentDate } from "../utils/currentDate";
import { FaLocationDot } from "react-icons/fa6";
import { WiThermometer } from "react-icons/wi";

interface CurrentProps {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location: {
      name: string;
      country: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const currentDate = getCurrentDate();
  const weatherIcon = data.current.condition.icon;

  const toggleTemperature = () => {
    setIsCelsius((prevIsCelsius) => !prevIsCelsius);
  };

  const getTemperature = () => {
    const temperature = isCelsius
      ? data.current.temp_c.toFixed()
      : ((data.current.temp_c * 9) / 5 + 32).toFixed();

    return temperature;
  };

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <img
              className="w-[50px] object-cover"
              src={weatherIcon}
              alt={data.current.condition.text}
            />
          </div>
        )}
      </div>
      <div>
        <p className="text-5xl text-white">
          {getTemperature()}
          <span>°</span>
        </p>
        <span className="text-white">{data.current.condition.text}</span>
        <button
          className="text-yellow-500 underline mt-2 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500"
          onClick={toggleTemperature}
        >
          <WiThermometer size={18} />
          <span className="ml-2">
            {isCelsius ? "Toggle to Fahrenheit" : "Toggle to Celsius"}
          </span>
        </button>
      </div>
      <div>
        <div className="flex items-center text-gray-800 bg-white/90 px-2 py-2 rounded-xl">
          <FaLocationDot className="text-red-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500" />
          <span className="px-1 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            {data.location.name}, {data.location.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Current;

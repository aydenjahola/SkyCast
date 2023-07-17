import { BsSunrise, BsSunset } from "react-icons/bs";
import { GiWindSlap, GiCompass } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { MdAir } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

interface WeatherDetailsProps {
  data: {
    current: {
      wind_kph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
    };
    forecast: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  const renderWeatherDetail = (
    title: string,
    value: string | number,
    IconComponent: React.ElementType
  ) => (
    <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
      <div className="text-2xl">
        <h3>{title}</h3>
        <h3>{value}</h3>
      </div>
      <div>
        <IconComponent fontSize={40} />
      </div>
    </div>
  );

  return (
    <div className="p-12">
      <h1 className="mb-4 text-2xl text-white">Weather Details</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {renderWeatherDetail(
          "Wind Speed",
          `${data.current.wind_kph} km/h`,
          GiWindSlap
        )}
        {renderWeatherDetail(
          "Humidity",
          `${data.current.humidity}%`,
          WiHumidity
        )}
        {renderWeatherDetail(
          "Wind Direction",
          data.current.wind_dir,
          GiCompass
        )}
        {renderWeatherDetail(
          "Sunrise",
          data.forecast.forecastday[0].astro.sunrise,
          BsSunrise
        )}
        {renderWeatherDetail(
          "Sunset",
          data.forecast.forecastday[0].astro.sunset,
          BsSunset
        )}
        {renderWeatherDetail(
          "Air Pressure",
          `${data.current.pressure_mb} hPa`,
          MdAir
        )}
        {renderWeatherDetail(
          "Feels Like",
          `${data.current.feelslike_c}°`,
          CiTempHigh
        )}
        {renderWeatherDetail(
          "Visibility",
          `${data.current.vis_km} km/h`,
          FaEye
        )}
      </div>
    </div>
  );
};

export default WeatherDetails;

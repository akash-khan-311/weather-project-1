import { useContext } from "react";
import CloudIcon from "../../../assets/cloud.svg";
import HazeIcon from "../../../assets/haze.svg";
import SnowIcon from "../../../assets/icons/snow.svg";
import SunnyIcon from "../../../assets/icons/sunny.svg";
import RainIcon from "../../../assets/rainy.svg";
import ThunderIcon from "../../../assets/thunder.svg";
import PinIcon from "../../../assets/pin.svg";
import { WeatherContext } from "../../../context";
import { getFormattedDate } from "../../../utils/dateUtils";
const WeatherHeadline = () => {
  const { weatherData, loading } = useContext(WeatherContext);
  const { climate, location, time, temperature } = weatherData;

  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Clouds":
        return CloudIcon;
      case "Haze":
        return HazeIcon;
      case "Fog":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
      case "Snow":
        return SnowIcon;
      case "Clear":
        return SunnyIcon;
      case "Rain":
        return RainIcon;
      case "Thunder":
        return ThunderIcon;
      default:
        return SunnyIcon;
    }
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinIcon} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
};
export default WeatherHeadline;

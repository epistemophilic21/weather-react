import { useContext } from "react";
import { counterContext } from "./Context";
import ApiCall from "./hooks/ApiCall";
import { icon } from "../components/hooks/Functions";
import { convertToCelsius } from "../components/hooks/Functions";
import ErrorMessage from "./ErrorMessage";
export default function ShowWeather() {
  // * API KEY
  const KEY = import.meta.env.VITE_API_KEY;

  const { location, setDisplay, setLocation } = useContext(counterContext);
  const result = ApiCall(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${KEY}`
  );

  function backClick() {
    setDisplay(false);
    setLocation(null);
  }

  return (
    <>
      {result && result.cod === 200 ? (
        <div className="w-full h-screen flex flex-col justify-center items-center absolute inset-0">
          <div className="shadow-2xl w-[350px] h-[450px] bg-white/10 backdrop-filter z-10 backdrop-blur-2xl bg-opacity-30 flex rounded-xl flex-col font-poppins text-[#feffff]">
            <div className="w-full h-auto flex-1 flex flex-col justify-center items-center gap-5">
              <div className="text-[80px]">{icon(result.weather[0].main)}</div>
              <div className="text-6xl font-medium text-white">
                {convertToCelsius(result.main.temp).toFixed(1)}°C
              </div>
              <div className="text-3xl tracking-normal font-medium">
                {result.name}
              </div>
            </div>
            <div className="w-full h-32 flex">
              <div className="w-[50%] h-full flex flex-col justify-center items-center">
                <div className="text-2xl font-medium">
                  {result.main.humidity}
                </div>
                <div className="text-lg tracking-wide">Humidity</div>
              </div>
              <div className="w-[50%] h-full flex flex-col justify-center items-center">
                <div className="text-2xl font-medium">{result.wind.speed}</div>
                <div className="text-lg tracking-wide">Wind Speed</div>
              </div>
            </div>
          </div>
          <button
            className="-mb-10 mt-6 w-40 h-14 bg-gradient-to-r from-blue-600 to-violet-600 font-poppins text-lg text-white rounded-lg tracking-widest z-10"
            onClick={backClick}
          >
            Back
          </button>
        </div>
      ) : (
        <ErrorMessage backClick={backClick} />
      )}
    </>
  );
}

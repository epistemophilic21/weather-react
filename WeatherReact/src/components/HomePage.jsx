import { useState } from "react";
import ShowWeather from "./ShowWeather";
import { counterContext } from "./Context";

export default function HomePage() {
  const [location, setLocation] = useState();
  const [display, setDisplay] = useState(false);

  function onClickFunction() {
    const trimLocation = location.trim();
    if (trimLocation !== undefined) {
      setDisplay(true);
    }
  }
  return (
    <>
      <nav className="h-auto absolute z-30 w-full gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 p-4 flex sm:justify-start items-center justify-center font-poppins text-lg text-white font-medium">
        Meteorology
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10"
          >
            <path d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" />
          </svg>
        </span>
      </nav>

      <div className="relative w-full h-screen flex">
        <img
          src="/src/images/cloud.jpg"
          alt=""
          className="w-screen h-screen object-cover object-top "
        />
      </div>

      {!display && (
        <div className="inset-0 gap-9 z-20 absolute w-full h-auto flex flex-col justify-center items-center  font-poppins ">
          <span className="text-5xl text-white font-semibold tracking-normal">
            Live with Nature.
          </span>
          <span className="flex w-[440px] h-20 justify-center items-center gap-3">
            <input
              type="text"
              placeholder="Search Your Location"
              className="p-4 rounded-lg outline-none text-base  tracking-wide"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              style={{
                backgroundColor: "white",
                width: "300px",
                borderRadius: "50px",
              }}
            />
            <button
              className="bg-gradient-to-r from-blue-600 to-violet-600 p-4 rounded-full text-white"
              onClick={onClickFunction}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </span>
        </div>
      )}
      {display && (
        <counterContext.Provider value={{ location, setDisplay, setLocation }}>
          <ShowWeather />
        </counterContext.Provider>
      )}
      <div className="inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600 w-full h-screen absolute opacity-45"></div>
    </>
  );
}

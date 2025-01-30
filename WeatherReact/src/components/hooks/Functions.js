export function icon(weather) {
  const iconMap = {
    Clouds: "☁️",
    Clear: "☀️",
    Mist: "🌧️",
    Rain: "⛈️",
    Haze: "🌨️",
  };
  return iconMap[weather] || "";
}

export function convertToCelsius(kelvin) {
  return kelvin - 273.15;
}

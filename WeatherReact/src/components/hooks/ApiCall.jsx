import { useState, useEffect } from "react";

export default function ApiCall(apiUrl) {
  const [result, setResult] = useState({
    name: "",
    main: { humidity: "", temp: "" },
    wind: { speed: "" },
    weather: [{ main: "" }],
  });
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setResult(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return result;
}

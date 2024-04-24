import React from "react";
import Icon from "./Icon";
import "./weatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day"> Thu </div>
          <Icon code="01d" size={40} />
          <div className="weatherForecast-temperatures">
            <span className="weatherForecast-temperature-mix">19 </span>
            <span className="weatherForecast-temperature-min">10 </span>
          </div>
        </div>
      </div>
    </div>
  );
}

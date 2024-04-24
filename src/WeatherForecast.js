import React from "react";
import Icon from "./Icon";
import "./weatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day"> Thu </div>
          <Icon code="01d" size={52} />
          <div className="weatherForecast-temperatures">
            <span className="weatherForecast-temperatures-mix">19 </span>
            <span className="weatherForecast-temperatures-mix">10 </span>
          </div>
        </div>
      </div>
    </div>
  );
}

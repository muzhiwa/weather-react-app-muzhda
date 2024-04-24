import React from "react";
import CurrentDate from "./CurrentDate";
import Icon from "./Icon";
import Temperature from "./Temperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          {" "}
          <CurrentDate date={new Date()} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-4 mb-2">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <Icon code={props.data.icon} size={56} />
            </div>

            <div>
              <Temperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity:{" "}
              <span className="primary-color">{props.data.humidity}% </span>
            </li>
            <li>
              Wind:{" "}
              <span className="primary-color"> {props.data.wind} km/h </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Temperature(props) {
  return (
    <span className="text-decoration-none">
      <span className="temperature-degree">{Math.round(props.celsius)}</span>
      <span className="temperature-value">°C</span>
    </span>
  );
}

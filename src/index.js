import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import Description from "./Description";

import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div className="container">
        <Description defaultCity="Hamburg" />
      </div>
    </div>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import Description from "./Description";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div className="container">
        <Description defaultCity="Hamburg" />
        <footer>
          <p className="mt-3">
            This project was coded by
            <a href="https://github.com/muzhiwa/" target="_blank">
              {" "}
              Muzhda Wafa
            </a>{" "}
            and is
            <a
              href="https://github.com/muzhiwa/weather-react-app-muzhda"
              target="_blank"
            >
              {" "}
              open-sourced on GitHub
            </a>{" "}
            and
            <a
              href="https://weather-react-app-muzhda.netlify.app/"
              target="_blank"
            >
              {" "}
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  </StrictMode>,
);

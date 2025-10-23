import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // optional: add base styles or Tailwind if you use it

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

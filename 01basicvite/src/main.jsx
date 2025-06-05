import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "./index.css";
import App from "./App.jsx";
import React from "react";

function Myapp() {
  return <div>Helloo !!</div>;
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click Me to Visit Google"
);
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <Myapp />
  // </StrictMode>
  <App />
);

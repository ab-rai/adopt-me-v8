import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "dog",
  //     breed: "Habenese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Rocky",
  //     animal: "dog",
  //     breed: "German Scheperd",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Ceasor",
  //     animal: "Cat",
  //     breed: "Japanese",
  //   }),
  // ]);
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Habenese" />
      <Pet name="Rocky" animal="Horse" breed="Japanese" />
      <Pet name="Ceasor" animal="Cat" breed="German" />
    </div>
  );
};
const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);

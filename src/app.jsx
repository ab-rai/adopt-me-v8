import React from "react";
import { createRoot } from "react-dom/client";

const Pet = (props) => {
  const { name, animal, breed } = props;
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Habenese",
    }),
    React.createElement(Pet, {
      name: "Rocky",
      animal: "dog",
      breed: "German Scheperd",
    }),
    React.createElement(Pet, {
      name: "Ceasor",
      animal: "Cat",
      breed: "Japanese",
    }),
  ]);
};
const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
const root = createRoot(container);
root.render(React.createElement(App));

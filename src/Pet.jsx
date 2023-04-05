// import React from "react";
const Pet = (props) => {
  const { name, animal, breed } = props;
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, animal),
  //     React.createElement("h2", {}, breed),
  //   ]);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
};
export default Pet;

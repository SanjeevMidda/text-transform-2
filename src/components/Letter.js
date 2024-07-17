import React, { useState } from "react";

const Letter = ({ letter }) => {
  const [status, setStatus] = useState(false);

  let containerStyles = {
    transform: `translateY(${status ? "-50px" : "70px"})`,
  };
  return (
    <div
      className="letterContainer"
      style={containerStyles}
      onMouseEnter={() => setStatus(!status)}
    >
      <h1>{letter}</h1>
    </div>
  );
};

export default Letter;

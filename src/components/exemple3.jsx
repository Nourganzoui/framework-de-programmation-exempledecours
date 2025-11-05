import React, { useState } from "react";

const Exemple3 = () => {
  const [isStyled, setIsStyled] = useState(false);

  const toggleStyle = () => {
    setIsStyled((prev) => !prev);
  };

  const style = {
    backgroundColor: isStyled ? "yellow" : "green",
    color: isStyled ? "black" : "white",
    padding: "10px",
    borderRadius: "6px",
  };

  return (
    <div>
      <h1 style={style}>Bonjour 🌞</h1>
      <button onClick={toggleStyle}>Changer le style</button>
    </div>
  );
};
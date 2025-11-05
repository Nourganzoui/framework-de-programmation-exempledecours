import React, { useState } from 'react'

const Exemple2 = () => {
  const [weather, setWeather] = useState("🌞 Soleil");
  const toggleWeather = () => {
    setWeather((prev) => (prev === "🌞 Soleil" ? "🌧️ Pluie" : "🌞 Soleil"));
  };
  return (
    <div>
      <h1>Météo actuelle : {weather}</h1>
      <button onClick={toggleWeather}>Changer la météo</button>
    </div>
  )
}

export default Exemple2

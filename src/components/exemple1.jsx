import { useState } from "react";
import React from 'react'

const Exemple1 = () => {
  const [city, setCity] = useState("Tunis");
  const handleChange = () => {
    setCity("Bizerte");
  };
  return (
    <div>
      <h1>Bonjour {city} 🌞</h1>
      <button onClick={handleChange}>Changer la ville</button>
    </div>
  )
}

export default Exemple1

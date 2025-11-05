import React, { useState } from 'react';
import styles from '../styles/useState.module.css';

export default function WeatherObjectExemple() {
  const [weather, setWeather] = useState({
    city: 'Tunis',
    temperature: 25,
    condition: '🌞 Ensoleillé',
  });

  const updateTemperature = () => {
    setWeather((prevWeather) => ({
      ...prevWeather,
      temperature: prevWeather.temperature + 1,
    }));
  };

  const changeCity = () => {
    setWeather((prevWeather) => ({
      ...prevWeather,
      city: prevWeather.city === 'Tunis' ? 'Bizerte' : 'Tunis',
    }));
  };

  const toggleCondition = () => {
    setWeather((prevWeather) => ({
      ...prevWeather,
      condition: prevWeather.condition === '🌞 Ensoleillé' ? '🌧️ Pluie' : '🌞 Ensoleillé',
    }));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>🌤️ Météo actuelle</h2>
      <p>Ville : {weather.city}</p>
      <p>Température : {weather.temperature}°C</p>
      <p>Condition : {weather.condition}</p>

      <button className={styles.btnStyles} onClick={updateTemperature}>
        🌡️ Augmenter la température
      </button>

      <button className={styles.btnStyles} onClick={changeCity}>
        🏙️ Changer la ville
      </button>

      <button className={styles.btnStyles} onClick={toggleCondition}>
        🌧️ Changer la condition
      </button>
    </div>
  );
}

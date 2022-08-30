import { useState } from 'react'
import axios from 'axios'

import '../src/App.css'

function App() {
  const [weather, setWeather] = useState(':)')
  const [city, setCity] = useState('')

  async function GetWeather() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then(e => {
        const response = e.data
        setWeather(
          `🌡️${(response.main.temp - 273).toFixed(1)}ºC \xa0 💧${response.main.humidity}%`
        )
      })
      .catch(err => {
        console.log(err)
        setWeather('City Not Found')
      })
  }

  return (
    <div className="main">
      <h1>Weather From:</h1>
      <input
        type="text"
        name="city"
        id="city"
        onChange={value => setCity(value.currentTarget.value)}
        placeholder="Your city name here"
      />
      <button onClick={() => GetWeather()}>Get Weather</button>
      <h2>{weather}</h2>
    </div>
  )
}

export default App

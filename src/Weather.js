import { useState } from "react";
import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  // manejo de estado para renderizar componente con valor inicial en falso
  let [componentReady, setComponentReady] = useState(false)
  let [weatherData, setWeatherData]= useState({})
  // se llama a esta función una vez que la API devuelva una respuesta
  function handleResponse(response){
    console.log(response.data)
    setComponentReady(true)
    setWeatherData({
      city:response.data.city,
      temperature:Math.round(response.data.temperature.current),
      description:response.data.condition.description,
      iconUrl:response.data.condition.icon_url,
      humidity:response.data.temperature.humidity,
      feelsLike:response.data.temperature.feels_like,
      wind:response.data.wind.speed
    })
  }




  if(componentReady){
    // renderizar el componente una vez que la API responda
    return (
      <div className="weather-app">
      <header>
        <form className="form-style">
          <input
            type="search"
            placeholder="Enter a city name..."
            required=""
            className="search-input"
            />
          <input
            type="submit"
            defaultValue="Search"
            className="search-button"
          />
        </form>
      </header>
      <main>
        <div className="current-weather">
          {/* <div> */}
          <h1 className="current-city">{weatherData.city}</h1>
          <ul className="current-details">
            <li>Tuesday 21:46</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          {/* <div className="current-temperature"> */}
          <div className="row">
            <div className="col-6">
              <span className="current-temperature-icon">
                <img src={weatherData.iconUrl} alt={weatherData.description}/>
              </span>
              <span
                className="current-temperature-value"
                id="current-temperature"
                >
                {weatherData.temperature}
              </span>
              <span className="current-temperature-unit">°C</span>
            </div>
            <div className="col-6">
              <ul className="second-details">
              <li>Feels like: {weatherData.feelsLike}°C</li>

                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} else {
  // Renderizar pantalla cargando
  const key = "381070c4bbet21eec6f3do8eb01a4a37";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Tokyo&key=${key}&units=metric`
  axios.get(apiUrl).then(handleResponse)

  return "Loading..."
}
}

import { useState } from "react";
import React from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  // manejo de estado para renderizar componente con valor inicial en falso
  let [componentReady, setComponentReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState(props.defaultCity)
  // se llama a esta función una vez que la API devuelva una respuesta
  function handleResponse(response) {
    // console.log(response.data);
    setComponentReady(true);
    setWeatherData({
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      humidity: response.data.temperature.humidity,
      feelsLike: Math.round(response.data.temperature.feels_like),
      wind: response.data.wind.speed,
    });
  }

  function search(){
    const key = "381070c4bbet21eec6f3do8eb01a4a37";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault()
    search()
  }

  function handleChange(event){
    setCity(event.target.value)
  }

  if (componentReady) {
    // renderizar el componente una vez que la API responda
    return (
      <div className="weather-app">
        <header>
          <form className="form-style" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city name..."
              required=""
              className="search-input"
              onChange={handleChange}
            />
            <input
              type="submit"
              defaultValue="Search"
              className="search-button"
            />
          </form>
        </header>
        <main>
          <WeatherInfo data={weatherData} />
        </main>
      </div>
    );
  } else {
    search();
    // Renderizar pantalla cargando

    return "Loading...";
  }
}

import { useState } from "react";
import React from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  // manejo de estado para renderizar componente con valor inicial en falso
  let [componentReady, setComponentReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState(props.defaultCity);
  let [forecastList, setDailyData] = useState([]);
  // console.log(forecastList, 'forecastList')
  // console.log(weatherData, 'weatherData')
  // se llama a esta función una vez que la API devuelva una respuesta
  function handleResponse(response) {
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

  function handleForecastResponse(forecastResponse) {
    // dentro de cada elemento de esta lista estan los datos para cada dia de la semana cada elemento es un objeto
    const forecastList = forecastResponse.data.daily;
    setDailyData(forecastList);
  }

  function search() {
    console.log('Entra en search')
    const key = "381070c4bbet21eec6f3do8eb01a4a37";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse)
    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}`;
    axios.get(forecastApiUrl).then(handleForecastResponse)
  //   axios.get(apiUrl).then(handleResponse).catch((error) => {
  //     return (
  //       <div>
  //         <h2>City not found !!!</h2>
  //       </div>
  //     )
  // })
  }

  // function forecastShow(){
  //   const key = "381070c4bbet21eec6f3do8eb01a4a37";
  //   let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}`;
  //   axios.get(forecastApiUrl).then(handleForecastResponse)
  //   axios.get(forecastApiUrl).then(handleForecastResponse).catch((error) => {
  //     return (
  //       <div>
  //         <h2>City not found</h2>
  //       </div>
  //     );
  // })
// }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (componentReady) {
    // console.log("Se renderiza el componente")
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
          {/* Renderizar solo los componentes que sean de la fecha actual en adelante */}
          <div className="container">
            <div className="row  ">
              {/* <WeatherForecast dailyData={forecastList[0]} currentDay={weatherData.date}/> */}
              <WeatherForecast dailyData={forecastList[1]}/>
              <WeatherForecast dailyData={forecastList[2]}/>
              <WeatherForecast dailyData={forecastList[3]}/>
              <WeatherForecast dailyData={forecastList[4]}/>
              <WeatherForecast dailyData={forecastList[5]}/>
              <WeatherForecast dailyData={forecastList[6]}/>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    search();
    // forecastShow()
    // Renderizar pantalla cargando
    return "Loading...";
  }
}

import React from "react";

export default function Weather() {
  return (
    <div className="weather-app">
      <header>
        <form>
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
          <h1 className="current-city"> Paris </h1>
          <ul className="current-details">
            <li>Tuesday 21:46</li>
            <li>Thunderstorm</li>
          </ul>
          {/* <div className="current-temperature"> */}
          <div className="row">
            <div className="col-6">
              <span className="current-temperature-icon">☀️</span>
              <span
                className="current-temperature-value"
                id="current-temperature"
              >
                24
              </span>
              <span className="current-temperature-unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Preciítation: 15%</li>
                <li>Humidity: 80%</li>
                <li>Wind: 15 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

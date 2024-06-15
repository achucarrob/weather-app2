import { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFarenheith(event){
    event.preventDefault();
    setUnit("farenheith")
  };

  function showCelsius(event){
    event.preventDefault();
    setUnit("celsius")
  };

  if (unit === "celsius"){

      return (
          <div>
      <span className="current-temperature-value" id="current-temperature">
        {props.temperatureCelsius}
      </span>
      <span className="current-temperature-unit">°C |
      <button onClick={showFarenheith} > °F </button>
      </span>
    </div>
  );
} else {
    let fahrenheit = (props.temperatureCelsius * 9) / 5 + 32
    return (
        <div>
        <span className="current-temperature-value" id="current-temperature">
          {fahrenheit}
        </span>
        <span className="current-temperature-unit">
        <button onClick={showCelsius} >°C </button>
        | °F
        </span>
      </div>  
    )
}
}

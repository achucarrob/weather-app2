import DateFormat from "./DateFormat";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="current-weather">
      {/* <div> */}
      <h1 className="current-city">{props.data.city}</h1>
      <ul className="current-details">
        {/* <li>Tuesday 21:46</li> */}
        <DateFormat date={props.data.date} />
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      {/* <div className="current-temperature"> */}
      <div className="row">
        <div className="col-7 d-flex">
          <span className="current-temperature-icon">
            <img width={80} src={props.data.iconUrl} alt={props.data.description} />
          </span>
          <WeatherTemperature temperatureCelsius={props.data.temperature}/>
        </div>
        <div className="col-5">
          <ul className="second-details">
            <li>Feels like: {props.data.feelsLike}°C</li>

            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

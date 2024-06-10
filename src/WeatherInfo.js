import DateFormat from "./DateFormat";

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
        <div className="col-6">
          <span className="current-temperature-icon">
            <img src={props.data.iconUrl} alt={props.data.description} />
          </span>
          <span className="current-temperature-value" id="current-temperature">
            {props.data.temperature}
          </span>
          <span className="current-temperature-unit">°C</span>
        </div>
        <div className="col-6">
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

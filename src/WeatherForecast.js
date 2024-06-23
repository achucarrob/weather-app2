export default function WeatherForecast(props) {
  // console.log(props.dailyData.time, 'props')
  // if ((!props.dailyData || props.currentDay) || (props.dailyData && !props.currentDay)) {
  if (!props.dailyData) {
    return <div className="col-2 pt-5 pb-5">
      <img width={60} src="https://static.vecteezy.com/system/resources/previews/026/623/306/non_2x/opened-portable-umbrella-black-white-error-404-flash-message-monochrome-empty-state-ui-design-page-not-found-popup-cartoon-image-flat-outline-illustration-concept-vector.jpg" alt="404 weather info not found"/>
    </div>;
  } else {
    const newDate = new Date(props.dailyData.time * 1000);
    // console.log(newDate)
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[newDate.getDay()];
    // const currentDay = days[props.currentDay.getDay()];
    return (
      <div className="col-4 col-sm-2 d-flex flex-column align-items-center justify-content-center">
        <div className="weather-forecast-date">{day}</div>
        <div>
          <img
            className="weather-forecast-icon"
            src={props.dailyData.condition.icon_url}
            alt="clima"
          />
        </div>
        <div className="weather-forecast-temperatures">
          <span className="weather-forecast-temperature">
            {" "}
            <strong>
              {Math.round(props.dailyData.temperature.maximum)}°.
            </strong>{" "}
          </span>
          <span className="weather-forecast-temperature">
            {Math.round(props.dailyData.temperature.minimum)}°.
          </span>
        </div>
      </div>
    );
  }
}

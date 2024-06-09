export default function DateFormat(props) {
  console.log(props.date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours()
  if (hour<10){
    hour=`0${hour}`
  }
  let minute = props.date.getMinutes()
  if (minute<10){
    minute=`0${minute}`
  }
  return <div>{day}, {hour}:{minute} hs.</div>;
}

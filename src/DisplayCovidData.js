import "./DisplayCovidData.css";

function DisplayCovidData(props) {
  return (
    <div className="Data_Box">
      <div className="Data">
        <span>Country: </span>
        <span>{props.Country}</span>
      </div>
      <div className="Data">
        <span>Total Confirmed Cases: </span>
        <span>{props.TotalConfirmed}</span>
      </div>
      <div className="Data">
        <span>Total Deaths: </span>
        <span>{props.TotalDeaths}</span>
      </div>
      <div className="Data">
        <span>Total Recovered: </span>
        <span>{props.TotalRecovered}</span>
      </div>
    </div>
  );
}

export default DisplayCovidData;

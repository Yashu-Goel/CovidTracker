import "./Form.css";
import React, { useState } from "react";
function Form(props) {
  let [enteredCountryName, setEnteredCountryName] = useState("");
  const CountryNameChangeHandler = (event) => {
    setEnteredCountryName(event.target.value);
  };
  console.log(enteredCountryName);
  const SubmitHandler=(event)=>{
    event.preventDefault();

    setEnteredCountryName('');
    console.log(event);
    props.CountryName(enteredCountryName);    // sending data to app.js
  }

  return (
    <form className="Form_Box" onSubmit={SubmitHandler}>
      <div className="Input_Box">
        <label>Country Name: </label>
        <input
          type="text"
          placeholder="Enter Country Name"
          onChange={CountryNameChangeHandler}
          value={enteredCountryName}
        ></input>
      </div>
      <div>
        <button type="submit">Find Covid Cases</button>
      </div>
    </form>
  );
}

export default Form;

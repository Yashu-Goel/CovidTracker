import Form from './Form';
import './App.css';
import Mediator from './Mediator';
import React,{useState} from "react";

function App() {


  const[CountryName,setCountryName]=useState('');
  const GetCountryName=(Data_Buffer)=>{
    setCountryName(Data_Buffer);
  }
  return (
    <div>
        <Form CountryName={GetCountryName}/>
          <Mediator item={CountryName}/>
    </div>
  );
}

export default App;

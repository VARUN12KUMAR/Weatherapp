import React, { Component } from 'react';
import './App.css';
import Weather from './app_component/weather.component';
import Form from './app_component/form.component'
// api.openweathermap.org/data/2.5/weather?q=London,uk


const API_KEY="e9bdb7d6bf93ffe7d00c1db7c021e19e";
class App extends React.Component {
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false

    };
   
  }
  calCelcius(temp){
    let cell=Math.floor(temp-273.15)
    return cell;
  }
  getWeather=async (e) =>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    if(city&&country){

    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const response=await api_call.json();
    console.log(response);
    this.setState({
      city:`${response.name},${response.sys.country}`,
      country:response.sys.country,
      celsius:this.calCelcius(response.main.temp),
      temp_max:this.calCelcius(response.main.temp_max),
      temp_min:this.calCelcius(response.main.temp_min),
      description:response.weather[0].description


    });
    }else{
      this.setState(true);
    }




  };
  render() {
    return (
      <div className="App">
      <Form loadweather={this.getWeather} error={this.state.error}/>
      <Weather city={this.state.city} country={this.state.country} temp_celsius={this.state.celsius}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}
      />
      </div>
      
    );
  }
}

export default App;

import './App.css';
import React, { Component } from 'react';
import DrawGraphCo2 from './Graph_co2';
import DrawGraphTemHum from './Graph_temHum';

class App extends Component {
  render() {
    return (
      <div style={{ width: 1500, height: 200 }}>

        <div style={{ width: 600, height: 300, float: 'left' }}>
          <h3>
            <center>CO2 Concentration</center>
          </h3>
          <DrawGraphCo2 />
          <img src="img/co2.png" alt="co2" style={{ width: 500, height: 300 }}/>
        </div>

        <div style={{ width: 600, height: 300, float: 'left' }}>
          <h3>
            <center>Temperature & Humidity</center>
          </h3>
          <DrawGraphTemHum />
          <img src="img/temHum.png" alt="temHum" style={{ width: 500, height: 300 }}/>
        </div>

      </div> 
    );
  }
}

export default App;

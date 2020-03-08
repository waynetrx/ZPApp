import React, { useState, useEffect }  from 'react';
import {BarChart} from './common/BarChart'
import axios from "axios"

import './App.css';

function App() {
  // const [state, setState] = useState([] as any)
  const [state, setState] = useState({ chartData: []})
  useEffect(() => {
    console.log("App Component did mount executed")
    let chartData = {
      chartData: [{ "name": "SG", "value": 55}, { "name": "MY", "value": 22}]
    }
    //setState({...state, chartData})
    let countries = ["United States", "Netherlands", "Singapore", "India", "China", "UK", "Colombia", "Germany", "Japan", "Italy"]

    //let url = "https://cors-anywhere.herokuapp.com/http://universities.hipolabs.com/search?country=";
    let url = "http://universities.hipolabs.com/search?country=";

    let promises: Array<Promise<void>> = []
    let universities = []
    countries.forEach( value =>{
      promises.push(
        axios.get(url + value)
        .then(res => {
          universities = universities.concat(res.data)
        })
      )
      
    })

    Promise.all(promises).then(() => {
      console.log(universities.length)
      setState(prevState => {
        return { chartData: universities}
      })
    });
    
  },[])
  return (
    <div className="App">

      <BarChart
        data={ state.chartData }
        title="University Count By Country"
        color="#70CAD1"
      />
    </div>
  );
}

export default App;

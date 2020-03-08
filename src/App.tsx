import React, { useState, useEffect }  from 'react';
import {BarChart} from './common/BarChart'
import axios from "axios"

import './App.css';

function App() {
  // const [state, setState] = useState([] as any)
  const [state, setState] = useState({ chartData: []})

  const getUniversitiesData = (countries, data) =>{
    //var results = data.filter( university => countries.includes(university.country) )
    var universitiesData = data.reduce((total, n) => {
          var data = total
          if(countries.includes(n.country)){
            if(total[n.country]){
              total[n.country].push(n.name)
            }
            data = {
              ...total, 
              [n.country]: total[n.country] ? total[n.country] : [n.name]
            }
          }
          return data
      },{});
      return universitiesData
  }

  useEffect(() => {
    console.log("App Component did mount executed")
    let chartData = {
      chartData: [{ "name": "SG", "value": 55}, { "name": "MY", "value": 22}]
    }
    //setState({...state, chartData})
    let countries = ["United States", "Angola", "Singapore", "India", "China", "UK", "Sierra Leone", "Brazil", "Japan", "Portugal"]

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

      //TODO: This can be used to get total universities count
      console.log(universities.length)
      setState(prevState => {
        return { chartData: universities}
      })

      // Get selected university name list
      var countryList = ["Singapore", "Angola", "Sierra Leone"];
      var results = getUniversitiesData(countryList,universities)
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

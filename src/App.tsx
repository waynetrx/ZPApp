import React, { useState, useEffect }  from 'react';
import {BarChart} from './common/BarChart'
import { ListTable } from './common/ListTable'
import axios from "axios"
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

import './App.css';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

function App() {
  // const [state, setState] = useState([] as any)
  const [state, setState] = useState({ chartData: []})
  const [countries, setCountries] = useState({ chartData: []})

  const mystyles: CSSProperties = {
    color: "#2E8544",
    fontSize: "1.5em"
  }

  const section: CSSProperties = {
    height: "100%"
  }

  const topLeftSection: CSSProperties = {
    height: "20%"
  }

  const bottomLeftSection: CSSProperties = {
    height: "80%",
    overflow: "scroll"
  }


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
      var selectedUniversities = getUniversitiesData(countryList,universities)
      setCountries(prevState => {
        return { chartData: selectedUniversities}
      })
    });
    
  },[])
  return (
    <div className="App" style={section}>
      <Grid container spacing={2} style={section}>
        <Grid item xs={4} style={section}>
          <Grid container style={section}>
            <Grid item xs={12} style={topLeftSection}>
              <h2>Total No. Of Universities (10 Countries) </h2>
              <div style={mystyles}>
                { state.chartData.length}
              </div>
              <Divider variant="middle" />
            </Grid>
            <Grid item xs={12} style={bottomLeftSection}>
              <h2>University List</h2>
              <ListTable
                data= {countries.chartData}
              ></ListTable>
            </Grid>
          </Grid>
          
        </Grid>
        <Grid item xs={8}>
          <BarChart
          data={ state.chartData }
          title="University Count By Country"
          color="#70CAD1"
        />
        </Grid>
      </Grid>
      


      
    </div>
  );
}

export default App;

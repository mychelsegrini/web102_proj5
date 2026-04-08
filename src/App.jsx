import { useState, useEffect } from 'react'
import './App.css'
import List from './components/List'
import Card from './components/Card'

function App() {
  const [data, setData] = useState([])
  const [avgGdp, setAvgGdp] = useState(0)
  const [avgPop, setAvgPop] = useState(0)
  const [avgElec, setAvgElec] = useState(0)
  const [displayedData, setDisplayedData] = useState([])
  const [threshold, setThreshold] = useState(0)

  async function updateStats(json) {
    let sumGdp = 0
    let sumPop = 0
    let sumElec = 0
    console.log(avgGdp);

    for(let k = 0; k < json.length; k++){
      console.log("foi")
      sumGdp += json[k].gdp
      sumPop += json[k].pop
      sumElec += json[k].elec
    }

    console.log("amogus")
    setAvgGdp(sumGdp/json.length)
    setAvgPop(sumPop/json.length)
    setAvgElec(sumElec/json.length)
  }

  const handleSubmit = (criteria) => {
    criteria.preventDefault();
    let newData = data.filter((elem, index, array) => {
      return elem.name.slice(0, criteria.target.elements.name.value.length) == criteria.target.elements.name.value;
    })
    setDisplayedData(newData)

    updateStats(newData)
  }

  const handleSlider = (e) => {
    const newValue = Number(e.target.value);
    let newData = data.filter(item => item.gdp >= newValue)
    setDisplayedData(newData)
    setThreshold(newValue)
    updateStats(newData)
  }

  const reset = () => {
    setDisplayedData(data)
    setThreshold(0)
    updateStats(data)
  }

  async function makeQuery() {
    let query = "https://api.worldbank.org/V2/country/all/indicator/NY.GDP.PCAP.CD?format=json&date=2024&per_page=300";
    let response = await fetch(query)
    let json = await (await response.json())[1]
    let gdp = json

    query = "https://api.worldbank.org/V2/country/all/indicator/EG.ELC.ACCS.ZS?format=json&date=2023&per_page=300"

    response = await fetch(query)
    json = await (await response.json())[1]
    let elec = json

    query = "https://api.worldbank.org/V2/country/all/indicator/SP.POP.TOTL?format=json&date=2024&per_page=300"

    response = await fetch(query)
    json = await (await response.json())[1]
    let pop = json

    json = []
    for(let k = 0; k < pop.length; k++){
      if(!gdp[k].value || !gdp[k].value || !elec[k].value) continue;
      json.push({name: gdp[k].country.value, gdp: gdp[k].value, elec: elec[k].value, pop: pop[k].value})
    }

    json = json.slice(49);
    setData(json);
    setDisplayedData(json)
    console.log(json)

    updateStats(json)
  }

  useEffect(() => {
    makeQuery().catch(console.error)
  }, [])

  return (
    <div className="app-wrapper">
      <h1>Macroeconomics Detective</h1>
      <div className="stats-container">
        <Card text={"Average GDP"} prop={`$${Math.round(avgGdp).toLocaleString()}`}/>
        <Card text={"Average Population"} prop={`${Math.round(avgPop).toLocaleString()}`}/>
        <Card text={"Average Electricity Access"} prop={`${avgElec.toFixed(2)}%`}/>
      </div>
      <List 
        data={displayedData} 
        handleSubmit={handleSubmit} 
        reset={reset} 
        handleSlider={handleSlider}
        threshold={threshold}
      />
    </div>
  )
}

export default App

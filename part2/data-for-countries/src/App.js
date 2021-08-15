import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Languages = ({country}) => {
  return (
    <div>
      <ul>
      {country.languages.map(language=>
        <li key={language.name}>
          {language.name}
        </li>)}
      </ul>
    </div>
  )
}

const Details = ({result}) => {
  return(
    <div key={result.name}>
      <h1>{result.name}</h1>
        <p>Capital {result.capital}</p>
        <p>Population {result.capital}</p>
        <h2>Languages</h2>
        <Languages country={result}/>
        <img alt="" width="300" height="200" src={result.flag} />
    </div>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter,setFilter] = useState('')

  //Fetch data from API
  
  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response=> setCountries(response.data))
  }

  useEffect(hook,[])

  const HandleChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }
  
  const FilterResults = countries.filter(country => 
    country.name.toLowerCase().includes(newFilter.toLowerCase()))


  
  const ListResults = () => {
    if (FilterResults.length>10) {
      return (
        <div>
          <p>Too many results</p>
        </div>
      )
    } else if (FilterResults.length <10 && FilterResults.length >1) {
      return (
        <div>
          {FilterResults.map(result =>
          <div>
          <p key={result.name}>{result.name}</p>
          <button>Show</button>
          </div>
          )}
        </div>
      )
    } else {
      return (
        <div>
          {FilterResults.map(result =>
          <Details result={result}/>
          )}
        </div>
      )
    }
  }

  return(
    <div>
      Find countries:
      <input value={newFilter} onChange={HandleChange}/>
      <ListResults />
    </div>

  )
}

export default App;

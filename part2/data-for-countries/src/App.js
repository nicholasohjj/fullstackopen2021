import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Results from './components/results'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchValue,setSearchValue] = useState('')

  //Fetch data from API
  
  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response=> setCountries(response.data))
  }

  useEffect(hook,[])

  const HandleChange = (event) => {
    setSearchValue(event.target.value)
  }  
  
  return(
    <>
      Find countries:
      <input value={searchValue} onChange={HandleChange}/>
      <Results searchValue={searchValue} countries={countries}/>
    </>

  )
}

export default App;

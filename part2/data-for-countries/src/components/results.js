import React from 'react'
import Details from './details'
import ShowButton from './showButton'
import Weather from './weather'

const Results = ({countries,searchValue}) => {

    const FilterResults = countries.filter(country => 
        country.name.toLowerCase().includes(searchValue.toLowerCase()))
        
    if (FilterResults.length>10) {
      return (
        <div>
          <p>Too many results</p>
        </div>
      )
    } else if (FilterResults.length <10 && FilterResults.length >1) {
      return (
        <div>
          {FilterResults.map(country =>
          <p key={country.name}>{country.name}
          <ShowButton key={country.name} country={country}/>
          </p>
          )}
        </div>
      ) 
    } else {
      return (
        <div>
          {FilterResults.map(country =>
          <>
            <Details key={country.name} country={country}/>
            <h2>Weather in {country.name}</h2>
            <Weather capital={country.capital} />
          </>
          )}

        </div>
      )
    }
  }

  export default Results;


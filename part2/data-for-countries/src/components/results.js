import React from 'react'
import Details from './details'
import ShowButton from './showButton'

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
          <ShowButton country={country}/>
          </p>
          )}
        </div>
      ) 
    } else {
      return (
        <div>
          {FilterResults.map(country =>
          <Details country={country}/>
          )}
        </div>
      )
    }
  }

  export default Results;


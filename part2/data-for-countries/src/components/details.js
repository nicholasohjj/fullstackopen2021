import React from 'react'


const Details = ({country}) => {
    return (
      <div key={country.name}>
        <h1>{country.name}</h1>
          <p>Capital {country.capital}</p>
          <p>Population {country.capital}</p>
          <h2>Languages</h2>
          <ul>
            {country.languages.map(language=>
            <li key={language.name}>
              {language.name}
            </li>)}
          </ul>
          <img alt="" width="300" height="200" src={country.flag} />
      </div>
    )
  }

  export default Details;
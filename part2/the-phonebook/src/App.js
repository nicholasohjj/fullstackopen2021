import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
    }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setFilter ] = useState('')
  
  const nameList = persons.map(person=> person.name.toLowerCase())

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNamefilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
    }

//Filter displayed list
  const notesToShow = (newFilter.trim()===false)
  ? persons
  : persons.filter(person => person.name.toLowerCase() === newFilter.toLowerCase())

  const addName = (event) => {
    event.preventDefault()
    const Name = {
      name: newName,
      number: newNumber
    }
    if (nameList.includes(newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(Name))
    
      setNewName('')
      setNewNumber('')

    }}

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter by name:
        <input value={newFilter} onChange={handleNamefilter}/>
      </div>
      <h2>Add a new</h2>

      <form onSubmit={addName}>
        <div>
          name: 
          <input value={newName} onChange={handleNameChange}/>
          number: 
          <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {notesToShow.map(person=> 
        <li key={person.name}> {person.name} {person.number}</li>
        )}   
      </ul>
      </div>
  )
}

export default App
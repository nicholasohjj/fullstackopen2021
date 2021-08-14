import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
    }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const names = persons.map(person=> person.name)

  const addName = (event) => {
    event.preventDefault()
    const Name = {
      name: newName,
    }
    if (names.includes(newName)) {
      alert('Test')
    } else {
      setPersons(persons.concat(Name))
    
      setNewName('')
    }

  }
  

    return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person=> 
        <li key={person.name}> {person.name}</li>
        )}   
      </ul>
      </div>
  )
}

export default App
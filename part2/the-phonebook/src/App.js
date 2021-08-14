import React, { useState } from 'react'

const Filter = ({newFilter,handleNamefilter}) => {
  return (
    <div>
      filter by name:
      <input value={newFilter} onChange={handleNamefilter}/>
  </div>
  )
}

const Input = ({text,value,onChange}) => {
  return (
    <div>
    {text}: 
          <input value={value} onChange={onChange}/>
    </div>
  )
}

const Form = ({addName,newName,handleNameChange,newNumber,handleNumberChange}) => {
  return (
    <div>
      <form onSubmit={addName}>
      <Input text="name" value={newName} onChange={handleNameChange}/>
      <Input text="number" value={newNumber} onChange={handleNumberChange}/>
      <div>
        <button type="submit">add</button>
      </div>
      </form>
    </div>
  )
}

const Numbers = ({notesToShow}) => {
  return (
    <div>
      <ul>
        {notesToShow.map(person=> 
        <li key={person.name}> {person.name} {person.number}</li>
        )}   
      </ul>
    </div>
  )
}

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
  const notesToShow = (!newFilter.trim())
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

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
      <Filter newFilter={newFilter} handleNamefilter={handleNamefilter} />
      <h2>Add a new</h2>
      <Form addName={addName}
            newName={newName}
            handleNameChange={handleNameChange}
            newNumber={newNumber}
            handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Numbers notesToShow={notesToShow} />
      </div>
  )
}

export default App
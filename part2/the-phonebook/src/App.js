import React, { useEffect, useState } from 'react'
import Form from './components/form'
import phoneservice from './components/phoneservice'

const Filter = ({newFilter,handleNamefilter}) => {
  return (
    <div>
      filter by name:
      <input value={newFilter} onChange={handleNamefilter}/>
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

//App component
const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setFilter ] = useState('')

  useEffect(() =>{
    phoneservice
      .getAll()
      .then(allPersons=>setPersons(allPersons))
  },[])

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

  //Adds new element to persons array
  const addName = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }

    if (nameList.includes(newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
    } else {
      phoneservice
        .addNew(newPerson)
        .then(updatedList => {
          setPersons(persons.concat(updatedList))
          setNewNumber('')
        })
      }
    }

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
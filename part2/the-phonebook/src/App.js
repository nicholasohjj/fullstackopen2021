import React, { useEffect, useState } from 'react'
import Form from './components/form'
import List from './components/list'
import phoneservice from './components/phoneservice'
import Filter from './components/filter'
import Message from './components/message'


//App component
const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setFilter ] = useState('')
  const [ newMessage, setNewMessage ] = useState(null)

  useEffect(() =>{
    phoneservice
      .getAll()
      .then(allPersons=>setPersons(allPersons))
  },[])
  
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
      name: newName.trim(),
      number: newNumber,
    }

    const nameCheck = persons.filter(person=> 
      person.name.toLowerCase().includes(newPerson.name.toLowerCase())
      )
    
    console.log(nameCheck)

    if (!newName.trim() || !newNumber.trim()) {
      alert("Name/number must be filled")

    if (nameCheck.length>0) {
      if (window.confirm(`${newName} is already added to phonebook. Would you like to update the number?`)) {
        return (
          phoneservice
            .update(nameCheck[0].id, newPerson)
            .then(updatedList=> {setPersons(persons.map(person=>
                person.id !== nameCheck[0].id
                  ? person
                  : updatedList))
          setNewMessage(`${newName} has been updated`)
          setTimeout(()=>setNewMessage(null),5000)
        })
            .catch(error=> {
              setNewMessage(`${newName} has been already been removed from the server`)
              setTimeout(()=>setNewMessage(null),5000)
            })
        )}
      } else {
        phoneservice
          .addNew(newPerson)
          .then(updatedList => {
              setPersons(persons.concat(updatedList))
              setNewMessage(`${newName} has been added`)
              setTimeout(()=>setNewMessage(null),5000)
            })
          .catch(error=> {
            setNewMessage(`${newName} has been already been added to the server`)
            setTimeout(()=>setNewMessage(null),5000)
          })
        }
        setNewNumber('')
        setNewName('')
      }

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={newMessage}/>
      <Filter newFilter={newFilter} handleNamefilter={handleNamefilter} />
      <h2>Add a new</h2>
      <Form addName={addName}
            newName={newName}
            handleNameChange={handleNameChange}
            newNumber={newNumber}
            handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <List notesToShow={notesToShow} setPersons={setPersons} persons={persons} />
      </div>
  )
}

export default App
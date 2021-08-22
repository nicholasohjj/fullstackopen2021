import React from 'react'
import phoneservice from './phoneservice'


const Button = ({person, id, setPersons, persons}) => {

  const HandleButton = () => {
    if (window.confirm(`Do you want to delete ${person.name}`)) {
      phoneservice
        .removePerson(id)
        setPersons(persons.filter(person=>person.id !==id))
        }
  }

  return (
    <button onClick={HandleButton}>Delete</button>
  )
}

export default Button
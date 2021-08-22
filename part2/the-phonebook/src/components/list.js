import React from 'react'
import Button from './button'

const List = ({notesToShow, setPersons, persons}) => {
    return (
      <div>
        <ul>
          {notesToShow.map(person=>
            <li key={person.name}>
              {person.name} {person.number}
              <Button person={person} id={person.id} setPersons={setPersons} persons={persons}/>
            </li>
          )}   
        </ul>
      </div>
    )
  }

  export default List
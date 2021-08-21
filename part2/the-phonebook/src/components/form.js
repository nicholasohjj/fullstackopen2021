import React from 'react'

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

  export default Form
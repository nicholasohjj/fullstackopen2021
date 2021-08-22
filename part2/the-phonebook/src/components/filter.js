import React from 'react'

const Filter = ({newFilter,handleNamefilter}) => {
    return (
      <div>
        filter by name:
        <input value={newFilter} onChange={handleNamefilter}/>
    </div>
    )
  }

  export default Filter
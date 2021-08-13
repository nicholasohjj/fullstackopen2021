import React from 'react' 

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name}/>
      <Contents parts={course.parts}/>
    </div>
  )
}

const Header = ({name}) => <h1>{name}</h1>

const Contents = ({parts}) => {
  return (
    <div>
      <Part parts={parts}/>
      <Total parts = {parts} />
    </div>
  )
}

const Part = ({parts}) => {
  return (
    <div>
      {parts.map(part=>
        <p key={part.id}>{part.name} {part.exercises}</p>
      )}
    </div>
  )
}

const Total = ({parts}) => {
  const Exercises = parts.map(part=> part.exercises)

  return (
    <div>
    <p>Total of {Exercises.reduce((total,sum) => total+sum)} exercises</p>
    </div>
  )
}

export default Course
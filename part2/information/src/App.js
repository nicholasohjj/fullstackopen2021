import React from 'react' 

const Course = ({courses}) => {
  return (
    <div>
      <Header name={courses.name}/>
      <Contents parts={courses.parts}/>
    </div>
  )
}

const Index = (array) => {
  {array}.map((value,index))=>
  
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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course courses={course} />


}

export default App
import React from 'react' 

const Course = ({courses}) => {
  return (
    <div>
      <Header name={courses.name}/>
      <Contents parts={courses.parts}/>
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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => <Course courses={course} />)}
    </div>
  )
}

export default App
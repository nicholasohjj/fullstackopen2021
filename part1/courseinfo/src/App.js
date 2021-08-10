import React from 'react'

const Header = ({course}) => <h1>{course}</h1>

const Part = ({title,value}) =><p>{title} {value}</p>

const Content = ({parts}) => {
  return (
    <div>
      <Part title={parts[0].name} value={parts[0].exercises}/>
      <Part title={parts[1].name} value={parts[1].exercises}/>
      <Part title={parts[2].name} value={parts[2].exercises}/>
    </div>
  )
}

const Total = ({parts}) => <p>Number of exercises {parts[0].exercises+parts[1].exercises+parts[2].exercises}</p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />


    </div>
  )
}

export default App
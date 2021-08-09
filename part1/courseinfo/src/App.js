import React from 'react'

const Header = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Part = ({part,exercise}) => {
  return (
    <div>
      <p>{part} {exercise}</p>

    </div>
  )
}

const Total = ({value}) => {
  return (
    <div>
      <p>Number of exercises {value}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1+exercises2+exercises3

  const Content = () => {
    return (
      <div>
        <Part part={part1} exercise={exercises1}/>
        <Part part={part2} exercise={exercises2}/>
        <Part part={part3} exercise={exercises3}/>
      </div>
    )
  }

  return (
    <div>
      <Header title={course} />
      <Content />
      <Total value={total} />

    </div>
  )
}

export default App
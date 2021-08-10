import React, { useState } from 'react' 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0])
  const Random = () => setSelected(Math.floor(Math.random()*anecdotes.length))

  const copy = [...points];

  const vote = () => {
    copy[selected] +=1;
    setPoints(copy);
  }
  
  const mostVotes = Math.max(...points)
  const Index = copy.indexOf(mostVotes)

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <p>Has {points[selected]} votes </p>
      <br/>
      <button onClick={vote}>Vote here!</button>
      <button onClick={Random}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[Index]}
      <p>Has {mostVotes} votes </p>

    </div>
  )
}

export default App
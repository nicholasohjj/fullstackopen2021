import React, { useState } from 'react'

const Button = ({title, Handleclick }) => <button onClick={Handleclick}>{title}</button>

const Data = ({title,value}) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              {title} {value}
            </td>          
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Positive = ({title,value}) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              {title} {value}%
            </td>          
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Statistics = ({good,neutral,bad,total,average,positive}) => {
  if (good===0 && neutral===0 && bad===0) {
    return (
      <div>
        <p>No feedback</p>
      </div>
    )
    } else {
        return(
          <div>
            <Data title="Good" value={good}/>
            <Data title="Neutral" value={neutral}/>
            <Data title="Bad" value={bad}/>
            <Data title="Total" value={total}/>
            <Data title="Average" value={average}/>
            <Positive title="Positive" value={positive}/>
          </div>  
      )
    }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Incrementgood = () => setGood(good+1)
  const Incrementneutral = () => setNeutral(neutral+1)
  const Incrementbad = () => setBad(bad+1)

  const total = good+neutral+bad
  const goodScore = good*1
  const neutralScore = neutral*0
  const badScore = bad*-1
  const average = (goodScore+neutralScore+badScore)/total
  const positive = (good/(good+neutral+bad))*100

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button Handleclick={Incrementgood} title="good"/>
      <Button Handleclick={Incrementneutral} title="neutral"/>
      <Button Handleclick={Incrementbad} title="bad"/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
    </div>
  )
}

export default App
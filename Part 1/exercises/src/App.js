import { useState } from 'react'

const StatisicLine = (props) =>{
  if(props.text === 'positive'){
    return(
      <tr>
        <td>{props.text}</td>  
        <td>{props.value}%</td>

      </tr>  
    )
  }
  return(
    <tr>
      <td>{props.text}</td>  
      <td>{props.value}</td>
    </tr>
  )
}
const Statistics = ({good,neutral,bad}) =>{
  const sum = good + neutral + bad
  const average = (good-bad)/sum
  const positivePercentage = (good/sum)*100
  if(sum===0){
    return(
      <div>
        <h2>Statistics</h2>    
        No feedback given
      </div>
    )
  }
  return (
    <>
    <h2>Statistics</h2>
    <table>
      <tbody>
        <StatisicLine text = 'good' value = {good}/>
        <StatisicLine text = 'neutral' value = {neutral}/>
        <StatisicLine text = 'bad' value = {bad}/>
        <StatisicLine text = 'all' value = {sum}/>
        <StatisicLine text = 'average' value = {average}/>
        <StatisicLine text = 'positive' value = {positivePercentage}/>
      </tbody>
    </table>
      
    </>
  )
}
const Button = (props) =>{
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick = { () => setGood(good+1)} text = 'good'/>
      <Button onClick = { () => setNeutral(neutral+1)} text = 'neutral'/>
      <Button onClick = { () => setBad(bad+1)} text = 'bad'/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
import { useState } from 'react'

const Button = (props) =>{
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const History = (props) =>{
  if(props.allClicks.length === 0){
    return(
      <div>
        The app is used by pressing buttons
      </div>
    )
  }
  return(
    <div>
      button press History: {props.allClicks.join(' ')}
    </div>
  )
}


const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => () => {
    console.log('hello',who);
  }

  const setToValue = (newValue) =>{
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={() =>setToValue(1000)}>Thousand</button>
      <button onClick={() =>setToValue(0)}>Zero</button>
      <button onClick={() =>setToValue(value+1)}>Increment</button>
    </div>
  )
}
export default App
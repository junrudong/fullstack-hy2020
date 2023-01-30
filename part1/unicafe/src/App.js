import { useState } from 'react'

const Headers =({text})=> <div><h1>{text}</h1></div>
const Button = (props)=> (<button onClick={props.handleClick}>{props.text}</button>)

const App = () => {

  const header = 'give feedback'
  const stat = 'statistics'
  const [good,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick =()=>{
    setGood(good+1)
    console.log('good+1',good)
  }
  const handleNeutralClick =()=>{
    setNeutral(neutral+1)
    console.log('Neutral+1',neutral)
  }
  const handleBadClick =()=>{
    setBad(bad+1)
    console.log('bad+1',bad)
  }
  const all = good+neutral+bad 
  const average = (good*1 + bad*(-1))/all
  return (
    <div>
      <Headers text={header}/>
      <Button handleClick={handleGoodClick} text= 'good'/>
      <Button handleClick={handleNeutralClick} text= 'Neutral'/>
      <Button handleClick={handleBadClick} text= 'bad'/>
      <Headers text={stat}/>
    
      <p>good, {good}</p>
      <p>neutral,{neutral}</p>
      <p>bad, {bad}</p>
      <p>all,{all}</p>
      <p>average,{average}</p>
      <p>positive,{(good/all)*100}%</p>
    
      
    </div>    
  )
}

export default App
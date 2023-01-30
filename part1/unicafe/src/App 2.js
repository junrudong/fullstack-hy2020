import { useState } from 'react'

const Headers =({text})=> <h1>{text}</h1>


const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const clickhandler=() => useState(
    

  )

  return (
    <div>
      <div>{Headers text="give feedback"}</div>
        <button>good</button>
        <button>neutral</button>
        <button>band</button>
      <div>{Headers text="statistics"}</div>
        <p> "good",{goodtotal} <p/>
        <p> "neutral",{neutraltotal} <p/>
        <p> "bad",{badtotal} <p/>
     
    </div>
  )
}

export default App
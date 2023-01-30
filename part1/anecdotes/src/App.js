import { useState } from 'react'

const Header = ({text}) =><div><h1>{text}</h1></div>
const Button =(props)=> (<button onClick={props.handler}>{props.text}</button>)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  let [selected, setSelected] = useState(0)
  let votes = [0, 0, 0, 0 ,0 ,0 ,0,0 ]
  let [votearray,Addvotes] = useState([...votes])
  const anecdotehandle = () =>{
        if (selected >=7){
            selected = -1
        }
        setSelected(selected+1)
        console.log('currtrent selectstate',{selected})
    }

   const votehandle = ()=>{
    const copy = [...votearray]
    copy[selected] += 1
    Addvotes(copy)
    console.log(votearray[selected])
    }
  const Ind = votearray.indexOf(Math.max(...votearray))
  return (
    <div>

    <Header text='Anedote of the day has'/>
      <p>{anecdotes[selected]}</p>
      <p>has {votearray[selected]} votes</p>
      < Button handler={votehandle} text ='Vote'/>
      < Button handler={anecdotehandle} text='next anecdote'/>
      

    < Header text='Anedote with most votes'/>
     <p>{anecdotes[Ind]}</p>
     has {votearray[Ind]} votes
      
    </div>
  )
}

export default App
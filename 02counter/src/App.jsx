import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15) //useState- used to update the state in UI DOM 
  //const[var_1 takes value,var_2 takes function ]=useState(default value )
  //it updates the counter variables wherever it is there in program

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1 
    //setCounter(counter) also works 
    //Variables are updating but not showing in UI --> Main power of React ! 
    // --> Reacting on various variables with a single event
    // React will control the update in UI gives methods called HOOKS to update the UI {can see the hooks defination in code source}
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue} //Passing just the reference Not calling the function
      >Add value {counter}</button>  
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
//Transversing tree even wihtout importing React because of _jsx imported internally
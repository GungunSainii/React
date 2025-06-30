import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("") 



  //useRef hook --> Ref hook to take ref we use useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => { //It optimise the code 
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789" 
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) { 
      let char = Math.floor(Math.random() * str.length + 1) //So that atleast we don't get zero value 
      pass += str.charAt(char)
    }

    setPassword(pass) 


  }, [length, numberAllowed, charAllowed, setPassword]) //dependencies that the fxn repeat itself 

  const copyPasswordToClipboard = useCallback(() => { 
    passwordRef.current?.select(); //to increase the UI ?{indicate optional select}
    passwordRef.current?.setSelectionRange(0, 999);//to define the range of input 
    window.navigator.clipboard.writeText(password) //to select the text in input button
  }, [password])

  useEffect(() => { //Sync the changes Re render the fxn according to dependencies 
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}} //event prop of reeact tells react to run this fxn whenever input value changes 
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev ) //Most common logic to toggle the values 
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
/*
useCallback(fxn,dependencies) --> Call useCallback is a react hook that lets you cache(memory) a function definition between re-renders
dependencies - array jisme vo variables pe effect aa raha hai vo pass kr digyeye 
 */
/*

 */
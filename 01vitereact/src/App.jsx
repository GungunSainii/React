//Knew in jsx that we know the conversion of HTML but how do we inject the variables and javascript in HTML 
//Here is the conversion of variables and javascript
// 

import Chai from "./chai"


function App() {
  const username = "chai aur code"

  return (
    <>
    <Chai/>
    <h1>chai aur react {username}</h1> //{username}--This is evaluated expression thus it prints the result after evaluating the 
    //javascript program Evaluation part cannot be done here It can done in function or outside return WHY ??
    <p>test para</p>
   </>
  )
}

export default App

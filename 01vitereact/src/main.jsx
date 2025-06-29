import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsc as _jsx} from "react/jsx-runtime.js" --> can do this instaed of create_element
import App from './App.jsx'

//App is just a function 
//Conversion of html in function to javascript which is easy to Understand SO 
// we do parsing which is done by bundler-- files of javascript Do behind the scene Magic 
//Babel transpiler -- bundler ?

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const ReactElement = { //What if we pass the object directly ? But it will not ShowUp Also it is a object 
// So we will pass it directly with its name -- But still not ShowUp ?
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

//Why anotherElement works but ReactElement didn't ?
//.render is also a method to convert just as we created customReact earlier So it has some standard expectation
//for the object to pass so which is not fulfilled by ReactElement here 
//So which is wwhy anotherElement elemements works but ReactElements doesn't  

const anotherUser = "chai aur react" //After formation of the tree we inject the value of variables in the reactElement

const reactElement = React.createElement( //Now creation of element using the standard expection from React library
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement //Username goes in here 
    //Which is why no evaluated expression here as it render directly ---   Variable injection
    //End of day it converts into object so it also has the syntas for conversion
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
  
)



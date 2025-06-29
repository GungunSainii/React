7function customRender(reactElement, container){ //we can create our own customoRender as well
    /*
    const domElement = document.createElement(reactElement.type) //Modular fxn create -- rcreate using react element
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type) //More modular code 
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) { //prop is a counter here and props are the iterables fetched from reactElements
        if (prop === 'children') continue; //continue skip this iteration 
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
//a tag ko render krna hai -- > behind the scene fxn jo hai ushme ander appne jo html return kiya hai vo react kaise dekhta hai
//vo dekh  rahe hai hum 

const mainContainer = document.querySelector('#root') //Fetch the root from index.html

customRender(reactElement, mainContainer) //to inject elements into root (from, to)

/*
--Behind the scene--
React mia elements ka tree graph mai form hota rahta hai 
customReact elements create krta hai using the methods inside of it 
at the end of the day vo similar manner mai inject hota hai 

 */
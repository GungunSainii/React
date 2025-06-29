#Why React ?
- Phantom/Ghost message problem --> No consistency in UI
- (state - JS) need to create a syn bwt them (UI - DOM)
- React is a library
- Framework - Military AND Library - Cool Dude
- ONGOING PROCESS.

---------------

- Vite or parcel --> bundler : combined files of javascript
- React library (Core library)


##Creating a react app

- npx create-react-app name {Not prefered -- bulky utility} (Node package executer)
- cd name
- First analyse package.Json Check everything -- Entry Point
- react and react dom main library , web-vitals - performance tracker
- script - production ko run krte hai 
- ls to list 
- npm run start/npm start --> exception 
- production mai build folder he serve krta hai 

- NOWW 
- npm create vite@latest
- Select framework
- npm i -- to install the node modules
- npm run dev

- Starting bekar file for us -- setip.testjs,report-web-vitals,logo.scg,app.test,app.css,index.css
- Librarry main doesn't matter much
- Know how to clean the code 
- gitignore - to ignore the modules not to be uploaded in git 
- package-lock.json - dependencies lock ho jate hai ki eshe version par chalega
- manifest.json - mobile application ke metatext ko dekhne ke liye use hote hai
- robots.txt - search engine ke liye hai
- index.html -- MAIN 
- Component try to name name.jsx as a rule 
- Function name first as capital 
- JSX can return onlt one element using fragment(<></>)
- File name try to keep first letter capital
- REload using >re
- React js or jsx depends on what it returns but in vite only jsx works and fxn name should be in capital as well
- It is single paged as there is only one div named root 

##---- How React (JS Library ) inject into HTML ----
- In main.jsx and App.jsx inside 01vitereact & customReact

##Source Code
- Look for scripts first --> packages -->react-client -->react --> src --> jsx {All Code Base} 

##Virtual DOM, Fiber and reconsillation 
- createRoot dom like structure create krta hai --> appne DOM and main DOM ko compare krta hai then sirf updated nodes kop change 
kr deta hai -- Virtual DOM tree
- browser re paint the dom -- page reload 
- Suppose some elements depends on network call so many call updatimg again and again SOO no need to update instantly 
- So wait optimise code and send the new call -- React team thinks like that-- UI Updation cool !
- Article : https://github.com/acdlite/react-fiber-architecture
- React uses react fiber mechanism behind the scene for virtual dom manupilation
- reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.
- update
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.
- Question : why usage of KEY in array to render in list button ?
- In React Fiber docx : Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique.


##Tailwind and props in react
- To install the tailwind with VITE
- npm install -D tailwindess postess autoprefixers 
- -D : for dev dependencies 
- npx tailwindcss init -p
- Generate a tailwind file into the source code 
- Change the content in the file 
- add tailwind into the index.css
- now npm run dev 
- Can use tailwind classes from tailwind
- install intelligence extension for suggestion 
- tailwind makes everything easy pissy 
- Pexcels for image and u can use any component from tailwind , img tag close kro 
- devUI.io --> components 

- Prop makes the component reuseable 
- React believe in distribution of code on the bases of the work it do not on technology
- Everyone has access to props
- []- hidden scope nothing is accessible directly 
- Try to use className 
- Everything can be passed to return in the form of the variable in RETURN
- Prop is a object jo sabme allow hota hai and if we pass the arguements then ton access it we will use prop.username 
- Or we can do destructure as ({username }) directly to access username
- default value can also be passed to properties of component using pipe( || )
- Or pass the default value in parameter section of function itself
 

 ##Interview Question
 - Question) Make react project of counter {Counter question}
 - What will happen if we reprint the setCounter() fxn four times
 - Fiber send the States/packages in batches and when the state gives the same value for each state and it bundles up and change the value of the counter for once.
 - What if we want to change the value by four ??
 - State is also a fxn and accept callback So take prevCounter and update by 1 

##First project
- Background Changer 

##UseEffect, UseRef and UseCall
- Password Generator 

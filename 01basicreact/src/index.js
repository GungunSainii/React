import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); //Creating a virtual DOM 
root.render(
 
    <App /> //JSX POWER - js ke through appne html element ko render kr sakte ho 
    //jsx almost html sa he dikhta hai 
  
);
//Even withour injecting manually react-Script inject that in index.html there :)
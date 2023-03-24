import { useState } from 'react'

import './App.css'
function Student(props){
  return(
      
    <div className='student'>
      
      <p>student name:{props.name}</p>
      <p>Result:{props.result} </p>
    </div>
  )
}

function App() {
  

  return (
    
     
    <div>
       <h1>Students Result</h1>
      
       <Student name='Aiman' result='Passed'/>
      <Student name='Ahsan' result='Passed'/>
      <Student name='Sara' result='Passed'/>
    </div>
      
    
  )
}

export default App

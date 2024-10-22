import React from 'react'
import { useState } from 'react'

function App() {

    let [change, setChange] = useState('white');

    const red = () =>{
      setChange(change ="red");
      console.log("red")
    }
    const blue = () =>{
      setChange(change ="blue");
      console.log("red")
    }
    const green = () =>{
      setChange(change ="green");
      console.log("red")
    }
    const olive = () =>{
      setChange(change ="olive");
      console.log("red")
    }
    const pink = () =>{
      setChange(change ="pink");
      console.log("red")
    }
    const aqua = () =>{
      setChange(change ="aqua");
      console.log("red")
    }
    const purple = () =>{
      setChange(change ="purple");
      console.log("red")
    }
    const grey = () =>{
      setChange(change ="grey");
      console.log("red")
    }

  return (
    <div style={{backgroundColor:change,height:'100vh'}}>

      <h1>BG changer</h1>
      <div >
        <button className='p-4' onClick={red}>Red</button>
        <button className='p-4' onClick={blue}>Blue</button>
        <button className='p-4' onClick={green}>Green</button>
        <button className='p-4' onClick={olive}>Olive</button>
        <button className='p-4' onClick={pink}>Pink</button>
        <button className='p-4' onClick={aqua}>Aqua</button>
        <button className='p-4' onClick={purple}>Purple</button>
        <button className='p-4' onClick={grey}>Grey</button>

        
      </div>
    </div>
  )
}

export default App
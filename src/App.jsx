import { useState } from 'react'
import './App.css'
import { useTransition } from 'react'
// import Front from './Components.jsx'

function App() {
  //const [show, setCount] = useState(0)

  return (
    <>
      <div className="layout">       
        <header>
            <h1>PackNext: Order Priority Planner</h1>
        </header>
        <div className='searchbar'>
          
              <input type="text" name="search" id="search" placeholder='search...' />
              
            <a href="" target='_blank'id='link'>
              <button id="filterbtn" >Filter <input type="date" name="" id="" /></button>
              
            </a>
            <a href="" target='_blank'id='link'>
              <button id="searchbtn" onClick={(SubmitButton)}>View</button>
            </a>
          
        </div>
        
      </div>
        

    </>
  )
}

export default App



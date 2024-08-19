import { useState } from 'react'
import './index.css'
import './App.css'

function App() {

  const [mode, setMode] = useState({
    backgroundColor: 'rgba(0,0,0,1)'
  }
  )
  
  return (
    <>
    <div style= {mode}>
        <button onClick={()=>{
          if(mode.backgroundColor === 'rgba(0,0,0,1)'){
                setMode({backgroundColor: 'rgba(255,255,255,1)'})
          }
          else{
              setMode({backgroundColor: 'rgba(0,0,0,1)'})
          }
          
          
        }} className='w-50 h-50 bg-green-700'>light Mode</button>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './index.css'
import './App.css'

function App() {
  const [text, setText] = useState("Enter text here")

  console.log(text);
  
  return (
    <> 
        <div className='p1 bg-black w-2 h-1' id='div'> 
          <input type="text" name="idk" id="textarea" className='w-80 h-60' placeholder={text}>
          </input>
          <button onClick ={()=>{
            const textarea = document.getElementById("textarea").value
            const text = textarea.toUpperCase();
            setText(textarea);
            const h1 = document.getElementById("h1");

            h1.textContent = `${text}`

          }} className="w-1 h-1 bg-white">click me</button>

          <h1>{text.length} and {text.split(" ").length}</h1>
          <br/>
          <h1 id="h1" className='h-auto w-auto text-start text-cyan-50 bg-black'> </h1>
          </div>   
    </>
  )
  console.log(text);
}

export default App

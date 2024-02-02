import UseStorage from './Hooks/UseStorage';
import './App.css'
import { useState } from 'react';

function App() {
  const [storedValue,setStorage] = UseStorage("storageKey","");
  const [userInput,setUserInput] = useState(storedValue);
const handleChange= (e) =>{
  setUserInput(e.target.value)
  setStorage(e.target.value)
 
}
  return (
    <div>
      
    <input 
    type="text"
    placeholder='Write something😺?'
    style={{width:'70%',height:'60px',padding:"10px 20px", fontSize:"30px"}}
value={userInput}
    onChange={handleChange} />
    </div>
  )
}

export default App

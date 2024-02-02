import { useState } from 'react';
import './App.css';
import useStorage from './Hooks/useStorage';

function App() {


  const [storedValue, setStorage] = useStorage("storagekey", "");
  const [userInput, setUserInput] = useState(storedValue);

  const handleChange = (e) => {
    setUserInput(e.target.value);
    setStorage(e.target.value);
  };

  return (
    <>
     
      <input
        type="text"
        placeholder="Write something😺?"
        style={{width:'70%',height:'60px',padding:"10px 20px", fontSize:"30px"}}
        value={userInput}
        onChange={handleChange}
        />
    </>
  );
}

export default App;
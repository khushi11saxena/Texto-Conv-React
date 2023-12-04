import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
function App() {
  const [mode, setmode] = useState('light');//tell about dark mode enable or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
     document.body.style.backgroundColor = '#2F2E2E';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = '#fff';
    }
  }
  return (
    <>
     <Navbar title="TextoConv" mode={mode} toggleMode={toggleMode}/>
     <div className="container my-3">
     <TextForm heading="Enter the text to analyze below" mode={mode}/>
     </div>
    </>
    
  );
}

export default App;

// src/App.js
import React, { useState } from 'react';
import './App.css';
import SpinWheel from './SpinWheel';

function App() {
  const [showSpin, setShowSpin] = useState(false);

  const showSpinFun =() =>{
       setTimeout(()=>{
          setShowSpin(true);
       },5000)
  }

  showSpinFun();


  return (
    <div className="App">
      {showSpin ? <SpinWheel/> : ''};
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Exp from './components/Exp';
import './App.css';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
     const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 7000);

     return () => clearTimeout(timeout);
  }, []);  

  return (
    <>
      {showLoader && <span className="loader"></span>}
      <Exp />
    </>
  );
}

export default App;

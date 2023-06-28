import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App(){
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Enabled", "success");
      // document.title = 'First App - Dark';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      // document.title = 'First App - Light';
    }
  }
  return(
    <>
    <Router>
      <Navbar title="TestApp" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />

          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

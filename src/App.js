import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light'); //Whether dark mode is enabled or not

  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled", "success");
      document.title = 'TextUtils - DarkMode';
      // setInterval(() => {
      //   document.title = "UPDATE!!!";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Update now Danger";
      // }, 1500);

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      document.title = 'TextUtils - LightMode';
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" message="Villain" aboutUs="About_Us_TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">

          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}

            {/* <Route exact path="/"> */}
              <TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert} />
            {/* </Route> */}

          {/* </Switch> */}

        </div>
       {/* </Router> */}

    </>
  );
}

export default App;

import React, { useState } from "react";
import logo from './freelanced_logo.gif';
import BgGIF from './login-bg.gif';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="title"> <img className="logo-gif" src={logo} ></img>
      <div className="App">
        <img src={BgGIF} style={{height:'800px'}}></img>
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
      </div>
    </div>
  );
}

export default App;

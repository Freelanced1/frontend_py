/*
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
*/

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// export const Login = (props) => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   function handleFormSwitch(formType) {
//     props.onFormSwitch(formType);
//   }

//   function handleLogout() {
//     // Implement logout logic here...
//     setLoggedIn(false);
//   }

//   // function handleLogin() {
//   //   navigate("/login-register");
//   // }
//   function handleLogin() {
//        navigate("/GoogleOneTapLogin");
//     }

//   return (
//     <div className="auth-form-container">
//       <h2>Login</h2>
//       {loggedIn ? (
//         <button className="link-btn" onClick={handleLogout}>
//           Logout
//         </button>
//       ) : (
//         <button className="link-btn" onClick={handleLogin}>
//           Login with Google
//         </button>
//       )}
//       <button
//         className="link-btn"
//         onClick={() => handleFormSwitch("register")}
//       >
//         Don't have an account? Register here.
//       </button>
//     </div>
//   );
// };


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleOneTapLogin from "./GoogleOneTapLogin";

export const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function handleFormSwitch(formType) {
    // handle form switch
  }

  function handleLogout() {
    // Implement logout logic here...
    setLoggedIn(false);
  }

  function handleGoogleLogin() {
    setLoggedIn(true);
  }

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      {loggedIn ? (
        <button className="link-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <GoogleOneTapLogin setLoggedIn={handleGoogleLogin} />
      )}
      <button
        className="link-btn"
        onClick={() => handleFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};


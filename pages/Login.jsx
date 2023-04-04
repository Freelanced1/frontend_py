// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import GoogleOneTapLogin from "./GoogleOneTapLogin";

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

//   function handleLogin() {
//     navigate("/google-login");
//   }

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

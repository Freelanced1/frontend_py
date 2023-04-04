// /*global google*/
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import jwt_decode from "jwt-decode";

// function GoogleOneTapLogin(props) {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");

//   function handleCredentialResponse(response) {
//     console.log("Encoded JWT ID token: " + response.credential);
//     var userObject = jwt_decode(response.credential);
//     console.log("User object:", userObject);

//     // Get the user info from the response
//     const userEmail = userObject.email;
//     const firstName = userObject.given_name;
//     const lastName = userObject.family_name;
//     const fullName = `${firstName} ${lastName}`;

//     // Send the user data to your API endpoint
//     const userData = { email: userEmail, firstName, lastName };
//     console.log("Sending user data:", userData);
//     fetch(
//       `https://freelancedit.azurewebsites.net/personexists/${userEmail}`
//     )
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Response:", data);
//         const message = data.message;
//         if (message === "Recruiter exists") {
//           localStorage.setItem("isAuthenticated", true);
//           localStorage.setItem("fullName", fullName);
//           setEmail(userEmail); // set email in state
//           navigate("/buyer_homepage");
//         } else if (message === "User exists") {
//           localStorage.setItem("isAuthenticated", true);
//           localStorage.setItem("fullName", fullName);
//           setEmail(userEmail); // set email in state
//           navigate("/freelancer_homepage");
//         } else {
//           fetch("https://freelancedit.azurewebsites.net/newuser", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(userObject),
//           })
//             .then((response) => {
//               console.log("Response:", response.data);
//               localStorage.setItem("isAuthenticated", false);
//               setEmail(userEmail); // set email in state
//               navigate("/selectrole");
//             })
//             .catch((error) => {
//               console.error(error);
//             });
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   function handleError(error) {
//     console.error(error);
//   }

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://accounts.google.com/gsi/client";
//     script.async = true;
//     script.defer = true;
//     script.onerror = handleError;
//     document.head.appendChild(script);

//     if (typeof google !== "undefined" && google.accounts) {
//       google.accounts.id.initialize({
//         client_id:
//           "825776228723-acjhna5u0tf3730fj8eam3vbk3irr23u.apps.googleusercontent.com",
//         callback: handleCredentialResponse,
//       });
//       google.accounts.id.prompt();
//     } else {
//       console.error("Google Identity Services library is not loaded.");
//     }

//     console.log("fullName from local storage:", localStorage.getItem("fullName"));
//     console.log("email from local storage:", localStorage.getItem("email"));

//     return () => {
//       const scriptElement = document.querySelector(
//         'script[src="https://accounts.google.com/gsi/client"]'
//       );
//       if (scriptElement && scriptElement.parentNode === document.head) {
//         document.head.removeChild(scriptElement);
//       }
//     };
//   }, []);

//   return (
//     <button
//       className="btn btn-primary"
//       data-auto-select="true"
//       data-cancel-on-outside-click="false"
//     >
//       Login with Google
//     </button>
//   );
// }

// export default GoogleOneTapLogin;






// /*global google*/
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import jwt_decode from "jwt-decode";

// function GoogleOneTapLogin(props) {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");

//   function handleCredentialResponse(response) {
//     console.log("Encoded JWT ID token: " + response.credential);
//     var userObject = jwt_decode(response.credential);
//     console.log("User object:", userObject);

//     // Get the user info from the response
//     const userEmail = userObject.email;
//     const firstName = userObject.given_name;
//     const lastName = userObject.family_name;
//     const fullName = `${firstName} ${lastName}`;

//     // Send the user data to your API endpoint
//     const userData = { email: userEmail, firstName, lastName };
//     console.log("Sending user data:", userData);
//     fetch(
//       `https://freelancedit.azurewebsites.net/personexists/${userEmail}`
//     )
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Response:", data);
//         const message = data.message;
//         if (message === "Recruiter exists") {
//           localStorage.setItem("isAuthenticated", true);
//           localStorage.setItem("fullName", fullName);
//           localStorage.setItem("email", userEmail);
//           setEmail(userEmail); // set email in state
//           navigate("/RecruiterHomepage");
//         } else if (message === "User exists") {
//           localStorage.setItem("isAuthenticated", true);
//           localStorage.setItem("fullName", fullName);
//           localStorage.setItem("email", userEmail);
//           setEmail(userEmail); // set email in state
//           navigate("/freelancer_homepage");
//         } else {
//           fetch("https://freelancedit.azurewebsites.net/newuser", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(userObject),
//           })
//             .then((response) => {
//               console.log("Response:", response.data);
//               localStorage.setItem("isAuthenticated", false);
//               localStorage.setItem("email", userEmail);
//               setEmail(userEmail); // set email in state
//               navigate("/selectrole");
//             })
//             .catch((error) => {
//               console.error(error);
//             });
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   function handleError(error) {
//     console.error(error);
//   }

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://accounts.google.com/gsi/client";
//     script.async = true;
//     script.defer = true;
//     script.onerror = handleError;
//     document.head.appendChild(script);
  
//     if (typeof google !== "undefined" && google.accounts) {
//       google.accounts.id.initialize({
//         client_id:
//           "825776228723-acjhna5u0tf3730fj8eam3vbk3irr23u.apps.googleusercontent.com",
//         callback: handleCredentialResponse,
//       });
//       google.accounts.id.prompt();
//     } else {
//       console.error("Google Identity Services library is not loaded.");
//     }
  
//     return () => {
//       const scriptElement = document.querySelector(
//         'script[src="https://accounts.google.com/gsi/client"]'
//       );
//       if (scriptElement && scriptElement.parentNode === document.head) {
//         document.head.removeChild(scriptElement);
//       }
//     };
//   }, []);
  

//   return (
//     <button
//       className="btn btn-primary"
//       data-auto-select="true"
//       data-cancel-on-outside-click="false"
//     >
//       Login with Google
//     </button>
//   );
// }

// export default GoogleOneTapLogin;








/*global google*/
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function GoogleOneTapLogin(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log("User object:", userObject);

    // Get the user info from the response
    const userEmail = userObject.email;
    const firstName = userObject.given_name;
    const lastName = userObject.family_name;

    // Send the user data to your API endpoint
    const userData = {
      email: userEmail,
      firstname: firstName,
      lastname: lastName,
    };
    console.log("Sending user data:", userData);
    fetch(
      `https://freelancedit.azurewebsites.net/personexists/${userEmail}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Response:", data);
        const message = data.message;
        if (message === "Recruiter exists") {
          localStorage.setItem("isAuthenticated", true);
          localStorage.setItem("fullName", `${firstName} ${lastName}`);
          localStorage.setItem("email", userEmail);
          setEmail(userEmail); // set email in state
          navigate("/RecruiterHomepage");
        } else if (message === "User exists") {
          localStorage.setItem("isAuthenticated", true);
          localStorage.setItem("fullName", `${firstName} ${lastName}`);
          localStorage.setItem("email", userEmail);
          setEmail(userEmail); // set email in state
          navigate("/freelancer_homepage");
        } else {
          console.log("Response:", response.data);
          localStorage.setItem("isAuthenticated", false);
          localStorage.setItem("email", userEmail);
          setEmail(userEmail); // set email in state
          navigate("/selectrole");
            }
          })
        }
    
  function handleError(error) {
    console.error(error);
  }

  function handleLogout() {
    // remove user data from local storage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("fullName");
    localStorage.removeItem("email");
    setEmail(""); // clear email in state
    navigate("/login"); // or any other desired route
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onerror = handleError;
    document.head.appendChild(script);

    if (typeof google !== "undefined" && google.accounts) {
      google.accounts.id.initialize({
        client_id:
          "825776228723-acjhna5u0tf3730fj8eam3vbk3irr23u.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      google.accounts.id.prompt();
    } else {
      console.error("Google Identity Services library is not loaded.");
    }

    return () => {
      const scriptElement = document.querySelector(
        'script[src="https://accounts.google.com/gsi/client"]'
      );
      if (scriptElement && scriptElement.parentNode === document.head) {
        document.head.removeChild(scriptElement);
      }
    };
  }, []);
  

  return (
    <>
      <button
        className="btn btn-primary"
        data-auto-select="true"
        data-cancel-on-outside-click="false"
      >
        Login with Google
      </button>
      {localStorage.getItem("isAuthenticated") && (
        <button className="btn btn-secondary" onClick={handleLogout}>
          Logout
        </button>
      )}
    </>
  );
}

export default GoogleOneTapLogin;
// // import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import GoogleOneTapLogin from './GoogleOneTapLogin';

// const Landing = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Sarah Landing Page</h1>
//       <button onClick={() => navigate("/google-login")} >Login</button>
//       <GoogleOneTapLogin />
//     </div>
//   );
// };

// export default Landing;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleOneTapLogin from './GoogleOneTapLogin';

const Landing = () => {
  return (
    <div>
      <h1>Sarah Landing Page</h1>
      <GoogleOneTapLogin />
    </div>
  );
};

export default Landing;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const BHomePage = () => {
//   const navigate = useNavigate();
//   const fullName = localStorage.getItem("fullName");
//   const email = localStorage.getItem("email");
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     console.log("useEffect called with email:", email);
//     if (email) {
//       console.log(`Sending data to https://freelancedit.azurewebsites.net/getbusiness/${email}`);
//       fetch(`https://freelancedit.azurewebsites.net/getbusiness/${email}`)
//         .then(response => {
//           console.log(`Received data from https://freelancedit.azurewebsites.net/getbusiness/${email}:`, response);
//           return response.json();
//         })
//         .then(data => {
//           console.log("User data:", data);
//           setUserData(data);
//         })
//         .catch(error => console.error(error));
//     }
//   }, [email]);

//   console.log("userData:", userData);

//   return (
//     <div>
//       <h1>{fullName ? `Welcome, ${fullName}!` : "to Buyer"}</h1>
//       <div style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <button style={{ margin: '10px', color: 'black' }} onClick={() => navigate("/buyer_search")}>Search work</button>
//         {userData && (
//           <div style={{ flex: 1, margin: '20px', padding: '20px', backgroundColor: '#f1f1f1' }}>
//             <h2>Details !!!!!:</h2>
//             <p><strong>Email:</strong> {userData.email}</p>
//             <p><strong>Phone:</strong> {userData.phone}</p>
//             <p><strong>Profile Pic:</strong> {userData.profile_pic}</p>
//             <p><strong>Language:</strong> {userData.language}</p>
//             <p><strong>Occupation:</strong> {userData.occupation}</p>
//             <p><strong>Project Area:</strong> {userData?.project_area?.join(", ")}</p>
//             {userData.project_area_details && <p><strong>Project Area Details:</strong> {userData.project_area_details.join(", ")}</p>}
//             <p><strong>Documents:</strong> {userData.documents.join(", ")}</p>
//             <p><strong>Skills:</strong> {userData.skills.join(", ")}</p>
//             <p><strong>Proficiency:</strong> {userData.proficency.join(", ")}</p>
//             <p><strong>Timeline:</strong> {userData.timeline ? "Yes" : "No"}</p>
//             {userData.timeline && (
//               <>
//                 <p><strong>Deadline:</strong> {userData.deadline}</p>
//                 <p><strong>Budget:</strong> {userData.budget}</p>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BHomePage;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';



// const BHomePage = () => {
//   const navigate = useNavigate();
//   const email = localStorage.getItem("email");
//   const [userData, setUserData] = useState(null);
//   const [showMessage, setShowMessage] = useState(false);

//   useEffect(() => {
//     console.log("useEffect called with email ", email);
//     if (email ) {
//       console.log(`Sending data to https://freelancedit.azurewebsites.net/getbusiness/${email}`);
//       fetch(`https://freelancedit.azurewebsites.net/getbusiness/${email}`)  
//           .then(response => {
//           console.log(`Received data from https://freelancedit.azurewebsites.net/getbusiness/${email}:`, response);
//           return response.json();
//         })
//         .then(data => {
//           console.log("User data:", data);
//           const id = data.id;
//           console.log(`Sending data to https://freelancedit.azurewebsites.net/getrecruitermongo/${email}/${id}`);
//           fetch(`https://freelancedit.azurewebsites.net/getrecruitermongo/${email}/${id}`)
//             .then(response => {
//               console.log(`Received data from https://freelancedit.azurewebsites.net/getrecruitermongo/${email}/${id}:`, response);
//               return response.json();
//             })
//             .then(data => {
//               console.log("User data:", data);
//               setUserData(data);
//             })
//             .catch(error => console.error(error));
//         })
//         .catch(error => console.error(error));
//     }
//   }, [email]);

//   const handleDeleteUser = () => {
//     console.log('handleDeleteUser called');
//     console.log(`Sending data to https://freelancedit.azurewebsites.net/deleteRecruiter/${email}`);
//     fetch(`https://freelancedit.azurewebsites.net/deleteRecruiter/${email}`, { method: 'DELETE' })
//       .then(response => {
//         console.log(`Received data from https://freelancedit.azurewebsites.net/deleteRecruiter/${email}:`, response);
//         setShowMessage(true);
//       })
//       .catch(error => console.error(error));
//   }

//   console.log("userData:", userData);
//   return (
//     <div>
//       <h1>{userData ? `Welcome, ${userData.fullName}!` : "to Buyer"}</h1>
//       <div style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <button style={{ margin: '10px', color: 'black' }} onClick={() => navigate("/buyer_search")}>Search work</button>
//         <button style={{ margin: '10px',color:'black' }} onClick={handleDeleteUser}>DELETE your Project!!</button>
//         {userData && (
//           <div style={{ flex: 1, margin: '20px', padding: '20px', backgroundColor: '#f1f1f1' }}>
//             <h2>Recruiter Details:</h2>
//             <p><strong>Email:</strong> {userData.email}</p>
//             <p><strong>Phone:</strong> {userData.phone}</p>
//             <p><strong>Profile Pic:</strong> {userData.profile_pic }</p>
//             <p><strong>Language:</strong> {userData.language }</p>
//             <p><strong>Occupation:</strong> {userData.occupation }</p>
//             <p><strong>Project Area:</strong> { userData.project_area.join(", ")}</p>
//             <p><strong>Project Area Details:</strong> {userData.project_area_details.join(", ")}</p>
//             <p><strong>Documents:</strong> {userData.documents.join(", ") }</p>
//             <p><strong>Skills:</strong> { userData.skills.join(", ")}</p>
//             <p><strong>Proficiency:</strong> {userData.proficiency.join(", ") }</p>
//             <p><strong>Timeline:</strong> {userData.timeline}</p>
//             <p><strong>Deadline:</strong> {userData.deadline}</p>
//             <p><strong>Budget:</strong> {userData.budget}</p>
//           </div>  
//         )}
//       </div>
//     </div>
//   );
// };

// export default BHomePage;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const BHomePage = () => {
  const navigate = useNavigate();
  const fullName = localStorage.getItem("fullName");
  const [inviteLink, setInviteLink] = useState('');
  const email = localStorage.getItem("email");
  const [userData, setUserData] = useState(null);
  const [showMessage, setShowMessage] = useState(false);


  useEffect(() => {
    console.log("useEffect called with email:", email);
    if (email) {
      console.log(`Sending data to https://freelancedit.azurewebsites.net/getbusiness/${email}`);
      fetch(`https://freelancedit.azurewebsites.net/getbusiness/${email}`)
        .then(response => {
          console.log(`Received data from https://freelancedit.azurewebsites.net/getbusiness/${email}:`, response);
          return response.json();
        })
        .then(data => {
          console.log("User data:", data);
          const id = data.id;
          console.log(`Sending data to https://freelancedit.azurewebsites.net/getrecruitermongo/${email}/${id}`);
          setTimeout(() => {
            fetch(`https://freelancedit.azurewebsites.net/getrecruitermongo/${email}/${id}`)
              .then(response => {
                console.log(`Received data from https://freelancedit.azurewebsites.net/getrecruitermongo/${email}/${id}:`, response);
                return response.json();
              })
              .then(data => {
                console.log("User data:", data);
                setUserData(data);
              })
              .catch(error => console.error(error));
          }, 1000); // add a delay of 1 second (1000 milliseconds)
        })
        .catch(error => console.error(error));
    }
  }, [email]);
  
  const handleDeleteUser = () => {
    console.log('handleDeleteUser called');
    console.log(`Sending data to https://freelancedit.azurewebsites.net/deleteRecruiter/${email}`);
    fetch(`https://freelancedit.azurewebsites.net/deleteRecruiter/${email}`, { method: 'DELETE' })
      .then(response => {
        console.log(`Received data from https://freelancedit.azurewebsites.net/deleteRecruiter/${email}:`, response);
        setShowMessage(true);
      })
      .catch(error => console.error(error));
  }

  console.log("userData:", userData);

  const handleInviteFriend = () => {
    const landingPageUrl = "http://localhost:3000"; 
    const link = `${landingPageUrl}/invite/${Math.random().toString(36).substr(2, 10)}`;
    setInviteLink(link);
      setInviteLink(link);
    navigator.clipboard.writeText(link)
      .then(() => {
        alert("Invite link copied to clipboard!");
      })
      .catch((err) => {
        console.error(err);
        // Display error message to user
        alert("Error copying invite link to clipboard.");
      });
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      backgroundColor: '#899fb1',
      padding: '30px'

    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
        marginRight: '30px',
        backgroundColor:'antiquewhite'
      }}>
        <h1 style={{
          fontSize: '36px',
          margin: '0 0 30px',
          textAlign: 'center',
          color: '#333',
          textShadow: '2px 2px 3px rgba(0,0,0,0.3)',
        }}>
          Welcome, {fullName} "Find the Best Freelance Talent on Freelanced "
        </h1>
        <button style={{
          margin: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#29a5ff',
          borderRadius: '30px',
          border: 'none',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease-in-out',
          backgroundImage: 'linear-gradient(to bottom right, #29a5ff, #1c8eeb)',
          backgroundSize: '200% 200%',
          backgroundPosition: 'bottom right',
          cursor: 'pointer'
        }}
          onMouseEnter={e => e.target.style.backgroundPosition = 'top left'}
          onMouseLeave={e => e.target.style.backgroundPosition = 'bottom right'}
          onClick={() => navigate("/buyer_search")}>
          Search Freelancers
          </button>

          <button style={{
          margin: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#40e0d0',
          borderRadius: '30px',
          border: 'none',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease-in-out',
          backgroundImage: 'linear-gradient(to bottom right, #29a5ff, #1c8eeb)',
          backgroundSize: '200% 200%',
          backgroundPosition: 'bottom right',
          cursor: 'pointer'
        }}
          onMouseEnter={e => e.target.style.backgroundPosition = 'top left'}
          onMouseLeave={e => e.target.style.backgroundPosition = 'bottom right'}
          onClick={() => navigate("/freelancer_search")}>
          Payments 
        </button>





        <button style={{
          margin: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#db7093',
          borderRadius: '30px',
          border: 'none',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease-in-out',
          backgroundImage: 'linear-gradient(to bottom right, #29a5ff, #1c8eeb)',
          backgroundSize: '200% 200%',
          backgroundPosition: 'bottom right',
          cursor: 'pointer'
        }}
          onMouseEnter={e => e.target.style.backgroundPosition = 'top left'}
          onMouseLeave={e => e.target.style.backgroundPosition = 'bottom right'}
          onClick={() => navigate("/BOrders")}>
          Orders
        </button>


        <button style={{
          margin: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#ff8a00',
          borderRadius: '30px',
          border: 'none',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease-in-out',
          backgroundImage: 'linear-gradient(to bottom right, #ff8a00, #ff6b00)',
          backgroundSize: '200% 200%',
          backgroundPosition: 'bottom right',
          cursor: 'pointer'
        }}
          onMouseEnter={e => e.target.style.backgroundPosition = 'top left'}
          onMouseLeave={e => e.target.style.backgroundPosition = 'bottom right'}
          onClick={() => navigate("/buyer_navpage")}>
          Add Project
        </button>
        <button style={{
          margin: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#ff3b3b',
          borderRadius: '30px',
          border: 'none',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease-in-out',
          backgroundImage: 'linear-gradient(to bottom right, #ff3b3b, #e62222)',
          backgroundSize: '200% 200%',
          backgroundPosition: 'bottom right',
          cursor: 'pointer'
        }}
          onMouseEnter={e => e.target.style.backgroundPosition = 'top left'}
          onMouseLeave={e => e.target.style.backgroundPosition = 'bottom right'}
          onClick={handleDeleteUser}>
          Delete your profile
        </button>
        <button style={{
          margin: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#9932CC',
          borderRadius: '30px',
          border: 'none',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease-in-out',
          backgroundImage: 'linear-gradient(to bottom right, #9932CC, #8B008B)',
          backgroundSize: '200% 200%',
          backgroundPosition: 'bottom right',
          cursor: 'pointer'
        }}
          onMouseEnter={e => e.target.style.backgroundPosition = 'top left'}
          onMouseLeave={e => e.target.style.backgroundPosition = 'bottom right'}
          onClick={() => navigate("/faq")}>
          FAQ
        </button>



        <button 
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: "#00b894",
          borderRadius: "30px",
          border: "none",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease-in-out",
          backgroundImage: "linear-gradient(to bottom right, #00b894, #00a37a)",
          backgroundSize: "200% 200%",
          backgroundPosition: "bottom right",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => e.target.style.backgroundPosition = "top left"}
        onMouseLeave={(e) => e.target.style.backgroundPosition = "bottom right"}
        onClick={handleInviteFriend}
        >
        Invite a friend
        </button>
        {inviteLink && (
        <div style={{ margin: '10px', fontSize: '14px' }}>
        Share this link with your friends: <a href={inviteLink}>{inviteLink}</a>
        </div>
      )}

      </div>
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
        backgroundColor:'antiquewhite',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'

      }}>
        {userData && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#f1f1f1',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '24px',
              marginBottom: '20px',
              color: '#333'
            }}>
              <strong>Recruiter Details:</strong>
            </h2>
            <div className="details-container">
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
            <p><strong>Profile Pic:</strong> {userData.profile_pic }</p>
            <p><strong>Language:</strong> {userData.language }</p>
            <p><strong>Occupation:</strong> {userData.occupation }</p>
            <p><strong>Project Area:</strong> { userData.project_area.join(", ")}</p>
            <p><strong>Project Area Details:</strong> {userData.project_area_details.join(", ")}</p>
            <p><strong>Documents:</strong> {userData.documents.join(", ") }</p>
            <p><strong>Skills:</strong> { userData.skills.join(", ")}</p>
            <p><strong>Proficiency:</strong> {userData.proficiency }</p>
            <p><strong>Timeline:</strong> {userData.timeline}</p>
            <p><strong>Deadline:</strong> {userData.deadline}</p>
            <p><strong>Budget:</strong> {userData.budget}</p>
            </div>

          </div>
        )}
      </div>

    </div>
  );






};

export default BHomePage;

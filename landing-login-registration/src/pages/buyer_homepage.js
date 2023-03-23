// import React from 'react';
// import { useNavigate } from 'react-router-dom';


// const BHomePage = () => {
	
// const navigate = useNavigate();
// return (
// 	<div>
// 	<h1>Prashant Home Page for Buyer</h1>
// 	<button onClick={() => navigate("/buyer_search")}> Search work</button>
// 	</div>
// );
// };

// export default BHomePage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function BHomePage() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2196f3',
    padding: '10px 20px',
    color: 'white',
  };



  const linkStyle = {
    color: 'white',
    fontSize: '18px',
    textDecoration: 'none',
    marginRight: '20px',
    transition: 'all 0.3s ease',
  };

  const linkHoverStyle = {
    cursor: 'pointer',
    transform: 'scale(1.1)',
  };

  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    setLoading(true);
    const response = await fetch('https://freelancedit.azurewebsites.net/docs');
    const data = await response.json();
    setLoading(false);
    setProjects(data);
  };

  const deleteProject = async (emailId) => {
    const response = await fetch(`https://freelancedit.azurewebsites.net/docs/${emailId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={navStyle}>
        <div style={{ fontSize: '24px' }}>Freelanced</div>

        <div className="nav-links">
          <ul>
            <li>
              <Link to="/buyer_search" style={linkStyle} activeStyle={linkHoverStyle}>
                Search
              </Link>
            </li>
            <li>
              <Link to="/faq" style={linkStyle} activeStyle={linkHoverStyle}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/chat" style={linkStyle} activeStyle={linkHoverStyle}>
                Chat
              </Link>
            </li>
            <li>
              <Link to="/login" style={linkStyle} activeStyle={linkHoverStyle}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    {/* Body Content */}
      <div className="body-content">
        <h1>Recruiter Homepage</h1>
        <p>As a recruiter, you play a crucial role in connecting businesses with the talented professionals they need to thrive. Our platform is designed to help you streamline your recruiting efforts and connect you with a diverse pool of highly skilled freelancers from around the world.</p>
        <p>With our user-friendly interface and powerful search tools, you can easily find and engage top talent in a variety of fields, from web development to graphic design, writing to translation, and much more. Our platform also allows you to manage your recruitment pipeline, track candidate progress, and collaborate with other recruiters on your team.</p>
        <p>We know that your time is valuable, which is why we've designed our platform to be efficient and effective. With our help, you can focus on what you do best: finding the right talent for your clients. So, let's get started and help you find the perfect freelancer for your next project!</p>
    {/* Buttons */}
    <div className="buttons">
      <Link to="/buyer-update-project">
        <button>Update Present Project</button>
      </Link>
	  <Link to="/buyer-delete-project">
		<button onClick={() => deleteProject(1)}>Delete Project</button></Link>
		<Link to="/buyer-view-allfreelancers">
      <button onClick={() => fetchProjects()}>All Freelancers</button></Link>
    </div>
    {/*Ankur Paaji is this right way to call All Projects should i Use Object ID?*/}
    {loading && <p>Loading...</p>}
    {projects.length > 0 && (
      <div>
        <h2>All Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* Back Button */}
    <div className="back-button">
      <Link to="/buyer_homepage">
        <button>Back to Buyer Homepage</button>
      </Link>
    </div>
  </div>
</div>
);
}

export default BHomePage;
       

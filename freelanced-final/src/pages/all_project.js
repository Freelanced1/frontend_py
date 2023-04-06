import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllProjects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://freelancedit.azurewebsites.net/docs/allProject')
      .then(response => {
        console.log(response.data);
        setProjects(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const backButtonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
        <h1 style={{ marginBottom: '20px' }}>All Projects</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {projects.map((project, index) => (
              <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                <h2>{project.project_area}</h2>
                <p><strong>Language:</strong> {project.language}</p>
                <p><strong>Deadline:</strong> {project.deadline}</p>
                <p><strong>Budget:</strong> {project.budget}</p>
              </div>
            ))}
          </>
        )}
        <button type="button" onClick={() => window.history.back()} style={backButtonStyle}>Back to Buyer Homepage</button>
      </div>
    </div>
  );
}

export default AllProjects;

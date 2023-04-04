import React, { useState } from 'react';
import axios from 'axios';

function DeleteProject() {
  const [email, setEmail] = useState('');

  const handleDelete = () => {
    // Check if user exists
    axios.get(`https://freelancedit.azurewebsites.net/docs/userexists/${email}`)
      .then(response => {
        if (response.data.exists) {
          // Delete project
          axios.delete(`https://freelancedit.azurewebsites.net/docs/DeleteUserMongo/${email}`)
            .then(response => {
              console.log(response.data);
              alert("Deleted Successfully!!!!!!");
              // Redirect to Buyer Homepage
              window.location.href = '/buyer-homepage';
            })
            .catch(error => {
              console.log(error);
              alert("An error occurred while deleting the project. Please try again later.");
            });
        } else {
          alert("Please enter a valid email address.");
        }
      })
      .catch(error => {
        console.log(error);
        alert("An error occurred while checking if the user exists. Please try again later.");
      });
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#f1f1f1',
    margin: '10px 0',
    width: '100%',
    boxSizing: 'border-box',
  };

  const submitStyle = {
    backgroundColor: '#f44336',
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
        <h1 style={{ marginBottom: '20px' }}>Delete Project</h1>
        <form>
          <div>
            <label htmlFor="email">Buyer Email:</label>
            <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
          </div>
          <button type="button" onClick={handleDelete} style={submitStyle}>Delete Project</button>
        </form>
      </div>
    </div>
  );
}

export default DeleteProject;

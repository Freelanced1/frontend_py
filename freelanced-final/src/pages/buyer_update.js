import React, { useState } from 'react';
import axios from 'axios';

function UpdateProject() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [language, setLanguage] = useState('');
  const [occupation, setOccupation] = useState('');
  const [projectArea, setProjectArea] = useState([]);
  const [projectAreaDetails, setProjectAreaDetails] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [skills, setSkills] = useState([]);
  const [proficency, setProficency] = useState([]);
  const [timeline, setTimeline] = useState(true);
  const [deadline, setDeadline] = useState('');
  const [budget, setBudget] = useState('');

  const handleUpdate = () => {
    const payload = {
      email,
      phone,
      profile_pic: profilePic,
      language,
      occupation,
      project_area: projectArea,
      project_area_details: projectAreaDetails,
      documents,
      skills,
      proficency,
      timeline,
      deadline,
      budget,
    };

    axios.post('https://freelancedit.azurewebsites.net/docs/updateRecruitermongo', payload)
      .then(response => {
        console.log(response.data);
        // Redirect to Buyer Homepage
        window.location.href = '/buyer-homepage';
      })
      .catch(error => {
        console.log(error);
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
        <h1 style={{ marginBottom: '20px' }}>Update Project</h1>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="profile-pic">Profile Picture:</label>
            <input type="text" id="profile-pic" value={profilePic} onChange={e => setProfilePic(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="language">Language:</label>
            <input type="text" id="language" value={language} onChange={e => setLanguage(e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="occupation">Occupation:</label>
                <input type="text" id="occupation" value={occupation} onChange={e => setOccupation(e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="project-area">Project Area:</label>
                <input type="text" id="project-area" value={projectArea} onChange={e => setProjectArea(e.target.value.split(','))} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="project-area-details">Project Area Details:</label>
                <input type="text" id="project-area-details" value={projectAreaDetails} onChange={e => setProjectAreaDetails(e.target.value.split(','))} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="documents">Documents:</label>
                <input type="text" id="documents" value={documents} onChange={e => setDocuments(e.target.value.split(','))} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="skills">Skills:</label>
                <input type="text" id="skills" value={skills} onChange={e => setSkills(e.target.value.split(','))} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="proficency">Proficency:</label>
                <input type="text" id="proficency" value={proficency} onChange={e => setProficency(e.target.value.split(','))} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="timeline">Timeline:</label>
                <input type="checkbox" id="timeline" checked={timeline} onChange={e => setTimeline(e.target.checked)} style={{ margin: '10px' }} />
              </div>
              <div>
                <label htmlFor="deadline">Deadline:</label>
                <input type="date" id="deadline" value={deadline} onChange={e => setDeadline(e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="budget">Budget:</label>
                <input type="text" id="budget" value={budget} onChange={e => setBudget(e.target.value)} style={inputStyle} />
              </div>
              <button type="button" onClick={handleUpdate} style={submitStyle}>Update Project</button>
            </form>
          </div>
        </div>
      );
    }
    
    export default UpdateProject;
    
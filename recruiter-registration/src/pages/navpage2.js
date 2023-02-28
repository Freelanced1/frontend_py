import React, { useState } from 'react';
import './App.css';
import jobdesc from './jobdesc.gif';
import { useNavigate } from 'react-router-dom';

function TaskForm() {
  const [projectArea, setprojectArea] = useState("");
  const [description, setDescription] = useState("");
  const [skillset, setSkillset] = useState("");
  const [proficiency, setProficiency] = useState("");
  const [file, setFile] = useState(null);

  const ProjectOptions = ['Software Engineer', 'Web Developer', 'Mobile App Developer', 'Data Scientist', 'Artficial Intelligence', 'Cyber Security', 'UI/UX Designer', 'Graphic Designer', 'Data Entry', 'Content Writer', 'Copywriter', 'Social Media Manager', 'SEO Specialist', 'Digital Marketer', 'Video Editor', 'other']

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you could send the form data to an API or perform other actions with it
    console.log({ projectArea, description, skillset, proficiency });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{marginBottom:'10px', marginTop:"20px"}} htmlFor="projectArea"> Select the Area that Best Describes your Project: <span className="required">*</span></label>
          <select value={projectArea} onChange={(e) => setprojectArea(e.target.value)}>
            <option value="">--Please choose an option--</option>
            {ProjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
      <label style={{marginTop:'30px'}}>
        Project Details:<span className="required">*</span></label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <div>
        <label style={{marginTop:'30px'}} htmlFor="file">Upload Relevant Documents:</label>
        <input type="file" id="file" multiple onChange={handleFileChange} />
      </div>

      <label style={{marginTop:'30px'}}>
        List Specific Skills Required if any:</label>
        <input
          type="text"
          value={skillset}
          onChange={(event) => setSkillset(event.target.value)}
        />

      <label>
        Experience Level Required:<span className="required">*</span></label>
        <select value={proficiency} onChange={(event) => setProficiency(event.target.value)}>
          <option value="">Select level</option>
          <option value="basic">Basic</option>
          <option value="intermediate">Intermediate</option>
          <option value="experienced">Experienced</option>
        </select>
      <button type="submit" onClick={() => navigate("/navpage3")} style={{ marginTop: '70px', marginLeft: 'auto', display: 'block', width: '150px', height: '40px', backgroundColor: '#62cdbf' }}>Save & Continue</button>
    </form>
  );
}

const Image = () => {
  return (
    <div className='gif' style={{marginTop: '40px'}}>
      <img src={jobdesc} alt="job description" />
    </div>
  );
};



const NavPage2 = () => {
  return (
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>Project Details</h1>
        <p className='text'>We're eager to hear about your exciting project! </p>
        <p className='text'>Could you share some details about your requirements? </p>
        <p className='text'> We're all ears and can't wait to connect you with the perfect freelancer to bring your project to life! </p> <Image /></div>
      <TaskForm/>
    </div>
    </div>

  );
};

export default NavPage2;


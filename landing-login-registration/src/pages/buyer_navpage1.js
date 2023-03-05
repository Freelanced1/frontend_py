import React, { useState } from 'react';
import './App.css';
import freelancer from './freelancer.gif';
import { useNavigate } from 'react-router-dom';



function RegistrationForm() {  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [occupationArea, setOccupationArea] = useState('');

  const occupationOptions = ['Software Engineer', 'Web Developer', 'Mobile App Developer', 'Data Scientist', 'Artficial Intelligence', 'Cyber Security', 'UI/UX Designer', 'Graphic Designer', 'Data Entry', 'Content Writer', 'Copywriter', 'Social Media Manager', 'SEO Specialist', 'Digital Marketer', 'Video Editor', 'other']

  const navigate = useNavigate();
  
  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && profilePicture && description && occupationArea && language) {
    // Send form data to server
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('profilePicture', profilePicture);
    formData.append('description', description);
    formData.append('language', language);
    formData.append('occupationArea',occupationArea);

    // Send formData object to server using fetch or axios
    console.log(formData);
    navigate('/buyer_navpage2');
  } else {
    alert('Please fill in all required fields.');
  }
};

  return (
    <form className='form-main' onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ marginRight: '50px' }}>
          <label htmlFor="firstName">First Name:<span className="required">*</span></label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" />
        </div>
        <div style={{ marginRight: '50px' }}>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" />
        </div>
      </div>
      <div>
        <label htmlFor="profilePicture">Profile Picture:<span className="required">*</span></label>
        <input type="file" id="profilePicture" onChange={handleFileChange} />
      </div>
      <div style={{marginBottom:'30px'}}>
        <label htmlFor="description">Breif Description:<span className="required">*</span></label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter a breif description about your proffessional journey, interesting projects and skills" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <div style={{ marginRight: '50px' }}>
          <label htmlFor="occupationArea"> Your Occupation Area: <span className="required">*</span></label>
          <select value={occupationArea} onChange={(e) => setOccupationArea(e.target.value)}>
            <option value="">--Please choose an option--</option>
            {occupationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginRight: '50px', marginTop: '0px'}}>
        <label htmlFor="language">Preferred Language:<span className="required">*</span></label>
        <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)} placeholder="Select you preferred language" >
          <option value="">-- Please Select --</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
        </select>
        </div>
      </div>

      <button type="submit" style={{ marginTop: '100px', marginLeft: 'auto', }}>Save & Continue</button>
    </form>
  );
}

const Image = () => {
  return (
    <div className='gif'>
      <img src={freelancer} alt="freelancer" />
    </div>
  );
};



const BNavPage1 = () => {
  return (
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>About you</h1>
        <p className='text'>We're excited to learn more about you! Please share some details about yourself  </p>
        <p className='text'>so we can get started on matching you with the perfect freelancer for your needs.</p> <Image /></div>
      <RegistrationForm />
    </div>
    </div>

  );
};

export default BNavPage1;


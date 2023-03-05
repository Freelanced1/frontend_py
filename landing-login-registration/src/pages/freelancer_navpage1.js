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
  const [yearsOfExperience, setyearsOfExperience] = useState('');
  const [country, setCountry] = useState('');
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const [yearCompleted, setYearCompleted] = useState('');

  const occupationOptions = ['Software Engineer', 'Web Developer', 'Mobile App Developer', 'Data Scientist', 'Artficial Intelligence', 'Cyber Security', 'UI/UX Designer', 'Graphic Designer', 'Data Entry', 'Content Writer', 'Copywriter', 'Social Media Manager', 'SEO Specialist', 'Digital Marketer', 'Video Editor', 'other']
  const countries = [    "Australia",    "Brazil",    "Canada",    "China",    "France",    "Germany",    "India",    "Indonesia",    "Italy",    "Japan",    "Mexico",    "Netherlands",    "Russia",    "Saudi Arabia",    "South Africa",    "South Korea",    "Spain",    "Turkey",    "United Kingdom",    "United States", "other"];
  const degrees = [    "Associate's degree",    "Bachelor's degree",    "Master's degree",    "Doctoral degree",    "Professional degree",    "Honorary degree",    "Certificate",    "Diploma",    "Postgraduate diploma",    "Advanced diploma",    "Advanced Certificate",    "Vocational qualification", "other"];
  const years =[2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003]

  const navigate = useNavigate();
  
  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
if (!firstName || !profilePicture || !description || !language || !occupationArea) {
  alert('Please fill all required fields');
  return;
  }
  // Send form data to server
  const formData = new FormData();
  formData.append('firstName', firstName);
  formData.append('lastName', lastName);
  formData.append('profilePicture', profilePicture);
  formData.append('description', description);
  formData.append('language', language);
  formData.append('occupationArea',occupationArea);
  formData.append('yearsOfExperience',yearsOfExperience);
  formData.append('country',country);
  formData.append('university',university);
  formData.append('degree',degree);
  formData.append('yearCompleted',yearCompleted);


    // Send formData object to server using fetch or axios
    console.log(formData);
    navigate("/freelancer_navpage2");
  };

  return (
    <form className='form-main' onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ marginRight: '30px' }}>
          <label htmlFor="firstName">First Name:<span className="required">*</span></label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" />
        </div>
        <div style={{ marginRight: '30px' }}>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" />
        </div>
        <div>
        <label htmlFor="profilePicture">Profile Picture:<span className="required">*</span></label>
        <input type="file" id="profilePicture" onChange={handleFileChange} />
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div style={{marginBottom:'30px'}}>
        <label htmlFor="description">Breif Description:<span className="required">*</span></label>
        <textarea style={{width:'450px'}} id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter a breif description about your proffessional journey, interesting projects and skills" />
      </div>
     
      <div >
        <label  style={{marginLeft:'50px'}} htmlFor="language">Preferred Language:<span className="required">*</span></label>
        <select  style={{marginLeft:'50px'}} id="language" value={language} onChange={(e) => setLanguage(e.target.value)} placeholder="Select you preferred language" >
          <option value="">-- Please Select --</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
        </select>
      </div>
    </div>
      

    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <div >
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
      <div style={{ marginLeft: '30px', marginTop: '45px'}}>
          <label htmlFor="yearsOfExperience"> Years of Experience: <span className="required">*</span></label>
          <input
            type="number"
            value={yearsOfExperience}
            onChange={(e) => setyearsOfExperience(e.target.value)} placeholder="Enter years of experience"
          />
        </div>
      </div>

      
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <label> University:  <span className="required">*</span></label>
            <input style={{marginBottom: '50px' }} type="text" value={university} onChange={(event) => setUniversity(event.target.value)} placeholder="Enter University"/>
        </div>
        <div>
          <label style={{marginLeft: '30px' }}> Degree:  <span className="required">*</span></label>
            <select style={{marginLeft: '30px' }} value={degree} onChange={(event) => setDegree(event.target.value)}>
              <option value="">-- Select Degree --</option>
              {degrees.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
        </div>

        <div style={{marginLeft: '30px' }}>
        <label> Country: <span className="required">*</span> </label>
            <select value={country} onChange={(event) => setCountry(event.target.value)}>
              <option value="">-- Select Country --</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
        </div>

        <div style={{marginLeft:'30px'}}>
        <label> Year Completed:  <span className="required">*</span></label>
        <select value={yearCompleted} onChange={(event) => setYearCompleted(event.target.value)}>
          <option value="">-- Select Year --</option>
          {years.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      </div>

      <button type="submit" >Save & Continue</button>
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



const FNavPage1 = () => {
  return (
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>About you</h1>
        <p className='text'>Please provide some information about yourself that will be displayed on your public profile. </p>
        <p className='text'>This will help prospective buyers become more familiar with you.</p> <Image /></div>
      <RegistrationForm />
    </div>
    </div>

  );
};

export default FNavPage1;


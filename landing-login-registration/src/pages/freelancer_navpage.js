import React, { useState } from 'react';
import './App.css';
import freelancer from './freelancer.gif';
import freelancer_skills from './freelancer_skills.gif';
import freelancer_uploads from './freelancer_uploads.gif';
import freelancer_security from './freelancer_security.gif';
import freelancer_finish from './freelancer_finish.gif';
import { useNavigate } from 'react-router-dom';

var newuser_formData = new FormData();
var newusermongo_formData = new FormData();

export function FNavPage1() {  
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
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>About you</h1>
        <p className='text'>Please provide some information about yourself that will be displayed on your public profile. </p>
        <p className='text'>This will help prospective buyers become more familiar with you.</p>
        <div className='gif'>
          <img src={freelancer} alt="freelancer" />
        </div>
        </div>
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
    </div>
    </div>
  );
}


export function FNavPage2() {
  var [skills, setSkills] = useState([{ name: "", level: "" }]);

  var navigate = useNavigate();
  
  var handleSkillNameChange = (event, index) => {
    var newSkills = [...skills];
    newSkills[index].name = event.target.value;
    setSkills(newSkills);
  };

  var handleSkillLevelChange = (event, index) => {
    var newSkills = [...skills];
    newSkills[index].level = event.target.value;
    setSkills(newSkills);
  };

  var handleAddSkill = () => {
    setSkills([...skills, { name: "", level: "" }]);
  };

  var handleRemoveSkill = (index) => {
    var newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  var handleSubmit = (event) => {
    event.preventDefault();
     // check if all fields are filled
     var filledFields = skills.every(skill => skill.name && skill.level);
     if (!filledFields) {
       alert("Please fill all fields before submitting.");
       return;
     }
     
     console.log(skills);
     // submit form data to server
     navigate("/freelancer_navpage3");
   };

  return (
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>Skills</h1>
        <p className='text'>Now is your opportunity to showcase your expertise to potential buyers by highlighting your  </p>
        <p className='text'> strengths and impress them by providing a detailed description of your skills.</p> 
        <div className='gif' style={{marginTop: '40px'}}>
      <img src={freelancer_skills} alt="freelancer skills" />
    </div>
    </div>
    <form className='form-main' onSubmit={handleSubmit}>
      {skills.map((skill, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
			<div style={{ marginRight: '50px' }}>
				<label htmlFor={`skill-name-${index}`}>Skill Name:<span className="required">*</span></label>
				<input style={{marginBottom: '50PX'}}
					type="text"
					id={`skill-name-${index}`}
					value={skill.name}
					onChange={(event) => handleSkillNameChange(event, index)} placeholder="Enter your skills" required
				/>
			</div>
			<div style={{ marginRight: '50px' }}>
				<label htmlFor={`skill-level-${index}`}> Proficiency Level: <span className="required">*</span></label>
				<select
					id={`skill-level-${index}`}
					value={skill.level}
					onChange={(event) => handleSkillLevelChange(event, index)}
					required
					style={{ marginLeft: '10px', marginRight: '10px' }}
				>
					<option value="">Select proficiency level</option>
					<option value="Beginner">Beginner</option>
					<option value="Intermediate">Intermediate</option>
					<option value="Advanced">Advanced</option>
					<option value="Expert">Expert</option>
				</select>
			</div>
			
			<button type="button" style={{marginTop:'20px', height: '50px', marginRight:'20px'}} onClick={handleAddSkill}>
        	Add
      	</button>
		
		{skills.length > 1 && (
			<button type="button" style={{marginTop:'20px',height: '50px'}} onClick={() => handleRemoveSkill(index)}>
				Remove
			</button>
		)}

        </div>
      ))}

      

      <button type="submit"  >Save & Continue</button>
    </form>
    </div>
    </div>
  );
}

export function FNavPage3() {
  var [file, setFile] = useState(null);
  var [websiteLink, setWebsiteLink] = useState('');
  var [certifications, setCertifications] = useState('');

  var navigate = useNavigate();
  var handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  var handleWebsiteChange = (event) => {
    setWebsiteLink(event.target.value);
  };

  var handleCertificationsChange = (event) => {
    setCertifications(event.target.value);
  };

  var handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission (e.g. upload file and submit data to server)
  };

  return (
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>Uploads & Links</h1>
        <p className='text'>Time to showoff what you're capable of! Upload a work sample, include a link to your</p>
        <p className='text'>  amazing website/portfolio, and let us know about any impressive certifications you've earned.  </p>
        <div className='gif' style={{marginTop: '0px'}}>
          <img src={freelancer_uploads} alt="freelancer uploads" />
        </div>
        </div>
    <form className='form-main' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">Upload Work Samples:</label>
        <input type="file" id="file" multiple onChange={handleFileChange} />
      </div>
      <div>
        <label htmlFor="website">Website/Portfolio Link:</label>
        <input style={{marginTop:'50px'}}type="text" id="website" value={websiteLink} onChange={handleWebsiteChange} placeholder="Enter website or portfolio link"/>
      </div>
      <div>
        <label htmlFor="certifications">Certifications:</label>
        <input style={{marginTop:'50px'}} type="text" id="certifications" value={certifications} onChange={handleCertificationsChange} placeholder="Enter your certifications"/>
      </div>
      <button style={{marginTop:'50px'}} type="submit" onClick={() => navigate("/freelancer_navpage4")} >Save & Continue</button>
    </form>
    </div>
    </div>
  );
}

export function FNavPage4() {
  var [email, setEmail] = useState('');
  var [phone, setPhone] = useState('');
  var [emailError, setEmailError] = useState(null);
  var [phoneError, setPhoneError] = useState(null);

  var navigate = useNavigate();

  var handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(null);
  };

  var handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setPhoneError(null);
  };

  var handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    // validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }
    // validate phone number
    if (!phone || !/^\d{10}$/.test(phone)) {
      setPhoneError('Please enter a valid 10-digit phone number');
      isValid = false;
    }
    // navigate to next page if valid
    if (isValid) {
		navigate('/freelancer_navpage5');
	  }
	};

  return (
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>Security</h1>
        <p className='text'>Keep your private contact information safe and secure</p>
        <p className='text'>  Rest assured that your email and phone number will never be shared with potential buyers </p>
        <div className='gif' style={{height:'150px'}}>
    `    <img style={{height:'400px', marginLeft: '120px'}} src={freelancer_security} alt="freelancer security" />
        </div>
        </div>
    <form className='form-main' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:<span className="required">*</span></label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Enter your email id"/>
        {emailError && <p>{emailError}</p>}
      </div>
      <div>
        <label htmlFor="phone">Phone Number:<span className="required">*</span></label>
        <input style={{marginTop:'50px'}} type="tel" id="phone" value={phone} onChange={handlePhoneChange}  placeholder="Enter your phone number"/>
        {phoneError && <p>{phoneError}</p>}
      </div>
      <button type="submit" style={{ marginTop: '50px'}}>Submit</button>
    </form>
    </div>
    </div>
  );
}

export function FNavPage5 () {
  var navigate = useNavigate();

  var handleSubmit = (event) => {
    event.preventDefault();
      fetch('https://freelancedbackend.azurewebsites.net/newusermongo', {
        method: 'POST',
        body: newusermongo_formData
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        console.log(data);
        navigate('/');
      })

      .catch(error => {
        console.error('There was a problem submitting the form', error);
      });

      fetch('https://freelancedbackend.azurewebsites.net/newuser', {
        method: 'POST',
        body: newuser_formData
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        console.log(data);
        navigate('/');
      })

      .catch(error => {
        console.error('There was a problem submitting the form', error);
      });
};

    return (
      <div className='flex-container'>
          <div>
            <img style={{height:'400px', marginLeft: '10px'}} src={freelancer_finish} alt="freelancer finish" />
            </div>
          <div>
              <h1 className='heading'>Thank You!</h1>
              <p className='text'>Thank you for taking the time to fill out the form! We've saved your information and will keep it on file. </p>
              <p className='text'>If we find a buyer that matches your skills and experience, we'll be in touch!</p>
              <button type="submit" onClick={() => navigate("/")} style={{ marginLeft:"50px", marginTop: '50px' }}>Finish</button>
          </div> 
      </div>
  
    );
  };

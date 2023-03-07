import React, { useState } from 'react';
import './App.css';
import freelancer from './freelancer.gif';
import jobdesc from './jobdesc.gif';
import budget_gif from './budget.gif';
import freelancer_security from './freelancer_security.gif';
import freelancer_finish from './freelancer_finish.gif';
import { useNavigate } from 'react-router-dom';

var newrecruiter_formData = new FormData();
var newrecruitermongo_formData = new FormData();

export function BNavPage1() {  
  var [firstName, setFirstName] = useState('');
  var [lastName, setLastName] = useState('');
  var [profilePicture, setProfilePicture] = useState(null);
  var [description, setDescription] = useState('');
  var [language, setLanguage] = useState('');
  var [occupationArea, setOccupationArea] = useState('');

  var occupationOptions = ['Software Engineer', 'Web Developer', 'Mobile App Developer', 'Data Scientist', 'Artficial Intelligence', 'Cyber Security', 'UI/UX Designer', 'Graphic Designer', 'Data Entry', 'Content Writer', 'Copywriter', 'Social Media Manager', 'SEO Specialist', 'Digital Marketer', 'Video Editor', 'other']

  var navigate = useNavigate();
  
  var handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  var handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && profilePicture && description && occupationArea && language) {
      // Send form data to server
      newrecruiter_formData.append('firstName', firstName);
      newrecruiter_formData.append('lastName', lastName);

      newrecruitermongo_formData.append('profile_pic',profilePicture);
      newrecruitermongo_formData.append('language',language);
      newrecruitermongo_formData.append('occupation',occupationArea);      

      navigate('/buyer_navpage2');    
    } 
    else {
      alert('Please fill in all required fields.');
    }
  };
  

  return (
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>About you</h1>
        <p className='text'>We're excited to learn more about you! Please share some details about yourself  </p>
        <p className='text'>so we can get started on matching you with the perfect freelancer for your needs.</p> 
        <div className='gif'>
          <img src={freelancer} alt="freelancer" />
        </div>
        </div>
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
        <input style={{marginTop:'50px'}} type="file" id="profilePicture" onChange={handleFileChange} />
      </div>
      <div style={{marginBottom:'30px'}}>
        <label htmlFor="description">Breif Description:<span className="required">*</span></label>
        <textarea style={{marginTop:'50px'}} id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter a breif description about your proffessional journey, interesting projects and skills" />
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
    </div>
    </div>
  );
}

export function BNavPage2() {
  var [projectArea, setprojectArea] = useState("");
  var [description, setDescription] = useState("");
  var [skillset, setSkillset] = useState("");
  var [proficiency, setProficiency] = useState("");
  var [file, setFile] = useState(null);

  var ProjectOptions = ['Software Engineer', 'Web Developer', 'Mobile App Developer', 'Data Scientist', 'Artficial Intelligence', 'Cyber Security', 'UI/UX Designer', 'Graphic Designer', 'Data Entry', 'Content Writer', 'Copywriter', 'Social Media Manager', 'SEO Specialist', 'Digital Marketer', 'Video Editor', 'other']

  var navigate = useNavigate();

  var handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  var handleSubmit = (event) => {
    event.preventDefault(); if (!projectArea || !description || !proficiency) {
      alert('Please fill in all required fields.');
      return;
    }
  
    // Here, you could send the form data to an API or perform other actions with it
    newrecruitermongo_formData.append('project_area',projectArea);
    newrecruitermongo_formData.append('project_area_details',description);
    newrecruitermongo_formData.append('documents',file);
    newrecruitermongo_formData.append('skillset', skillset);
    newrecruitermongo_formData.append('proficency', proficiency);
  
    navigate("/buyer_navpage3");
  };

  return (
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>Project Details</h1>
        <p className='text'>We're eager to hear about your exciting project! </p>
        <p className='text'>Could you share some details about your requirements? </p>
        <p className='text'> We're all ears and can't wait to connect you with the perfect freelancer to bring your project to life! </p> 
        <div className='gif' style={{marginTop: '40px'}}>
          <img src={jobdesc} alt="job description" />
        </div>
        </div>
    <form className='form-main' onSubmit={handleSubmit}>
      <label style={{marginBottom:'10px', marginTop:"20px"}} htmlFor="projectArea"> Select the Area that Best Describes your Project: <span className="required">*</span></label>
          <select value={projectArea} onChange={(e) => setprojectArea(e.target.value)}>
            <option value="">--Please choose an option--</option>
            {ProjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        <div>
      <label style={{marginTop:'30px'}}>
        Project Details:<span className="required">*</span></label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)} placeholder="Enter a detailed description of your project"
        /></div>
        <div>
        <label style={{marginTop:'30px'}} htmlFor="file">Upload Relevant Documents:</label>
        <input type="file" id="file" multiple onChange={handleFileChange} />
      </div>

      <label style={{marginTop:'30px', marginBottom:'30px'}}>
        List Specific Skills Required if any:</label>
        <input
          type="text"
          value={skillset}
          onChange={(event) => setSkillset(event.target.value)} placeholder="Enter any particular skills required"
        />
      <div>
      <label>
        Experience Level Required:<span className="required">*</span></label>
        <select value={proficiency} onChange={(event) => setProficiency(event.target.value)}>
          <option value="">Select level</option>
          <option value="basic">Basic</option>
          <option value="intermediate">Intermediate</option>
          <option value="experienced">Experienced</option>
        </select>
        </div>
      <button type="submit"  style={{ marginTop: '50px', marginLeft: 'auto'}}>Save & Continue</button>
    </form>
    </div>
    </div>
  );
}

export function BNavPage3() {
  var [timeline, setTimeline] = useState(null);
  var [deadline, setDeadline] = useState('');
  var [budget, setBudget] = useState(null);
  var [budgetValue, setBudgetValue] = useState('');

  var navigate = useNavigate();

  var handleTimelineChange = (option) => {
    setTimeline(option);
  };

  var handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  var handleBudgetChange = (option) => {
    setBudget(option);
  };

  var handleBudgetValueChange = (event) => {
    setBudgetValue(event.target.value);
  };

  var handleSubmit = (event) => {
    event.preventDefault();
    if (timeline && (timeline === 'flexible' || (timeline === 'deadline' && deadline))) {
      if (budget && (budget === 'flexible' || (budget === 'budget' && budgetValue))) {
        newrecruitermongo_formData.append('timeline', timeline);
        newrecruitermongo_formData.append('deadline', deadline);
        newrecruitermongo_formData.append('budget', budgetValue);
        navigate('/buyer_navpage4');
      } else {
        alert('Please fill in all required fields.');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>Budget & Timeline</h1>
        <p className='text'>Could you give us some details about your ideal timeline and budget? </p>
        <p className='text'>This will help us find the perfect freelancer who can work  within your parameters, </p> 
        <p className='text'>and deliver exceptional results!</p>
        <div className='gif' style={{marginTop: '0px'}}>
          <img src={budget_gif} alt="budget and timeline" />
        </div>
        </div>
    <form className='form-main' onSubmit={handleSubmit}>
      <div>
        <label>
          Timeline Requirements:<span className="required">*</span></label>
          <button style={{marginRight:'20PX'}}
            type="button"
            onClick={() => handleTimelineChange('flexible')}
            className={timeline === 'flexible' ? 'active' : ''}
          >
            Flexible
          </button>
          <button
            type="button" style={{marginRight:'20px'}}
            onClick={() => handleTimelineChange('deadline')}
            className={timeline === 'deadline' ? 'active' : ''}
          >
            Fixed Deadline
          </button>
        {timeline === 'deadline' && (
          <label> Deadline:<span className="required">*</span>
          <input style={{marginTop:'20PX', marginLeft:'20px'}}
            type="date"
            value={deadline}
            onChange={handleDeadlineChange}
            required
          />
          </label>
        )}
      </div>
      <div>
        <label style={{marginTop:'20px'}}>
          Budget Requirements:<span className="required">*</span></label>
          <button style={{marginRight:'20px', marginBottom:'20PX' }}
            type="button"
            onClick={() => handleBudgetChange('flexible')}
            className={budget === 'flexible' ? 'active' : ''}
          >
            Flexible
          </button>
          <button 
            type="button" style={{marginRight:'20px'}}
            onClick={() => handleBudgetChange('budget')}
            className={budget === 'budget' ? 'active' : ''}
          >
            Fixed Budget 
          </button>
          {budget === 'budget' && (
            <label >Budget:<span className="required">*</span>
            <input style={{marginLeft:'0px'}}
              type="number"
              value={budgetValue}
              onChange={handleBudgetValueChange} placeholder="Enter your budget"
              required
            />
            </label>
          )}

      </div>
      <button type="submit" style={{ marginTop: '30px' }}>Save & Continue</button>
    </form>
    </div>
    </div>
  );
}

export function BNavPage4() {
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
      newrecruiter_formData.append('email',email);
      newrecruitermongo_formData.append('email',email);
      newrecruitermongo_formData.append('phone',phone);
		navigate('/buyer_navpage5');
	  }
	};

  return (
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>Security</h1>
        <p className='text'>Keep your private contact information safe and secure</p>
        <p className='text'>  Rest assured that your email and phone number will never be shared with potential sellers</p> 
        <div className='gif' style={{height:'150px'}}>
		      <img style={{height:'400px', marginLeft: '120px'}} src={freelancer_security} alt="freelancer security" />
	      </div></div>
          <form className='form-main' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:<span className="required">*</span></label>
              <input style={{marginBottom:'30px'}} type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Enter your email id"/>
              {emailError && <p>{emailError}</p>}
            </div>
            <div>
              <label htmlFor="phone">Phone Number:<span className="required">*</span></label>
              <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} placeholder="Enter your phone number"/>
              {phoneError && <p>{phoneError}</p>}
            </div>
            <button type="submit" style={{ marginTop: '30px'}}>Submit</button>
          </form>
          </div>
    </div>
  );
}

export function BNavPage5() {
  var navigate = useNavigate();

  var handleSubmit = (event) => {
      event.preventDefault();
        fetch('https://freelancedbackend.azurewebsites.net/newrecruitermongo', {
          method: 'POST',
          body: newrecruitermongo_formData
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

        fetch('https://freelancedbackend.azurewebsites.net/docs#/newrecruiter', {
          method: 'POST',
          body: newrecruiter_formData
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
      <form className='form-main' onSubmit={handleSubmit}>
      <div className='flex-container'>
          <div>
          <img style={{height:'400px', marginLeft: '10px'}} src={freelancer_finish} alt="freelancer finish" />
          </div>
          <div>
              <h1 className='heading'>Thank You!</h1>
              <p className='text'>Thank you for taking the time to fill out our form and provide details about your project. </p>
              <p className='text'>We appreciate your interest in our services and are excited to serve your needs. </p>
              <p className='text'>Your input will help us tailor our solutions to meet your specific requirements. </p>
              <p className='text'>We will use this information to match you with the perfect freelancer as per your needs</p>
              <button type="submit" onClick={() => navigate("/")} style={{ marginTop: '30px', marginLeft: '50px'}}>Finish</button>
          </div> 
      </div>
      </form>
      );
    }

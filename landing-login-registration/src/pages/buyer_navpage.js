import React, { useState } from 'react';
import './App.css';
import freelancer from './freelancer.gif';
import jobdesc from './jobdesc.gif';
import budget_gif from './budget.gif';
import freelancer_security from './freelancer_security.gif';
import freelancer_finish from './freelancer_finish.gif';
import { useNavigate } from 'react-router-dom';

export function BNavPage1({BformData, BformData_mongo, handleChange_B, handleChange_B_mongo,addListItem_B}) {  

  var occupationOptions = ['Software Engineer', 'Web Developer', 'Mobile App Developer', 'Data Scientist', 'Artficial Intelligence', 'Cyber Security', 'UI/UX Designer', 'Graphic Designer', 'Data Entry', 'Content Writer', 'Copywriter', 'Social Media Manager', 'SEO Specialist', 'Digital Marketer', 'Video Editor', 'other']

  var navigate = useNavigate();

  var handleSubmit = (e) => {
    e.preventDefault();
    if (BformData.firstname && BformData_mongo.profile_pic && BformData_mongo.occupation && BformData_mongo.language) {
      // Send form data to server 

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
          <label>First Name:<span className="required">*</span></label>
          <input type="text" id="firstname" value={BformData.firstname} onChange={handleChange_B} placeholder="Enter your first name" />
        </div>
        <div style={{ marginRight: '50px' }}>
          <label >Last Name:<span className="required">*</span></label>
          <input type="text" id="lastname" value={BformData.lastname} onChange={handleChange_B} placeholder="Enter your last name" />
        </div>
      </div>
      <div>
        <label htmlFor="profilePicture">Profile Picture:<span className="required">*</span></label>
        <input style={{marginTop:'50px'}} type="file" id="profile_pic" value={BformData_mongo.profile_pic} onChange={handleChange_B_mongo} />
      </div>
      <div style={{marginBottom:'30px'}}>
        <label htmlFor="description">Breif Description:<span className="required">*</span></label>
        <textarea style={{marginTop:'50px'}} placeholder="Enter a breif description about your proffessional journey, interesting projects and skills" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <div style={{ marginRight: '50px' }}>
          <label htmlFor="occupationArea"> Your Occupation Area: <span className="required">*</span></label>
          <select id="occupation" value={BformData_mongo.occupation} onChange={handleChange_B_mongo}>
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
        <select id="language" value={BformData_mongo.language} onChange={handleChange_B_mongo} placeholder="Select you preferred language" >
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

export function BNavPage2({BformData, BformData_mongo, handleChange_B, handleChange_B_mongo,addListItem_B}) {

  var ProjectOptions = ['Software Engineer', 'Web Developer', 'Mobile App Developer', 'Data Scientist', 'Artficial Intelligence', 'Cyber Security', 'UI/UX Designer', 'Graphic Designer', 'Data Entry', 'Content Writer', 'Copywriter', 'Social Media Manager', 'SEO Specialist', 'Digital Marketer', 'Video Editor', 'other']

  var navigate = useNavigate();

  var handleSubmit = (event) => {
    event.preventDefault(); if (!BformData_mongo.project_area || !BformData_mongo.project_area_details || !BformData_mongo.proficency) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log(BformData_mongo.project_area)
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
          <select id="project_area" value={BformData_mongo.project_area} multiple={true} onChange={addListItem_B}>
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
        <textarea id="project_area_details"
          value={BformData_mongo.project_area_details}
          onChange={addListItem_B} placeholder="Enter a detailed description of your project"
        /></div>
        <div>
        <label style={{marginTop:'30px'}} htmlFor="file">Upload Relevant Documents:</label>
        <input type="file" id="documents" value={BformData_mongo.documents} multiple onChange={addListItem_B} />
      </div>

      <label style={{marginTop:'30px', marginBottom:'30px'}}>
        List Specific Skills Required if any:</label>
        <input
          type="text" id="skills"
          value={BformData_mongo.skills}
          onChange={addListItem_B} placeholder="Enter any particular skills required"
        />
      <div>
      <label>
        Experience Level Required:<span className="required">*</span></label>
        <select id="proficency" value={BformData_mongo.proficiency} onChange={addListItem_B}>
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

export function BNavPage3({BformData, BformData_mongo, handleChange_B, handleChange_B_mongo,addListItem_B}) {
  var [timeline, setTimeline] = useState(null);
  var [budget, setBudget] = useState(null);

  var navigate = useNavigate();

  var handleTimelineChange = (option) => {
    setTimeline(option);
  };

  var handleBudgetChange = (option) => {
    setBudget(option);
  };

  var handleSubmit = (event) => {
    event.preventDefault(); 
    if (timeline && (timeline === 'flexible' || (timeline === 'deadline' && BformData_mongo.deadline))) {
      if (budget && (budget === 'flexible' || (budget === 'budget' && BformData_mongo.budget))) {
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
            type="button" id='timeline' value={BformData_mongo.timeline}
            onClick={() => handleTimelineChange('flexible')}
            className={timeline === 'flexible' ? 'active' : ''}
          >
            Flexible
          </button>
          <button
            type="button" style={{marginRight:'20px'}} id='timeline' value={BformData_mongo.timeline}
            onClick={() => handleTimelineChange('deadline')}
            className={timeline === 'deadline' ? 'active' : ''}
          >
            Fixed Deadline
          </button>
        {timeline === 'deadline' && (
          <label> Deadline:<span className="required">*</span>
          <input style={{marginTop:'20PX', marginLeft:'20px'}} id='deadline' value={BformData_mongo.deadline}
            type="date"
            onChange={handleChange_B_mongo}
            required
          />
          </label>
        )}
      </div>
      <div>
        <label style={{marginTop:'20px'}}>
          Budget Requirements:<span className="required">*</span></label>
          <button style={{marginRight:'20px', marginBottom:'20PX' }} id='budget' value={BformData_mongo.budget}
            type="button"
            onClick={() => handleBudgetChange('flexible')}
            className={budget === 'flexible' ? 'active' : ''}
          >
            Flexible
          </button>
          <button 
            type="button" style={{marginRight:'20px'}} id='budget' value={BformData_mongo.budget}
            onClick={() => handleBudgetChange('budget')}
            className={budget === 'budget' ? 'active' : ''}
          >
            Fixed Budget 
          </button>
          {budget === 'budget' && (
            <label >Budget:<span className="required">*</span>
            <input style={{marginLeft:'0px'}} id='budget' value={BformData_mongo.budget}
              type="number"
              onChange={handleChange_B_mongo} placeholder="Enter your budget"
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

export function BNavPage4({BformData, BformData_mongo, handleChange_B, handleChange_B_mongo,addListItem_B}) {
  var [emailError, setEmailError] = useState(null);
  var [phoneError, setPhoneError] = useState(null);

  var navigate = useNavigate();

  var handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    // validate email
    if (!BformData_mongo.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(BformData_mongo.email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }
    // validate phone number
    if (!BformData_mongo.phone || !/^\d{10}$/.test(BformData_mongo.phone)) {
      setPhoneError('Please enter a valid 10-digit phone number');
      isValid = false;
    }
    // navigate to next page if valid
    if (isValid) {
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
              <input style={{marginBottom:'30px'}} type="email" id="email" value={BformData_mongo.email} onChange={handleChange_B_mongo} placeholder="Enter your email id"/>
              {emailError && <p>{emailError}</p>}
            </div>
            <div>
              <label htmlFor="phone">Phone Number:<span className="required">*</span></label>
              <input type="tel" id="phone" value={BformData_mongo.phone} onChange={handleChange_B_mongo} placeholder="Enter your phone number"/>
              {phoneError && <p>{phoneError}</p>}
            </div>
            <button type="submit" style={{ marginTop: '30px'}}>Submit</button>
          </form>
          </div>
    </div>
  );
}

export function BNavPage5({BformData, BformData_mongo, handleChange_B, handleChange_B_mongo,addListItem_B}) {
  var navigate = useNavigate();

  var handleSubmit = (event) => {
      event.preventDefault();
      BformData.email = BformData_mongo.email
      console.log()
      console.log(JSON.stringify(BformData_mongo))
      
        fetch('https://freelancedit.azurewebsites.net/newrecruitermongo/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(BformData_mongo)
        })
        .then(response => {
          if (response.ok) {
            console.log(response)
            return response.json();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then(data => {
          console.log('Data sent successfully');
          navigate('/buyer_homepage');
        })

        .catch(error => {
          console.error('There was a problem submitting the form', error);
        });
      
        
        fetch('https://freelancedit.azurewebsites.net/newrecruiter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(BformData)
        })
        .then(response => {
          if (response.ok) {
            console.log(response)
            return response.json();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then(data => {
          console.log('Data sent successfully');
          
          
          navigate('/buyer_homepage');
        })

        .catch(error => {
          console.error('There was a problem submitting the form', error);
        });
        
  };

    return (
      <form onSubmit={handleSubmit}>
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
              <button type="submit" onClick={handleSubmit} style={{ marginTop: '30px', marginLeft: '50px'}}>Finish</button>
          </div> 
      </div>
      </form>
      );
    }

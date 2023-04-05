import React, { useEffect, useState } from 'react';
import './App.css';
import freelancer from './freelancer.gif';
import freelancer_skills from './freelancer_skills.gif';
import freelancer_uploads from './freelancer_uploads.gif';
import freelancer_security from './freelancer_security.gif';
import freelancer_finish from './freelancer_finish.gif';
import { useNavigate } from 'react-router-dom';

export function FNavPage1({FformData, FformData_mongo, handleChange_F, handleChange_F_mongo,addListItem_F}) {  

  const occupationOptions = ['Software Engineer', 'Web Developer', 'Mobile App Developer', 'Data Scientist', 'Artficial Intelligence', 'Cyber Security', 'UI/UX Designer', 'Graphic Designer', 'Data Entry', 'Content Writer', 'Copywriter', 'Social Media Manager', 'SEO Specialist', 'Digital Marketer', 'Video Editor', 'other']
  const countries = [    "Australia",    "Brazil",    "Canada",    "China",    "France",    "Germany",    "India",    "Indonesia",    "Italy",    "Japan",    "Mexico",    "Netherlands",    "Russia",    "Saudi Arabia",    "South Africa",    "South Korea",    "Spain",    "Turkey",    "United Kingdom",    "United States", "other"];
  const degrees = [    "Associate's degree",    "Bachelor's degree",    "Master's degree",    "Doctoral degree",    "Professional degree",    "Honorary degree",    "Certificate",    "Diploma",    "Postgraduate diploma",    "Advanced diploma",    "Advanced Certificate",    "Vocational qualification", "other"];
  const years =[2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003]

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
if (!FformData.firstname || !FformData_mongo.profile_pic || !FformData_mongo.description || !FformData_mongo.language || !FformData_mongo.occupation) {
  alert('Please fill all required fields');
  return;
  }
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
          <input type="text" id="firstname" value={FformData.firstname} onChange={handleChange_F} placeholder="Enter your first name" />
        </div>
        <div style={{ marginRight: '30px' }}>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastname" value={FformData.lastName} onChange={handleChange_F} placeholder="Enter your last name" />
        </div>
        <div>
        <label htmlFor="profilePicture">Profile Picture:<span className="required">*</span></label>
        <input type="file" id="profile_pic" value={FformData_mongo.profi} onChange={handleChange_F_mongo} />
      </div>

    </div>

    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div style={{marginBottom:'30px'}}>
        <label htmlFor="description">Breif Description:<span className="required">*</span></label>
        <textarea style={{width:'450px'}} id="description" value={FformData_mongo.description} onChange={handleChange_F_mongo} placeholder="Enter a breif description about your proffessional journey, interesting projects and skills" />
      </div>
     
      <div >
        <label  style={{marginLeft:'50px'}} htmlFor="language">Preferred Language:<span className="required">*</span></label>
        <select  style={{marginLeft:'50px'}} id="language" value={FformData_mongo.language} onChange={handleChange_F_mongo} placeholder="Select you preferred language" >
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
        <select id="occupation" value={FformData_mongo.occupation} onChange={handleChange_F_mongo}>
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
            type="number" id="experience"
            value={FformData_mongo.experience}
            onChange={handleChange_F_mongo} placeholder="Enter years of experience"
          />
        </div>
      </div>

      
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <label> University:  <span className="required">*</span></label>
            <input style={{marginBottom: '50px' }} type="text" id="university" value={FformData_mongo.university} onChange={handleChange_F_mongo} placeholder="Enter University"/>
        </div>
        <div>
          <label style={{marginLeft: '30px' }}> Degree:  <span className="required">*</span></label>
            <select style={{marginLeft: '30px' }} id="uni_degree" value={FformData_mongo.uni_degree} onChange={handleChange_F_mongo}>
              <option value="">-- Select Degree --</option>
              {degrees.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
        </div>

        <div style={{marginLeft: '30px' }}>
        <label> Country: <span className="required">*</span> </label>
            <select id="uni_country" value={FformData_mongo.uni_country} onChange={handleChange_F_mongo}>
              <option value="">-- Select Country --</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
        </div>

        <div style={{marginLeft:'30px'}}>
        <label> Year Completed:  <span className="required">*</span></label>
        <select id="uni_grad_date" value={FformData_mongo.uni_grad_date} onChange={handleChange_F_mongo}>
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


export function FNavPage2({FformData, FformData_mongo, handleChange_F, handleChange_F_mongo,addListItem_F}) {
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
     const skillNames = skills.map(skill => skill.name);
     const skillLevels = skills.map(skill => skill.level);
     FformData_mongo.skills=skillNames;
     FformData_mongo.proficency=skillLevels;
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
w
        </div>
      ))}

      

      <button type="submit"  >Save & Continue</button>
    </form>
    </div>
    </div>
  );
}

export function FNavPage3({FformData, FformData_mongo, handleChange_F, handleChange_F_mongo,addListItem_F}) {

  var navigate = useNavigate();

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
        <input type="file" id="worksamples" value={FformData_mongo.certificates} multiple onChange={addListItem_F} />
      </div>
      <div>
        <label htmlFor="website">Website/Portfolio Link:</label>
        <input style={{marginTop:'50px'}}type="text" id="worksamples" value={FformData_mongo.worksamples} onChange={addListItem_F} placeholder="Enter website or portfolio link"/>
      </div>
      <div>
        <label htmlFor="certifications">Certifications:</label>
        <input style={{marginTop:'50px'}} type="text" id="certificates" value={FformData_mongo.certificates} onChange={addListItem_F} placeholder="Enter your certifications"/>
      </div>
      <button style={{marginTop:'50px'}} type="submit" onClick={() => navigate("/freelancer_navpage4")} >Save & Continue</button>
    </form>
    </div>
    </div>
  );
}

export function FNavPage4({FformData, FformData_mongo, handleChange_F, handleChange_F_mongo,addListItem_F}) {
  var [emailError, setEmailError] = useState(null);
  var [phoneError, setPhoneError] = useState(null);
  

  var navigate = useNavigate();

  var handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    // validate email
    if (!FformData_mongo.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(FformData_mongo.email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }
    // validate phone number
    if (!FformData_mongo.phone || !/^\d{10}$/.test(FformData_mongo.phone)) {
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
        <input type="email" id="email" value={FformData_mongo.email} onChange={handleChange_F_mongo} placeholder="Enter your email id"/>
        {emailError && <p>{emailError}</p>}
      </div>
      <div>
        <label htmlFor="phone">Phone Number:<span className="required">*</span></label>
        <input style={{marginTop:'50px'}} type="tel" id="phone" value={FformData_mongo.phone} onChange={handleChange_F_mongo}  placeholder="Enter your phone number"/>
        {phoneError && <p>{phoneError}</p>}
      </div>
      <button type="submit" style={{ marginTop: '50px'}}>Submit</button>
    </form>
    </div>
    </div>
  );
}

export function FNavPage5 ({FformData, FformData_mongo, handleChange_F, handleChange_F_mongo,addListItem_F}) {
  var navigate = useNavigate();

  const [fdata, setfdata] = useState("");
  const [responsemongo, setresponsemongo] =useState(false);
  const [responsepostgres, setresponsepostgres] = useState(false);

  useEffect(() => {
    console.log('responsemongo:', responsemongo);
    console.log('responsepostgres:', responsepostgres);
    if (responsemongo && responsepostgres) {
      console.log("moving to homepage");
      navigate('/freelancer_homepage');
    }
  }, [responsemongo, responsepostgres]);


  var handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(FformData_mongo))
    FformData.email = FformData_mongo.email
    
    
      fetch('https://freelancedit.azurewebsites.net/newusermongo/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(FformData_mongo)
      })
      .then(response => {
        if (response.ok) {
          setresponsemongo(true)
          console.log(response);
          console.log(responsemongo);
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        setresponsemongo(true)
        console.log(responsemongo);
        console.log(JSON.stringify(FformData_mongo))
        console.log('Data sent successfully');
      })

      .catch(error => {
        console.error('There was a problem submitting the form', error);
      });
    
      
      fetch('https://freelancedit.azurewebsites.net/newuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(FformData)
      })
      .then(response => {
        if (response.ok) {
          setresponsepostgres(true)
          console.log(response);
          console.log(responsepostgres);

          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
        
      })
      .then(data => {
        
        setresponsepostgres(true)
        console.log(responsepostgres);
        console.log(JSON.stringify(FformData))
        console.log('Data sent successfully');
        console.log(responsemongo, responsepostgres)      
        
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
              <button type="submit" onClick={handleSubmit} style={{ marginLeft:"50px", marginTop: '50px' }}>Finish</button>
          </div> 
      </div>
  
    );
  };
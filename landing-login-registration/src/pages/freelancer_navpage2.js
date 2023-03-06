import React, { useState } from 'react';
import './App.css';
import freelancer_skills from './freelancer_skills.gif';
import { useNavigate } from 'react-router-dom';

function TechnicalSkillsForm() {
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
  );
}








var Image = () => {
  return (
    <div className='gif' style={{marginTop: '40px'}}>
      <img src={freelancer_skills} alt="freelancer skills" />
    </div>
  );
};



var FNavPage1 = () => {
  return (
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>Skills</h1>
        <p className='text'>Now is your opportunity to showcase your expertise to potential buyers by highlighting your  </p>
        <p className='text'> strengths and impress them by providing a detailed description of your skills.</p> <Image /></div>
      <TechnicalSkillsForm/>
    </div>
    </div>

  );
};

export default FNavPage1;


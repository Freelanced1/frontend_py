import React, { useState } from 'react';
import './App.css';
import freelancer_skills from './freelancer_skills.gif';
import { useNavigate } from 'react-router-dom';

function TechnicalSkillsForm() {
  const [skills, setSkills] = useState([{ name: "", level: "" }]);

  const navigate = useNavigate();
  
  const handleSkillNameChange = (event, index) => {
    const newSkills = [...skills];
    newSkills[index].name = event.target.value;
    setSkills(newSkills);
  };

  const handleSkillLevelChange = (event, index) => {
    const newSkills = [...skills];
    newSkills[index].level = event.target.value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { name: "", level: "" }]);
  };

  const handleRemoveSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(skills);
    // submit form data to server
  };

  return (
    <form onSubmit={handleSubmit}>
      {skills.map((skill, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
			<div style={{ marginRight: '50px' }}>
				<label htmlFor={`skill-name-${index}`}>Skill Name:<span className="required">*</span></label>
				<input
					type="text"
					id={`skill-name-${index}`}
					value={skill.name}
					onChange={(event) => handleSkillNameChange(event, index)}
					required
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
			
			<button type="button" style={{marginRight: '10px',marginTop: '25px', height: '20px'}} onClick={handleAddSkill}>
        	Add Skill
      	</button>
		
		{skills.length > 1 && (
			<button type="button" style={{marginRight: '10px',marginTop: '25px', height: '20px'}} onClick={() => handleRemoveSkill(index)}>
				Remove Skill
			</button>
		)}

        </div>
      ))}

      

      <button type="submit" onClick={() => navigate("/navpage3")} style={{ marginTop: '30px', marginLeft: 'auto', display: 'block', width: '150px', height: '40px', backgroundColor: '#62cdbf' }}>Save & Continue</button>
    </form>
  );
}








const Image = () => {
  return (
    <div className='gif' style={{marginTop: '40px'}}>
      <img src={freelancer_skills} alt="freelancer skills" />
    </div>
  );
};



const NavPage1 = () => {
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

export default NavPage1;


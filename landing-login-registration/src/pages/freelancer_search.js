import React, { useState } from 'react';
import logo from './freelanced_logo.gif';
import { Navigate, useNavigate } from 'react-router-dom';

const FSearch = () => {

  const navigate = useNavigate();
  const searchResults = [
		{ name: 'Gargee Vaidya', category: 'Frontend Developer', skills: 'React', budget: "$10000", time: "2 months"},
		{ name: 'Ankur Verma', category: 'Backend Developer', skill: 'Python', budget: "$10000", time: "2 months"},
		{ name: 'Prashant Singh', category: 'Frontend Developer', skill: 'CSS', budget: "$10000", time: "2 months"},
		{ name: 'Gurnoor Singh Brar', category: 'Database Manageer', skill: 'SQL', budget: "$10000", time: "2 months"},
		];
  const handleClick = (index) => {
		console.log(`Box ${index} is clicked.`);
		navigate("/buyer_profile")
		};

  const [buttonPressed, setButtonPressed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setSelectedExperience(event.target.value);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const handleSearchSubmit = (event) => {
	setButtonPressed(true);
    event.preventDefault();	
    // Handle search query submission here
	
  };

  return (
	<div className="title"> <img className="logo-gif" src={logo} ></img>
      <form onSubmit={handleSearchSubmit}>
        <div className="search-container" style={{paddingTop:'10px', paddingLeft:'30px'}}>
          <input style={{border:'groove'}} type="text" value={searchQuery} onChange={handleSearchInputChange} placeholder="Search for people, jobs, companies, and more..." />

          <button onClick={handleSearchSubmit} type="submit" style={{marginLeft:'30px', marginBottom:"10px"}} className="search-btn">Search</button>
        </div>

        <div className="filters-container">
          <label style={{marginLeft:'30px'}} htmlFor="category">Category:</label>
          <select style={{marginBottom: "10px"}} className='dropbutton' id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All categories</option>
            <option value="people">People</option>
            <option value="jobs">Jobs</option>
            <option value="companies">Companies</option>
            <option value="groups">Groups</option>
          </select>

          <label htmlFor="skill">Skill:</label>
          <select className='dropbutton' id="skill" value={selectedSkill} onChange={handleSkillChange}>
            <option value="">All skills</option>
            <option value="react">React</option>
            <option value="node">Node</option>
            <option value="python">Python</option>
            <option value="design">Design</option>
          </select>

          <label htmlFor="experience">Budget:</label>
          <select className='dropbutton' id="experience" value={selectedExperience} onChange={handleExperienceChange}>
            <option value=""> all budgets</option>
            <option value=">10k"> more than $10,000</option>
            <option value="5k-10k">between $5000 to $10,000</option>
            <option value="1k-5k">between $1000 to $5000</option>
            <option value="<1k">less than $1000</option>
          </select>

          <label htmlFor="rating">Time:</label>
          <select className='dropbutton' id="rating" value={selectedRating} onChange={handleRatingChange}>
            <option value="">All ratings</option>
            <option value="one">1 month</option>
            <option value="two">2 months</option>
            <option value="three">4 months</option>
            <option value="four">8 months</option>
            <option value="five">1 year</option>
          </select>
		  <button onClick={handleSearchSubmit} type="submit" style={{marginLeft:'30px', marginBottom:"10px"}} className="search-btn">Apply Filters and Search</button>
        </div>
		{buttonPressed && <div className="search-results">
      {searchResults.map((result, index) => (
        <div key={index} className="search-result" onClick={() => handleClick(index)}>
          <div className="search-result-name">{result.name}</div>
          <div className="search-result-category">Hiring: {result.category}</div>
          <div className="search-result-details">
			<div className="search-result-details-field">Skill required: {result.skill}</div>
		  	<div className="search-result-details-field">Budget: {result.budget}</div>
		  	<div className="search-result-details-field">Time: {result.time}</div>
			</div>
        </div>
      ))}
    </div>}
      </form>
    </div>
  );
};

export default FSearch;
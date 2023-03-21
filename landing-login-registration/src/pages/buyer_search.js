import React, { useState } from 'react';
import logo from './freelanced_logo.gif';
import { Navigate, useNavigate } from 'react-router-dom';

const BSearch = () => {

  const navigate = useNavigate();
  const searchResults = [
		{ name: 'Gargee Vaidya', category: 'Frontend Developer', skill: 'React', experience: "1 year", rating: "5/5" },
		{ name: 'Ankur Verma', category: 'Backend Developer', skill: 'Python', experience: "1 year", rating: "5/5"  },
		{ name: 'Prashant Singh', category: 'Frontend Developer', skill: 'CSS', experience: "1 year", rating: "5/5"  },
		{ name: 'Gurnoor Singh Brar', category: 'Database', skill: 'SQL', experience: "1 year", rating: "5/5"  },
		];
  const handleClick = (index) => {
		console.log(`Box ${index} is clicked.`);
		navigate("/freelancer_profile")
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
    fetch(`https://freelancedit.azurewebsites.net/searchuserdetailsmongo/${searchQuery}`)
        .then(response => {
          if (response.ok) {
            console.log(response)
            return response.json();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then(data => {
          console.log(data);
        })
  
        .catch(error => {
          console.error('There was a problem submitting the form', error);
        });
      // Handle search query submission here
    
    };
  
    const handleFilterSubmit = (event) => {
      setButtonPressed(true);
      event.preventDefault();	
      let url = `https://freelancedit.azurewebsites.net/filteruserdetailsmongo/?skills=${selectedSkill}`
      if (selectedCategory !== "") {
        url+= `&category=${selectedCategory}`;
      }
      if (selectedRating !== "") {
        url+= `&ratings=${selectedRating}`;
      }
      if (selectedExperience!== "") {
        url+= `&experience=${selectedExperience}`;
      }
      fetch(url)
          .then(response => {
            if (response.ok) {
              console.log(response)
              return response.json();
            } else {
              throw new Error('Network response was not ok');
            }
          })
          .then(data => {
            console.log(data);
          })
    
          .catch(error => {
            console.error('There was a problem submitting the form', error);
          });
        // Handle search query submission here
      
      };

  return (
	<div className="title"> <img className="logo-gif" src={logo} ></img>
      <form onSubmit={handleSearchSubmit}>
        <div className="search-container" style={{paddingTop:'10px', paddingLeft:'30px'}}>
          <input style={{border:'groove'}} type="text" value={searchQuery} onChange={handleSearchInputChange} placeholder="Search for freelancers..." />

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

          <label htmlFor="experience">Experience:</label>
          <select className='dropbutton' id="experience" value={selectedExperience} onChange={handleExperienceChange}>
            <option value="">All experiences</option>
            <option value="entry">Entry level</option>
            <option value="mid">Mid-Senior level</option>
            <option value="senior">Director</option>
          </select>

          <label htmlFor="rating">Rating:</label>
          <select className='dropbutton' id="rating" value={selectedRating} onChange={handleRatingChange}>
            <option value="">All ratings</option>
            <option value="one">1 star</option>
            <option value="two">2 stars</option>
            <option value="three">3 stars</option>
            <option value="four">4 stars</option>
            <option value="five">5 stars</option>
          </select>
		  <button onClick={handleFilterSubmit} type="submit" style={{marginLeft:'30px', marginBottom:"10px"}} className="search-btn">Apply Filters and Search</button>
        </div>
		{buttonPressed && <div className="search-results">
      {searchResults.map((result, index) => (
        <div key={index} className="search-result" onClick={() => handleClick(index)}>
          <div className="search-result-name">{result.name}</div>
          <div className="search-result-category">{result.category}</div>
          <div className="search-result-details">
			<div className="search-result-details-field">Top Skill: {result.skill}</div>
		  	<div className="search-result-details-field">Experience: {result.experience}</div>
		  	<div className="search-result-details-field">Rating: {result.rating}</div>
			</div>
        </div>
      ))}
    </div>}
      </form>
    </div>
  );
};

export default BSearch;

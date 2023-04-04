import React, { useState } from 'react';
import logo from './freelanced_logo.gif';
import skills from './skills.png';
import info from './info.png';
import experience from './experience.png';
import proficiency from './proficiency.png';
import language from './language.png';
import education from './education.png';
import certi from './certi.png';
import portfolio from './portfoliio.png';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';

const BSearch = () => {

  const navigate = useNavigate();
  /*const searchResults = [
		{ name: 'Gargee Vaidya', category: 'Frontend Developer', skill: 'React', budget: "$10000", time: "2 months"},
		{ name: 'Ankur Verma', category: 'Backend Developer', skill: 'Python', budget: "$10000", time: "2 months"},
		{ name: 'Prashant Singh', category: 'Frontend Developer', skill: 'CSS', budget: "$10000", time: "2 months"},
		{ name: 'Gurnoor Singh Brar', category: 'Database Manageer', skill: 'SQL', budget: "$10000", time: "2 months"},
		];*/
  const [searchResults, setSearchResults] = useState([]);
  const handleClick = (index) => {
		setIndexSelected(index)
		console.log(`Box ${index} is clicked.`);
    setBoxSelected(true);
		};

  const [buttonPressed, setButtonPressed] = useState(false);
  const [boxSelected, setBoxSelected]= useState(false);
  const [indexSelected, setIndexSelected] = useState();
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
          const emailList = data.data.map(result => result.email);
          const promises = emailList.map(email => {
            return fetch(`https://freelancedit.azurewebsites.net/getuser/${email}`).then(response => response.json());
          });
          Promise.all(promises).then(results => {
            const searchResults = data.data.map((result, index) => {
              return {
                ...result,
                Firstname: results[index].Firstname,
                Lastname: results[index].Lastname,
                // add more properties from results as needed
              };
            });
            setSearchResults(searchResults);
            console.log(searchResults)
          }).catch(error => {
            console.error('There was a problem getting additional details for the search results', error);
          });
        })
        .catch(error => {
          console.error('There was a problem submitting the form', error);
        });
    };
  
    const handleFilterSubmit = (event) => {
      setButtonPressed(true);
      event.preventDefault();	
      let url = `https://freelancedit.azurewebsites.net/filteruserdetailsmongo/?`
      if (selectedSkill !== "") {
        if (url.endsWith('?')) {
          url+= `skills=${selectedSkill}`;
        }
        else {
          url+= `&skills=${selectedSkill}`;
        }
      }
      if (selectedCategory !== "") {
        if (url.endsWith('?')) {
          url+= `category=${selectedCategory}`;
        }
        else {
          url+= `&category=${selectedCategory}`;
        }
      }
      if (selectedRating !== "") {
        if (url.endsWith('?')) {
          url+= `rating=${selectedRating}`;
        }
        else {
          url+= `&rating=${selectedRating}`;
        }
      }
      if (selectedExperience!== "") {
        if (url.endsWith('?')) {
          url+= `experience=${selectedExperience}`;
        }
        else {
          url+= `&experience=${selectedExperience}`;
        }
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
            const emailList = data.data.map(result => result.email);
            const promises = emailList.map(email => {
              return fetch(`https://freelancedit.azurewebsites.net/getuser/${email}`).then(response => response.json());
            });
            Promise.all(promises).then(results => {
              const searchResults = data.data.map((result, index) => {
                return {
                  ...result,
                  Firstname: results[index].Firstname,
                  Lastname: results[index].Lastname,
                  // add more properties from results as needed
                };
              });
              setSearchResults(searchResults);
              console.log(searchResults)
            }).catch(error => {
              console.error('There was a problem getting additional details for the search results', error);
            });
          }).catch(error => {
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
            <option value="Software Engineer">Software Engineer</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Artficial Intelligence">Artficial Intelligence</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Cyber Security">Cyber Security</option>
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
      <div className='search-area'>
		{buttonPressed && <div className="search-results">
      {searchResults.map((result, index) => (
        <div key={index} className="search-result" onClick={() => handleClick(index)}>
          <div className="search-result-name">{result.Firstname} {result.Lastname}</div>
          <div className="search-result-category">{result.occupation}</div>
          <div className="search-result-details">
			<div className="search-result-details-field">Top Skill: {result.skills}</div>
		  	<div className="search-result-details-field">Experience: {result.experience}</div>
		  	<div className="search-result-details-field">Rating: {result.rating}</div>
			</div>
        </div>
      ))}
    </div>}
    <div className='search-right'>{boxSelected && <div className='search-right-content'>
    <div>
          <h1>{searchResults[indexSelected].Firstname} {searchResults[indexSelected].Lastname}</h1>
          <h2>{searchResults[indexSelected].occupation}</h2>
          <div className='content-box'>
            <img style={{width: "8%", height: "8%", padding:"10px"}} src={info}></img>
            <div>
          <h4>About</h4>
          <p>{searchResults[indexSelected].description}</p> </div></div>

          <div className='content-box-flex' >
            <div style={{width:"30%"}}>
            <div className='content-box'>
              <img style={{width: "25%", height: "25%", padding:"10px"}} src={experience}></img>
              <div><h4>Experience</h4>
          <p>{searchResults[indexSelected].experience} years</p> </div></div></div>

          <div style={{width:"30%"}}>
          <div className='content-box'>
          <img style={{width: "25%", height: "25%", padding:"10px"}} src={skills}></img>
          <div>
            <h4>Top Skills</h4>
          <ul>
            {searchResults[indexSelected].skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul> </div>
          </div></div>

          <div style={{width:"30%"}}>
          <div className='content-box'>
          <img style={{width: "25%", height: "25%", padding:"10px"}} src={language}></img>
          <div>
              <h4>Language</h4>
          <p>{searchResults[indexSelected].language}</p> </div></div>
          </div>
          </div>

          <div className='content-box'>
          <img style={{width: "8%", height: "8%", padding:"10px"}} src={education}></img>
          <div>
          <h4>Education</h4>
          <p>{searchResults[indexSelected].uni_degree} in {searchResults[indexSelected].university}, {searchResults[indexSelected].uni_country} (Graduated: {searchResults[indexSelected].uni_grad_date})</p></div></div>
          <div className='content-box'>
          <img style={{width: "8%", height: "8%", padding:"10px"}} src={certi}></img>
          <div>
            <h4>Certificates</h4>
          <ul>
            {searchResults[indexSelected].certificates.map(cert => (
              <li key={cert}>{cert}</li>
            ))}
          </ul></div></div>
          <div className='content-box'>
          <img style={{width: "8%", height: "8%", padding:"10px"}} src={portfolio}></img>
          <div>
          <h4>Portfolio</h4>
          <p>Website: <a href={searchResults[indexSelected].website} target="_blank" rel="noopener noreferrer">{searchResults[indexSelected].website}</a></p></div>
        </div></div>
      </div>
     }
     <div>
      <Link to='/RecruiterHomepage'>
      <button style={{margin:'30px'}} type="submit" >Return to Homepage</button>
      </Link>
      </div>
     </div>
    </div>
    
      </form>
    </div>
  );
};

export default BSearch;
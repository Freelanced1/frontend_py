import React, { useState } from 'react';
import logo from './freelanced_logo.gif';
import { Navigate, useNavigate } from 'react-router-dom';
import skills from './skills.png';
import info from './info.png';
import experience from './experience.png';
import money from './money.png';
import { Link } from 'react-router-dom';



const FSearch = () => {

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
  const [selectedbudget, setSelectedbudget] = useState('');
  const [selectedtime, setSelectedtime] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };

  const handlebudgetChange = (event) => {
    setSelectedbudget(event.target.value);
  };

  const handletimeChange = (event) => {
    setSelectedtime(event.target.value);
  };

  const handleSearchSubmit = (event) => {
	setButtonPressed(true);
  event.preventDefault();	
  fetch(`https://freelancedit.azurewebsites.net/searchrecruiterdetailsmongo/${searchQuery}`)
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
          return fetch(`https://freelancedit.azurewebsites.net/getbusiness/${email}`).then(response => response.json());
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

  const handleFilterSubmit = (event) => {
    setButtonPressed(true);
    event.preventDefault();	
    let url = `https://freelancedit.azurewebsites.net/filterbuyerdetailsmongo/?`
    if (selectedSkill !=="") {
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
    if (selectedtime !== "") {
      if (url.endsWith('?')) {
        url+= `time=${selectedtime}`;
      }
      else {
        url+= `&time=${selectedtime}`;
      }
    }
    if (selectedbudget!== "") {
      if (url.endsWith('?')) {
        url+= `budget=${selectedbudget}`;
      }
      else {
        url+= `&budget=${selectedbudget}`;
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
            return fetch(`https://freelancedit.azurewebsites.net/getbusiness/${email}`).then(response => response.json());
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
          <input style={{border:'groove'}} type="text" value={searchQuery} onChange={handleSearchInputChange} placeholder="Search for people, jobs, companies, and more..." />

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

          <label htmlFor="budget">Budget:</label>
          <select className='dropbutton' id="budget" value={selectedbudget} onChange={handlebudgetChange}>
            <option value=""> all budgets</option>
            <option value=">10k"> more than $10,000</option>
            <option value="5k-10k">between $5000 to $10,000</option>
            <option value="1k-5k">between $1000 to $5000</option>
            <option value="<1k">less than $1000</option>
          </select>

          <label htmlFor="time">Time:</label>
          <select className='dropbutton' id="time" value={selectedtime} onChange={handletimeChange}>
            <option value="">All times</option>
            <option value="one">1 month</option>
            <option value="two">2 months</option>
            <option value="three">4 months</option>
            <option value="four">8 months</option>
            <option value="five">1 year</option>
          </select>
		  <button onClick={handleFilterSubmit} type="submit" style={{marginLeft:'30px', marginBottom:"10px"}} className="search-btn">Apply Filters and Search</button>
        </div>
    <div className='search-area'>
		{buttonPressed && <div className="search-results">
      {searchResults.map((result, index) => (
        <div key={index} className="search-result" onClick={() => handleClick(index)}>
          <div className="search-result-name">{result.Firstname} {result.Lastname}</div>
          <div className="search-result-category">Hiring: {result.project_area}</div>
          <div className="search-result-details">
            <div className="search-result-details-field">Skill required: {result.skills}</div>
            <div className="search-result-details-field">Budget: {result.budget}</div>
            <div className="search-result-details-field">Time: {result.timeline}</div>
          </div>
        </div>
      ))}
    </div>}
    <div className='search-right'>{boxSelected && <div className='search-right-content'>
    <div>
          <h1>{searchResults[indexSelected].Firstname} {searchResults[indexSelected].Lastname}</h1>
          <h2>{searchResults[indexSelected].occupation}</h2>
          <h2>Project Area: {searchResults[indexSelected].project_area}</h2>
          <div className='content-box'>
            <img style={{width: "8%", height: "8%", padding:"10px"}} src={info}></img>
            <div>
          <h4>Project Description</h4>
          <p>{searchResults[indexSelected].project_area_details}</p> </div></div>

          <div className='content-box-flex' >

          <div style={{width:"30%"}}>
          <div className='content-box'>
          <img style={{width: "25%", height: "25%", padding:"10px"}} src={skills}></img>
          <div>
            <h4>Skills required</h4>
          <ul>
            {searchResults[indexSelected].skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul> </div>
          </div></div>

          <div style={{width:"30%"}}>
            <div className='content-box'>
              <img style={{width: "25%", height: "25%", padding:"10px"}} src={money}></img>
              <div><h4>Budget</h4>
          <p>{searchResults[indexSelected].budget} CAD</p> </div></div></div>

          <div style={{width:"30%"}}>
          <div className='content-box'>
          <img style={{width: "25%", height: "25%", padding:"10px"}} src={experience}></img>
          <div>
              <h4>Deadline</h4>
          <p>{searchResults[indexSelected].deadline}</p> </div></div>
          </div>
          </div>
        </div>
      </div>
     }
     <div><Link to='/freelancer_homepage'>
      <button style={{margin:'30px'}} type="submit" >Return to Homepage</button>
      </Link></div>
    </div>
    </div>
    
      </form>
    </div>
    
  );
};

export default FSearch;
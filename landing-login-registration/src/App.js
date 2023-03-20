import React, {useState} from 'react';
import './App.css';
import BNavbar from './components/BNavbar';
import FNavbar from './components/FNavbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Landing from './landing';
import LoginRegister from './pages/login-register';
import Roles from './pages/selectrole';
import {BNavPage1, BNavPage2, BNavPage3, BNavPage4, BNavPage5} from './pages/buyer_navpage';
import {FNavPage1, FNavPage2, FNavPage3, FNavPage4, FNavPage5} from './pages/freelancer_navpage';
import FHomePage from './pages/freelancer_homepage';
import FProfile from './pages/freelancer_profile';
import BProfile from "./pages/buyer_profile";
import FSearch from './pages/freelancer_search';
import BHomePage from './pages/buyer_homepage';
import BSearch from './pages/buyer_search';


function App() {

	const [BformData, setBFormData] = useState({
		// initialize state with empty values for each field
		email: "",
		firstname: "",
		lastname: "",
		// add more fields as needed
	  });
	
	const [BformData_mongo, setBFormData_mongo] = useState({
		// initialize state with empty values for each field
		email: "",
		phone: "",
		profile_pic: "",
		language: "",
		occupation: "",
		project_area: [],
		project_area_details: [],
		documents: [],
		skills: [],
		proficency: [],
		timeline: true,
		deadline: "",
		budget: ""
		// add more fields as needed
	  });
	
	const [FformData, setFFormData] = useState({
	// initialize state with empty values for each field
	email: "",
	firstname: "",
	lastname: "",
	// add more fields as needed
	});

	const [FformData_mongo, setFFormData_mongo] = useState({
		// initialize state with empty values for each field
	email: "",
	phone: "",
	profile_pic: "",
	worksamples: [],
	website: "",
	description: "",
	language: "",
	occupation: "",
	experience: 0,
	university: "",
	uni_country: "",
	uni_degree: "",
	uni_grad_date: "",
	skills: [],
	proficency: [],
	certificates: []
		// add more fields as needed
	  });
	
	  const handleChange_B = (e) => {
		const { id, value } = e.target;
		setBFormData((prevData) => ({
		  ...prevData,
		  [id]: value,
		}));
	  };
	  const handleChange_B_mongo = (e) => {
		const { id, value } = e.target;
		setBFormData_mongo((prevData) => ({
		  ...prevData,
		  [id]: value,
		}));
	  };

	  const handleChange_F = (e) => {
		const { id, value } = e.target;
		setFFormData((prevData) => ({
		  ...prevData,
		  [id]: value,
		}));
	  };
	  const handleChange_F_mongo = (e) => {
		const { id, value } = e.target;
		setFFormData_mongo((prevData) => ({
		  ...prevData,
		  [id]: value,
		}));
	  };

	  const addListItem_B = (e) => {
		const { id, value } = e.target;
		setBFormData_mongo((prevData) => ({
		  ...prevData,
		  [id]: [value],
		}));
	  };

	  const addListItem_F = (e) => {
		const { id, value } = e.target;
		setFFormData_mongo((prevData) => ({
		  ...prevData,
		  [id]: [value],
		}));
	  };
	  

return (
	<Router>
	<Routes>
		<Route exact path='/' element={<Landing/>} />
		<Route exact path='/login-register' element={<LoginRegister/>} />
		<Route exact path='/selectrole' element={<Roles/>} />
		<Route path='/buyer_navpage1' element={<><BNavbar /><BNavPage1 BformData={BformData} BformData_mongo={BformData_mongo} handleChange_B={handleChange_B} handleChange_B_mongo={handleChange_B_mongo} addListItem_B={addListItem_B}/></>}/>
		<Route path='/buyer_navpage2' element={<><BNavbar /><BNavPage2 BformData={BformData} BformData_mongo={BformData_mongo} handleChange_B={handleChange_B} handleChange_B_mongo={handleChange_B_mongo} addListItem_B={addListItem_B}/></>}/>
		<Route path='/buyer_navpage3' element={<><BNavbar /><BNavPage3 BformData={BformData} BformData_mongo={BformData_mongo} handleChange_B={handleChange_B} handleChange_B_mongo={handleChange_B_mongo} addListItem_B={addListItem_B}/></>}/>
		<Route path='/buyer_navpage4' element={<><BNavbar /><BNavPage4 BformData={BformData} BformData_mongo={BformData_mongo} handleChange_B={handleChange_B} handleChange_B_mongo={handleChange_B_mongo} addListIte_Bm={addListItem_B}/></>}/>
    	<Route path='/buyer_navpage5' element={<><BNavbar /><BNavPage5 BformData={BformData} BformData_mongo={BformData_mongo} handleChange_B={handleChange_B} handleChange_B_mongo={handleChange_B_mongo} addListItem_B={addListItem_B}/></>}/>
		<Route path='/freelancer_navpage1' element={<><FNavbar /><FNavPage1 FformData={FformData} FformData_mongo={FformData_mongo} handleChange_F={handleChange_F} handleChange_F_mongo={handleChange_F_mongo} addListItem_F={addListItem_F}/></>}/>
		<Route path='/freelancer_navpage2' element={<><FNavbar /><FNavPage2 FformData={FformData} FformData_mongo={FformData_mongo} handleChange_F={handleChange_F} handleChange_F_mongo={handleChange_F_mongo} addListItem_F={addListItem_F}/></>}/>
		<Route path='/freelancer_navpage3' element={<><FNavbar /><FNavPage3 FformData={FformData} FformData_mongo={FformData_mongo} handleChange_F={handleChange_F} handleChange_F_mongo={handleChange_F_mongo} addListItem_F={addListItem_F}/></>}/>
		<Route path='/freelancer_navpage4' element={<><FNavbar /><FNavPage4 FformData={FformData} FformData_mongo={FformData_mongo} handleChange_F={handleChange_F} handleChange_F_mongo={handleChange_F_mongo} addListItem_F={addListItem_F}/></>}/>
    	<Route path='/freelancer_navpage5' element={<><FNavbar /><FNavPage5 FformData={FformData} FformData_mongo={FformData_mongo} handleChange_F={handleChange_F} handleChange_F_mongo={handleChange_F_mongo} addListItem_F={addListItem_F}/></>}/>
		<Route path='/freelancer_homepage' element={<FHomePage/>}/>
		<Route path='/freelancer_profile' element={<FProfile/>}/>
		<Route path='/buyer_homepage' element={<BHomePage/>}/>
		<Route path='/buyer_profile' element={<BProfile/>}/>
		<Route path='/freelancer_search' element={<FSearch/>}/>
		<Route path='/buyer_search' element={<BSearch/>}/>
		
	</Routes>
	</Router>
);
}

export default App;

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


function App() {
	const [BformData, setBFormData] = useState({
		// initialize state with empty values for each field
		name: '',
		email: '',
		// add more fields as needed
	  });
	
	const [FformData, setFFormData] = useState({
		// initialize state with empty values for each field
		name: '',
		email: '',
		// add more fields as needed
	  });
	
	  // update the form data state when a field is changed
	  const handleChange = (e) => {
		const { name, value } = e.target;
		setBFormData((prevState) => ({
		  ...prevState,
		  [name]: value,
		}));
	  };

return (
	<Router>
	<Routes>
		<Route exact path='/' element={<Landing/>} />
		<Route exact path='/login-register' element={<LoginRegister/>} />
		<Route exact path='/selectrole' element={<Roles/>} />
		<Route path='/buyer_navpage1' element={<><BNavbar /><BNavPage1 BformData={BformData} handleChange={handleChange}/></>}/>
		<Route path='/buyer_navpage2' element={<><BNavbar /><BNavPage2 BformData={BformData} handleChange={handleChange}/></>}/>
		<Route path='/buyer_navpage3' element={<><BNavbar /><BNavPage3 BformData={BformData} handleChange={handleChange}/></>}/>
		<Route path='/buyer_navpage4' element={<><BNavbar /><BNavPage4 BformData={BformData} handleChange={handleChange}/></>}/>
    	<Route path='/buyer_navpage5' element={<><BNavbar /><BNavPage5/></>}/>
		<Route path='/freelancer_navpage1' element={<><FNavbar /><FNavPage1 FformData={FformData} handleChange={handleChange}/></>}/>
		<Route path='/freelancer_navpage2' element={<><FNavbar /><FNavPage2 FformData={FformData} handleChange={handleChange}/></>}/>
		<Route path='/freelancer_navpage3' element={<><FNavbar /><FNavPage3 FformData={FformData} handleChange={handleChange}/></>}/>
		<Route path='/freelancer_navpage4' element={<><FNavbar /><FNavPage4 FformData={FformData} handleChange={handleChange}/></>}/>
    	<Route path='/freelancer_navpage5' element={<><FNavbar /><FNavPage5/></>}/>
	</Routes>
	</Router>
);
}

export default App;

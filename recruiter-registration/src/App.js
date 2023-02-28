import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import NavPage1 from './pages/navpage1';
import NavPage2 from './pages/navpage2';
import NavPage3 from './pages/navpage3';
import NavPage4 from './pages/navpage4';
import NavPage5 from './pages/navpage5';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/navpage1' exact element={<NavPage1/>} />
		<Route path='/navpage1' element={<NavPage1/>} />
		<Route path='/navpage2' element={<NavPage2/>} />
		<Route path='/navpage3' element={<NavPage3/>} />
		<Route path='/navpage4' element={<NavPage4/>} />
    <Route path='/navpage5' element={<NavPage5/>} />
	</Routes>
	</Router>
);
}

export default App;

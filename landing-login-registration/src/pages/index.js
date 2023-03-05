import React from 'react';
import { useNavigate } from 'react-router-dom';


const Landing = () => {
	
const navigate = useNavigate();
return (
	<div>
	<h1>Sarah Landing Page</h1>
	<button onClick={() => navigate("/login-register")}> Login</button>
	</div>
);
};

export default Landing;

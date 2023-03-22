import React from 'react';
import { useNavigate } from 'react-router-dom';


const FHomePage = () => {
	
const navigate = useNavigate();
return (
	<div>
	<h1>Prashant Home Page for Freelancer</h1>
	<button onClick={() => navigate("/freelancer_search")}> Search work</button>
	</div>
);
};

export default FHomePage;

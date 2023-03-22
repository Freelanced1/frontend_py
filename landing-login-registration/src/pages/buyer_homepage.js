import React from 'react';
import { useNavigate } from 'react-router-dom';


const BHomePage = () => {
	
const navigate = useNavigate();
return (
	<div>
	<h1>Prashant Home Page for Buyer</h1>
	<button onClick={() => navigate("/buyer_search")}> Search work</button>
	</div>
);
};

export default BHomePage;

import React, { useState } from 'react';
import freelancer_finish from './freelancer_finish.gif';
import { useNavigate } from 'react-router-dom';


const Image = () => {
	return (
	  <div>
		<img style={{height:'400px', marginLeft: '10px'}} src={freelancer_finish} alt="freelancer finish" />
	  </div>
	);
  };

const BNavPage5 = () => {
  
const navigate = useNavigate();
  return (
    <div className='flex-container'>
        <Image/>
        <div>
            <h1 className='heading'>Thank You!</h1>
            <p className='text'>Thank you for taking the time to fill out our form and provide details about your project. </p>
            <p className='text'>We appreciate your interest in our services and are excited to serve your needs. </p>
            <p className='text'>Your input will help us tailor our solutions to meet your specific requirements. </p>
            <p className='text'>We will use this information to match you with the perfect freelancer as per your needs</p>
            <button type="submit" onClick={() => navigate("/")} style={{ marginTop: '30px', marginLeft: '50px'}}>Finish</button>
        </div> 
    </div>

  );
};

export default BNavPage5;
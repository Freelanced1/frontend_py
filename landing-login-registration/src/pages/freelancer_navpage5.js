import React, { useState } from 'react';
import freelancer_finish from './freelancer_finish.gif';
import { useNavigate } from 'react-router-dom';


var Image = () => {
	return (
	  <div>
		<img style={{height:'400px', marginLeft: '10px'}} src={freelancer_finish} alt="freelancer finish" />
	  </div>
	);
  };

var FNavPage5 = () => {
var navigate = useNavigate();
  return (
    <div className='flex-container'>
        <Image/>
        <div>
            <h1 className='heading'>Thank You!</h1>
            <p className='text'>Thank you for taking the time to fill out the form! We've saved your information and will keep it on file. </p>
            <p className='text'>If we find a buyer that matches your skills and experience, we'll be in touch!</p>
            <button type="submit" onClick={() => navigate("/")} style={{ marginLeft:"50px", marginTop: '50px' }}>Finish</button>
        </div> 
    </div>

  );
};

export default FNavPage5;
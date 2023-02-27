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

const NavPage5 = () => {
const navigate = useNavigate();
  return (
    <div className='flex-container'>
        <Image/>
        <div>
            <h1 className='heading'>Thank You!</h1>
            <p className='text'>Thank you for taking the time to fill out the form! We've saved your information and will keep it on file. </p>
            <p className='text'>If we find a buyer that matches your skills and experience, we'll be in touch!</p>
            <button type="submit" onClick={() => navigate("/navpage1")} style={{ marginTop: '30px', marginLeft: '50px', display: 'block', width: '150px', height: '40px', backgroundColor: '#62cdbf' }}>Finish</button>
        </div> 
    </div>

  );
};

export default NavPage5;
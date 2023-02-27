import React, { useState } from 'react';
import freelancer_security from './freelancer_security.gif';
import { useNavigate } from 'react-router-dom';

function SecurityInfoForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(null);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setPhoneError(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    // validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }
    // validate phone number
    if (!phone || !/^\d{10}$/.test(phone)) {
      setPhoneError('Please enter a valid 10-digit phone number');
      isValid = false;
    }
    // navigate to next page if valid
    if (isValid) {
		navigate('/navpage5');
	  }
	};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:<span className="required">*</span></label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        {emailError && <p>{emailError}</p>}
      </div>
      <div>
        <label htmlFor="phone">Phone Number:<span className="required">*</span></label>
        <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
        {phoneError && <p>{phoneError}</p>}
      </div>
      <button type="submit" style={{ marginTop: '30px', marginLeft: 'auto', display: 'block', width: '150px', height: '40px', backgroundColor: '#62cdbf' }}>Submit</button>
    </form>
  );
}


const Image = () => {
	return (
	  <div className='gif' style={{height:'150px'}}>
		<img style={{height:'400px', marginLeft: '120px'}} src={freelancer_security} alt="freelancer security" />
	  </div>
	);
  };

const NavPage4 = () => {
  return (
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>Security</h1>
        <p className='text'>Keep your private contact information safe and secure</p>
        <p className='text'>  Rest assured that your email and phone number will never be shared with potential buyers </p> <Image /></div>
      <SecurityInfoForm/>
    </div>
    </div>

  );
};

export default NavPage4;
import React, { useState } from 'react';
import freelancer_uploads from './freelancer_uploads.gif';
import { useNavigate } from 'react-router-dom';

function Uploads() {
  const [file, setFile] = useState(null);
  const [websiteLink, setWebsiteLink] = useState('');
  const [certifications, setCertifications] = useState('');

  const navigate = useNavigate();
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleWebsiteChange = (event) => {
    setWebsiteLink(event.target.value);
  };

  const handleCertificationsChange = (event) => {
    setCertifications(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission (e.g. upload file and submit data to server)
  };

  return (
    <form className='form-main' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">Upload Work Samples:</label>
        <input type="file" id="file" multiple onChange={handleFileChange} />
      </div>
      <div>
        <label htmlFor="website">Website/Portfolio Link:</label>
        <input type="text" id="website" value={websiteLink} onChange={handleWebsiteChange} placeholder="Enter website or portfolio link"/>
      </div>
      <div>
        <label htmlFor="certifications">Certifications:</label>
        <input type="text" id="certifications" value={certifications} onChange={handleCertificationsChange} placeholder="Enter your certifications"/>
      </div>
      <button style={{marginTop:'50px'}} type="submit" onClick={() => navigate("/freelancer_navpage4")} >Save & Continue</button>
    </form>
  );
}

const Image = () => {
	return (
	  <div className='gif' style={{marginTop: '0px'}}>
		<img src={freelancer_uploads} alt="freelancer uploads" />
	  </div>
	);
  };

const FNavPage3 = () => {
  return (
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>Uploads & Links</h1>
        <p className='text'>Time to showoff what you're capable of! Upload a work sample, include a link to your</p>
        <p className='text'>  amazing website/portfolio, and let us know about any impressive certifications you've earned.  </p> <Image /></div>
      <Uploads/>
    </div>
    </div>

  );
};



export default FNavPage3;

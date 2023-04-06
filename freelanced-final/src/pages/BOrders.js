import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import logo from './freelanced_logo.gif';
import { Navigate, useNavigate } from 'react-router-dom';
import skills from './skills.png';
import info from './info.png';
import experience from './experience.png';
import money from './money.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BOrders = () => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState(false);
  const [FMail, setFMail] = useState('');
  const [orderSubmitStatus, setOrderSubmitStatus] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false)
  const [RID, setRID] = useState('');
  const [FID, setFID] = useState('');
  const [orderplaced, setorderplaced] = useState(false);
  const email = localStorage.getItem("email");
  const [RecruiterData, setRecruiterData] = useState(null);
  const [FreelancerData, setFreelancerData] = useState(null);
  const [UpdateBData, setUpdateBData] = useState({});
  const [UpdateFData, setUpdateFData] = useState({});
  const [rating, setRating] = useState(0);

  useEffect(() => {
    console.log("useEffect called with email:", email);
    if (email) {
      console.log(`Sending data to https://freelancedit.azurewebsites.net/getbusiness/${email}`);
      fetch(`https://freelancedit.azurewebsites.net/getbusiness/${email}`)
        .then(response => {
          console.log(`Received data from https://freelancedit.azurewebsites.net/getbusiness/${email}:`, response);
          return response.json();
        })
        .then(data => {
          console.log("User data:", data);
          const id = data.id;
          setRID(data.id);
          console.log(`Sending data to https://freelancedit.azurewebsites.net/getrecruitermongo/${email}/${id}`);
          fetch(`https://freelancedit.azurewebsites.net/getrecruitermongo/${email}/${id}`)
            .then(response => {
              console.log(`Received data from https://freelancedit.azurewebsites.net/getrecruitermongo/${email}/${id}:`, response);
              return response.json();
            })
            .then(data => {
              console.log("Recruiter data:", data);
              setRecruiterData(data);
            })
            .catch(error => console.error(error));
          
          // Fetch user data if user_mail exists
          if (data.user_email) {
            setFMail(data.user_email)
            console.log(`Sending data to https://freelancedit.azurewebsites.net/getuser/${data.user_mail}`);
            fetch(`https://freelancedit.azurewebsites.net/getuser/${data.user_mail}`)
              .then(response => {
                console.log(`Received data from https://freelancedit.azurewebsites.net/getuser/${data.user_mail}:`, response);
                return response.json();
              })
              .then(data => {
                console.log("User ID:", data.id);
                setFID(data.id);
                console.log(FID);
                fetch(`https://freelancedit.azurewebsites.net/getusermongo/${data.user_mail}/${data.id}`)
                  .then(response => {
                    console.log(`Received data from https://freelancedit.azurewebsites.net/getusermongo/${data.user_mail}/${data.id}`, response);
                    return response.json();
                  })
                  .then(data => {
                    console.log("Mongo User data:", data);
                    setFreelancerData(data)
                    if (data.order_status == true) {setOrderSubmitStatus(true)}
                    if (data.payment_status == true) {setPaymentStatus(true)}
                  });
  
                const options = {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({'recruiter_mail': email, 'email': data.user_mail})
                };
              })
              .catch(error => console.error(error));
          }
        })
        .catch(error => console.error(error));
    }
  }, [email]);
  

  // const handleChange = (e) => {
	// 	const { id, value } = e.target;
	// 	setUserData((prevData) => ({
	// 	  ...prevData,
	// 	  [id]: value,
	// 	}));
	//   };

      const handleFmail = (e) => {
        setFMail(e.target.value);
      }

      const handlePay = (FID, FMail) => {
        setPayment(true)

        const payload = {
          'payment_status': true,
          'email': FMail
        };
  
        fetch(`https://freelancedit.azurewebsites.net/updateusermongo/?objid=${FID}`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        })
        .then(response => {
          if (response.ok) {
            // Payment was successful, update the PaymentStatus
            // For example, you could use a state hook to update a variable called `paymentStatus`
            setPaymentStatus(true);
          } else {
            // Payment failed, handle the error
            console.error('Payment failed:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Payment failed:', error);
        });
      }
      
    
      const handleSend = (e) => {
        e.preventDefault(); // Prevent the default form submit action
        console.log(email,FMail)
        setUpdateBData(prevData => ({ ...prevData, 'user_email': FMail, 'email': email }));
        setUpdateFData(prevData => ({ ...prevData, 'recruiter_mail': email, 'email': FMail }));
      
        // Call your API function here with the search query
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'user_email': FMail, 'email': email})
          };

          fetch(`https://freelancedit.azurewebsites.net/updateRecruitermongo/?objid=${RID}`,options)
            .then(response => {
              console.log(JSON.stringify({'user_email': FMail, 'email': email}))
              console.log(UpdateBData)
              console.log(response);
              return response.json();
            })
            .then(data => console.log("Recruiter data updated:", data))
            .catch(error => console.error(error));

        fetch(`https://freelancedit.azurewebsites.net/getuser/${FMail}`)
        .then(response => {
          console.log(`Received data from https://freelancedit.azurewebsites.net/getuser/${FMail}:`, response);
          return response.json();
        })
        .then(data => {
          console.log("User ID:", data.id);
          setFID(data.id);
          console.log(FID);
          fetch(`https://freelancedit.azurewebsites.net/getusermongo/${FMail}/${data.id}`)
              .then(response => {
                console.log(`Received data from https://freelancedit.azurewebsites.net/getusermongo/${FMail}/${data.id}`, response);
                return response.json();
              })
              .then(data => {
                console.log("Mongo User data:", data);
                if (data.order_status == true) {setOrderSubmitStatus(true)}
                if (data.payment_status == true) {setPaymentStatus(true)}
              });

          const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'recruiter_mail': email, 'email': FMail})
          };
          fetch(`https://freelancedit.azurewebsites.net/updateusermongo/?objid=${data.id}`,options)
            .then(response => {
              console.log(JSON.stringify({'recruiter_mail': email, 'email': FMail}))
              console.log(UpdateFData)
              console.log(response);
              return response.json();
            })
            .then(data => console.log("User data updated:", data), setorderplaced(true))
            .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
      }
  
      
      const handleRatingChange = (value) => {
        setRating(value);
          // fetch(`https://freelancedit.azurewebsites.net/getusermongo/${FMail}/${FID}`)
          //     .then(response => {
          //       console.log(`Received data from https://freelancedit.azurewebsites.net/getusermongo/${FMail}/${FID}`, response);
          //       return response.json();
          //     })
          //     .then(data => {
          //       console.log("Mongo User data:", data);
          //       if (data.order_status == true) {setOrderSubmitStatus(true)}
          //       if (data.payment_status == true) {setPaymentStatus(true)}
          //     });

          // const options = {
          //   method: 'PUT',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify({'ratings': value, 'email': FMail})
          // };
          // fetch(`https://freelancedit.azurewebsites.net/updateusermongo/?objid=${FID}`,options)
          //   .then(response => {
          //     console.log(JSON.stringify({'ratings': value, 'email': FMail}))
          //     console.log(UpdateFData)
          //     console.log(response);
          //     return response.json();
          //   })
          //   .then(data => console.log("User data updated:", data), setorderplaced(true))
          //   .catch(error => console.error(error));
      }

      const emptyStarStyle = {
        fontSize: '45px', // Adjust the size as desired
        color: '#fef7eb', // Adjust the color as desired
      };
    
      const fullStarStyle = {
        fontSize: '45px', // Adjust the size as desired
        color: '#f8e300', // Adjust the color as desired
      };


      if (RecruiterData === null) {
        return <p>Loading...</p>;
      }
     
  return (
	<div className="title"> <img className="logo-gif" src={logo} ></img>
      <form>
        <div className="search-container" style={{paddingTop:'10px', paddingLeft:'30px'}}>
          <h1>Place Orders</h1>
          {RecruiterData.user_email? (<h1>Order Placed to {RecruiterData.user_email}</h1>): (
          <input style={{border:'groove'}} type="text"onChange={handleFmail} value={FMail} placeholder="Enter email of freelancer" />)}

          {!RecruiterData.user_email && <button onClick={handleSend} type="submit" style={{marginLeft:'30px', marginBottom:"10px"}} className="search-btn">Send Order</button>}
          {!RecruiterData.user_email && orderplaced && <button style={{backgroundColor:'green'}}>Order Placed</button>}

          {RecruiterData.user_email && 
          <div>
            <br></br>
      <h2>Rate this freelancer:</h2>
      <Rating
        initialRating={rating}
        emptySymbol={<span style={emptyStarStyle}>&#9734;</span>}
        fullSymbol={<span style={fullStarStyle}>&#9733;</span>}
        onChange={handleRatingChange}
      />
    </div>}
      </div>

      <div className='search-area'>
      <div><Link to='/freelancer_homepage'>
        <button style={{margin:'30px'}} type="submit" >Return to Homepage</button>
        </Link></div>
      </div>
    
    </form>
    </div>
    
  );

};

export default BOrders;




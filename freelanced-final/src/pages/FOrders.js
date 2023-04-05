import React, { useState, useEffect } from 'react';
import logo from './freelanced_logo.gif';
import { Navigate, useNavigate } from 'react-router-dom';
import skills from './skills.png';
import info from './info.png';
import experience from './experience.png';
import money from './money.png';
import { Link } from 'react-router-dom';

function UserRecruiterMail({bData, userData}) {
  if (!bData) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <p>You have received an order from:</p>
      <p>Buyer email: {bData.email}</p>
      <p>Project Budget: {bData.budget}</p>
      <p>Project Timeline: {bData.timeline}</p>
    </div>
  );
}

const FOrders = () => {
  
const [fid, setFid] = useState(null);
const [bid, setBid] = useState(null);


const [SubmitStatus, setSubmitStatus] = useState(false)
const [UpdateFData, setUpdateFData] = useState({})

  // const [UpdateFData, setUpdateFData] = useState({
  //   email: "string",
  //   phone: "string",
  //   profile_pic: "string",
  //   worksamples: [
  //     "string"
  //   ],
  //   website: "string",
  //   description: "string",
  //   language: "string",
  //   occupation: "string",
  //   experience: 0,
  //   university: "string",
  //   uni_country: "string",
  //   uni_degree: "string",
  //   uni_grad_date: "string",
  //   skills: [
  //     "string"
  //   ],
  //   proficiency: [
  //     "string"
  //   ],
  //   certificates: [
  //     "string"
  //   ],
  //   payment_status: false,
  //   payment_date: "string",
  //   order_status: false,
  //   recruiter_mail: "string",
  //   ratings: 0
  // });

  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  // const email='gurnoorbrar@gmail.com'
  const [userData, setUserData] = useState(null);
  //const userData = {email: "string",phone: "string",payment_status: false,payment_date: "string",order_status: false,recruiter_mail: "string",ratings: 0}
  const [bData, setBData] = useState(null);
  
    useEffect(() => {
      console.log("Forders useEffect called with email:", email);
      if (email) {
        console.log(`Sending data to https://freelancedit.azurewebsites.net/getuser/${email}`);
        fetch(`https://freelancedit.azurewebsites.net/getuser/${email}`)
          .then(response => {
            console.log(`Received data from https://freelancedit.azurewebsites.net/getuser/${email}:`, response);
            return response.json();
          })
          .then(data => {
            console.log("User data:", data);
            setFid(data.id);
            console.log(`Sending data to https://freelancedit.azurewebsites.net/getusermongo/${email}/${data.id}`);
            fetch(`https://freelancedit.azurewebsites.net/getusermongo/${email}/${data.id}`)
              .then(response => {
                console.log(`Received data from https://freelancedit.azurewebsites.net/getusermongo/${email}/${data.id}:`, response);
                console.log(fid)
                return response.json();
              })
              .then(data => {
                console.log("Mongo User data:", data);
                setUserData(data);
                if (data.recruiter_mail) {
                  console.log(`Sending data to https://freelancedit.azurewebsites.net/getbusiness/${data.recruiter_mail}`);
                  fetch(`https://freelancedit.azurewebsites.net/getbusiness/${data.recruiter_mail}`)
                    .then(response => {
                      console.log(`Received data from https://freelancedit.azurewebsites.net/getbusiness/${data.recruiter_mail}`, response);
                      return response.json();
                    })
                    .then(data => {
                      console.log("Business data:", data);
                      setBid(data.id);
                      console.log(`Sending data to https://freelancedit.azurewebsites.net/getrecruitermongo/${data.email}/${data.id}`);
                      fetch(`https://freelancedit.azurewebsites.net/getrecruitermongo/${data.email}/${data.id}`)
                        .then(response => {
                          console.log(`Received data from https://freelancedit.azurewebsites.net/getrecruitermongo/${data.email}/${data.id}`, response);
                          return response.json();
                        })
                        .then(data => {
                          console.log("Recruiter data:", data);
                          setBData(data);
                        })
                        .catch(error => console.error(error));
                    })
                    .catch(error => console.error(error));
                }
              })
              .catch(error => console.error(error));
            }
          );
      }
    }, []);
  

    const handleChange = (e) => {
      e.preventDefault();
      setSubmitStatus(true)
      //fid=e.target.value;
      console.log(fid)
      const email = localStorage.getItem("email");
      setUpdateFData({
        ...UpdateFData,
        'order_status': true,
        'email': email
      });
      //console.log("Updated F data:", UpdateFData)
      // if (id === "order_status" && value === "true") {
        console.log(`Sending data to https://freelancedit.azurewebsites.net/updateusermongo/?objid=${fid}`);
        fetch(`https://freelancedit.azurewebsites.net/updateusermongo/?objid=${fid}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({'order_status': true,'email': email})
         })
          .then(response => {
            console.log(`Received response from https://freelancedit.azurewebsites.net/updateusermongo/?objid=${fid}`, response);
            return response.json();
          })
          .then(data => {
            console.log("Mongo User data:", data);
          })
          .catch(error => console.error(error));
      
    };
  
    if (userData === null) {
      return <p>Loading...</p>;
    }
    

  return (
	<div className="title"> <img className="logo-gif" src={logo} ></img>
      <form>
        <div className="search-container" style={{paddingTop:'10px', paddingLeft:'30px'}}>
          <h1>Receive Orders</h1>
          <div>
            {userData && userData.recruiter_mail ? (
              // show the orders
              <div>
                <UserRecruiterMail bData={bData} />
              </div>
            ) : (
              <p>No orders</p>
            )}
          </div>
          
          
        </div>

    <div className='search-area'>
    <button style={{margin:'30px'}} type="submit" onClick={handleChange} id="order_status"  value={fid}>Submit Project</button>
    {SubmitStatus && <p style={{marginTop:'50px'}}>Order submitted Successfully!</p>}
    <div>
            {userData.payment_status==true && userData.order_status==true &&  <p>Payment received and deposited in our saved account!</p>}
            {userData.order_status==true && userData.payment_status==false && <p>Waiting for buyer to process payment</p>}
          </div>
     <div><Link to='/freelancer_homepage'>
      <button style={{margin:'30px'}} type="submit" >Return to Homepage</button>
      </Link></div>
    </div>
    
    </form>
    </div>
    
  );
};

export default FOrders;

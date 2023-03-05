import React from "react";
import "./role.css"
import logo from './freelanced_logo.gif';
import freelancer_icon from './freelancer_icon.png';
import buyer_icon from './buyer_icon.png';
import browser from './browser_icon.png';

function Roles() {
  return (
    <div><img className="logo-gif" src={logo} ></img>
    <div className="container">
      <a href="/freelancer_navpage1" className="box freelancer">
        <div>
        <img style={{height: '100px'}} src={freelancer_icon}></img>
      <p style={{fontSize:'20px', lineHeight:"15PX"}}>I am a</p> 
      <p style={{fontSize:'30px', fontWeight:"bold"}}>FREELANCER</p> 
      <p style={{fontSize:'20px', lineHeight:"15PX"}}>seeking job opportunities as per</p>
      <p style={{fontSize:'20px', lineHeight:"15PX"}}>my skills and experience!</p>
      </div>
      </a>
      <a href="/buyer_navpage1" className="box organisation">
      <div>
      <img style={{height: '100px'}} src={buyer_icon}></img>
      <p style={{fontSize:'20px', lineHeight:"15PX"}}>I am a</p> 
      <p style={{fontSize:'30px', fontWeight:"bold"}}>BUYER</p> 
      <p style={{fontSize:'20px', lineHeight:"15PX"}}>looking for the perfect freelancer  </p>
      <p style={{fontSize:'20px', lineHeight:"15PX"}}>to bring my project to life!</p>
      </div>
      </a>
      <a href="/" className="box browse">
      <div>
      <img style={{height: '100px'}} src={browser}></img>
      <p style={{fontSize:'20px', lineHeight:"15PX"}}>I am</p> 
      <p style={{fontSize:'30px', fontWeight:"bold"}}>JUST BROWSING</p> 
      <p style={{fontSize:'20px', lineHeight:"15PX"}}>to explore new horizons and see</p>
      <p style={{fontSize:'20px', lineHeight:"15PX"}}>what I can discover!</p>
      </div>
      </a>
    </div>
    </div>
  );
}

export default Roles;

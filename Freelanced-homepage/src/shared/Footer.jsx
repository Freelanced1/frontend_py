import React from "react";
import tele from "../assets/img/tel.png";
import whats from "../assets/img/whats.png";
import twi from "../assets/img/twitter.png";
import insta from "../assets/img/insta.png";
const Footer = () => {
  return (
    <div className="footer-bg ">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-12 col-md-3 d-flex flex-column">
            <h1>LOGO</h1>
            <div className="d-flex flex-row">
            <div>
                  <img src={tele} alt="" />
                </div>
                <div>
                  <img src={whats} alt="" />
                </div>
                <div>
                  <img src={twi} alt="" />
                </div>
                <div>
                  <img src={insta} alt="" />
                </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <h6 className="footer-head">About</h6>
            <ul className="footer-ul">
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h6 className="footer-head">Support</h6>
            <ul className="footer-ul">
              <li>
                <a href="">Help & Support</a>
              </li>
              <li>
                <a href="">Selling on Freelanced</a>
              </li>
              <li>
                <a href="">Buying on Freelanced</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h6 className="footer-head">Community</h6>
            <ul className="footer-ul">
              <li>
                <a href="">Customer Feedback</a>
              </li>
              <li>
                <a href="">Invite a friend</a>
              </li>
              <li>
                <a href="">Forum</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

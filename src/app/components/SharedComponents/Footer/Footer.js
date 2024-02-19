import React from "react";
import "./Footer.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="container">
          <div className="footer_content_container">
            <div className="footer_content">
              <div className="address">
                <h5>Address</h5>
                <p className="address_footer">
                Lorem ipsum, dolor sit amet consectetur
                </p>
              </div>
              <div className="get_in_touch_container">
                <h5>Helpline</h5>
                <div className="contact_content">
                  <p>
                  <FaPhone /> +8809610970706
                  </p>
                  <p>
                  <MdEmail />  example@gmail.com
                  </p>
                </div>
              </div>
              
            </div>
            <div className="footer_content">
              <div className="useful_link_container">
                <h5>Useful Links</h5>
                <div className="useful_link_list">
                  <ul>
                    <li>About</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Return & Refund Policy</li>
                    <li>FAQ</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer_content">
              <div className="newsletter_container">
                <h5>Newsletter</h5>
                <small>
                  Subscribe to our new channel to get latest updates.
                </small>
                <div className="d-flex mt-3">
                  <input type="email" name="" placeholder="Enter Your Email" />
                  <button type="">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

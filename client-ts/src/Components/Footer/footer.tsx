import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="head">
        <a>DekGit.</a>
      </div>

      <div className="flex-left">
        <div>
          <ul className="ul">
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Advertising</li>
          </ul>
          <ul className="ul">
            <li>Terms</li>
            <li>Policy</li>
            <li>Privacy</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="flex-right">
        <div className="social">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
          <FaPinterest className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

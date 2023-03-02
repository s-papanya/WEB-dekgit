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
      <div className="footer-head"><a href="/">.DekGit</a></div>

      <div className="footer-flex-left">
        <div>
          <ul className="footer-ul">
            <li className="footer-li">About</li>
            <li className="footer-li">Partnerships</li>
            <li className="footer-li">Careers</li>
            <li className="footer-li">Advertising</li>
          </ul>
          <ul className="footer-ul">
            <li className="footer-li">Terms</li>
            <li className="footer-li">Policy</li>
            <li className="footer-li">Privacy</li>
            <li className="footer-li">Pricing</li>
            <li className="footer-li"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-flex-right">
        <div className="footer-social">
          <FaFacebook className="footer-icon" />
          <FaInstagram className="footer-icon" />
          <FaTwitter className="footer-icon" />
          <FaPinterest className="footer-icon" />
          <FaYoutube className="footer-icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

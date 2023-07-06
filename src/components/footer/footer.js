import React from "react";
import { FooterWrapper } from "./footer.css";

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <p className="college-name">Department of Information Technology, Anna University</p>
        <div className="address">
          <p>Chromepet, Chennai -600044</p>
          <p>Email: aucmitit@gmail.com</p>
          <p>Phone: 044-2251 6020</p>
        </div>
        <div className="code-container">
          <p className="code">0004</p>
          <p className="code-txt">Counselling Code</p>
        </div>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.371661499084!2d80.13716707375121!3d12.948053215396815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fac595c29ff%3A0xb76082ae18b51418!2sMadras%20Institute%20of%20Technology%2C%20Anna%20University!5e0!3m2!1sen!2sin!4v1688564349865!5m2!1sen!2sin" width={400} height={200} style={{border:0,marginTop:44,marginBottom:44}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </FooterWrapper>
  )
}

export default Footer;
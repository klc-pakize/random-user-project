import React from "react";
import "./Footer.css";
import designSvg from "../../assets/unnamed.jpg";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://www.clarusway.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <code className="brand">University Of Oxford</code>
      </a>
      <img
        src={designSvg}
        alt="design"
        style={{ width: "50px", margin: "3px  20px 3px 10px" }}
      />
    </div>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-section">
      <h2 className="heading-footer">Get in Touch</h2>
      <p className="paragraph">
        I'm currently looking for full-time React Developer/Frontend Developer
        opportunities! If you know of any positions available, if you have any
        questions, or if you just want to say hi, please feel free to email me @{" "}
        <span className="email">sethia.saransh.ss@gmail.com</span>
      </p>
      <div className="footer-bottom">
        {`</>`} with <FavoriteIcon /> by{" "}
        <Link to="https://www.crio.do/learn/portfolio/sethia-saransh-ss/?edit=true" target="_blank" className="portfolio">
          Saransh Sethia
        </Link>{" "}
        using <FaReact />
      </div>
    </div>
  );
};

export default Footer;

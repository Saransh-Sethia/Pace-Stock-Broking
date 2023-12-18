import React from "react";
import "./About.css";
import { Avatar, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
// import {profilepic} from './assets/profilepic';

const About = () => {
  return (
    <div  className="about-container">
      <Avatar
        src="https://scontent.fjai1-4.fna.fbcdn.net/v/t39.30808-6/341604860_3130362647253791_2709165706033971868_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=783fdb&_nc_ohc=yEeze5FH0g0AX8ywsBw&_nc_ht=scontent.fjai1-4.fna&oh=00_AfA5cTCn5xeFfYdqKiAu1nMqXqsNHaONz6ppGOZNlXx1pg&oe=65852CA9"
        alt="avatar"
        sx={{width:500, height:500}}
        className="avatar"
      />
      <div className="about-section">
        <h2 className="heading-section">About</h2>
        <p className="paragraph-section">
          My name is Saransh Sethia. I’m a Graduate of 2017 from GITS at Udaipur
          with a degree in Bachelor of Engineering in Mechanical . I'm most
          passionate about giving back to the community, and my goal is to
          pursue this passion within the field of software engineering. In my
          free time I like working on open source projects.
        </p>
        <Link
          to="https://docs.google.com/document/d/1Jfof2wd4C2pDaxr8xtxtdJO0hR_7Dv94AcQSb_x-q0E"
          className="resume-about"
          target="_blank"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default About;

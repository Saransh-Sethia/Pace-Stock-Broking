import React from 'react';
import './HeroSection.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import About from '../About/About';

const HeroSection = () => {
  return (
    <div className='hero-section-container'>
      <p className='heading'>Saransh Sethia</p>
      <p className='sub-heading'>Passionate about changing the world with technology</p>
      <div className='icons'>
      <Link to="http://github.com/Saransh-Sethia" className='github-icon' target="_blank">
      <GitHubIcon sx={{fontSize: "50px"}} />
      </Link>
      <Link to="https://www.facebook.com/sethia.saransh" className='facebook-icon' target="_blank">
      <FacebookIcon sx={{fontSize: "50px"}} />
      </Link>
      <Link to="https://www.instagram.com/sethia_01" className='instagram-icon' target="_blank">
      <InstagramIcon sx={{fontSize: "50px"}} />
      </Link>
      <Link to="https://www.linkedin.com/in/saransh-sethia-007b53121/" className='linkedin-icon' target="_blank">
      <LinkedInIcon sx={{fontSize: "50px"}} />
      </Link>
      </div>
      <Link className='about-me' >More About Me</Link>
    </div>
  )
}

export default HeroSection

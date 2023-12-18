import React from 'react'
import { Link } from 'react-router-dom';
import './Resume.css';

const Resume = () => {
  return (
    <>
      <Link 
      to="https://docs.google.com/document/d/1Jfof2wd4C2pDaxr8xtxtdJO0hR_7Dv94AcQSb_x-q0E" 
      target="_blank"
      className='resume' >
        Resume
      </Link>
    </>
  )
}

export default Resume

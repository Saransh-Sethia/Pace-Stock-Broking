import React,{useState} from 'react'
import './Navbar.css';
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import Resume from './Resume';

const Navbar = ({openHandler}) => {
    const [isMobile, setIsMobile] = useState(false);
  
  return (
    <nav className='navbar'>
        <h3 className='logo'>{"< Saransh />"}</h3>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={()=>setIsMobile(false)}>
                <li className='home'>Projects</li>
                <li>
                    <Resume />
                </li>
                <li className='skills'>About</li>
                <li className='signup'>Skills</li>
        </ul>
      <div className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
        {
            isMobile ? (
                <ImCross />
            ) : (
                <FaBars />
            )
        }
      </div>
    </nav>
  )
}

export default Navbar
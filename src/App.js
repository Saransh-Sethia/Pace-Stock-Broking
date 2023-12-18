
import About from './About/About';
import './App.css';
import Experiences from './Experiences/Experiences';
import Footer from './Footer/Footer';
import HeroSection from './HeroSection/HeroSection';
import Leadership from './Leadership/Leadership';
import Navbar from './Navbar/Navbar';
import ProjectData from './ProjectData/ProjectData';
// import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
<Navbar />
<HeroSection />
<About />
<Experiences />
<ProjectData />
<Leadership />
<Footer />
    </div>
  );
}

export default App;

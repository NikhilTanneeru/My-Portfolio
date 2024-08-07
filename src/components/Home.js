
import React from 'react';
import '../css/Home.css'; 
import Typewriter from './Typewriter';
import About from './About';
import Projects from './Projects';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Certifications from './Certifications';
import Experience from './Experience';

export default function Home() {
  return (
    <>
    <div className="body">
      <div className="container start">
          <div className="container sitem1">
            <h2>
              Hi, I am Nikhil Tanneeru<br/>
              <span style={{color:'green'}}>A <Typewriter text={['Web Developer!','Java Developer!','Python Developer!']} delay={200} infinite /></span>
            </h2>
            <p className="my-4 mx-3" style={{textWrap:'wrap'}}>A pre-final year student pursuing BTECH from VIT-AP University who is looking for Internships to gain Real World Experience </p>
            <br />
            <a href="#contact">
              <button className='btn btn-primary my-3'>Hire Me</button>
            </a>
            {/* Button to Download */}
            <a href="https://drive.google.com/file/d/1A4NGCvrM0rNSVRReCSLVovT9ZSiZuOs7/view?usp=sharing" target='_blank' rel="noopener noreferrer">
              <button className='btn btn-primary mx-3 my-3'>Open CV</button>
            </a>

            {/* Button to Open Resume */}
            {/* <button className='btn btn-primary mx-3 my-3' onClick={() => window.open("My Resume.pdf", "_blank")}>Download CV</button> */}
            
            <br />

            <div className='conticons1'>
              <a className="conticons mx-1" href="https://linkedin.com/in/nikhil-tanneeru" target='_blank' rel="noreferrer"><FaLinkedin/></a>
              <a className="conticons mx-1" href="https://github.com/NikhilTanneeru" target="_blank" rel="noreferrer"><FaGithub/></a>
            </div>
          </div>
          <div className="container sitem2">
            <img id="sideimg" src={require('../files/Webdeveloper.png')} alt='Profile' /> 
          </div>
        </div>
        <div className="about" id='about'>
          <About/>
        </div>
        <div className="certbox" id="experience">
          <Experience/>
        </div>
        <div className="certbox" id="projects">
          <Projects/>
        </div>
        <div className="certbox" id="certificates">
          <Certifications/>
        </div>
    </div>
    </>
  );
}

import React from 'react';
import '../css/About.css';

export default function About() {
  return (
    <div>
      <div className="container about my-3 py-3">
        <center><h3 className='heading'>About Me</h3></center>
        <div className="cont">
          <div className="imgcard">
            <center><img id="sideimg1" src={require('../files/Webdeveloper.png')} alt='Profile' /></center>
          </div>
          <div className="container abttxt">
            <p>As a dedicated student pursuing a Bachelor's in Computer Applications, I am deeply immersed in the dynamic realm of frontend web development. Proficient in HTML, CSS, JavaScript, React, and Tailwind, my passion lies in crafting visually appealing and functional user interfaces. Through hands-on projects, including FactForge—a fact-oriented website—and a pizza delivery system website, I've honed my skills in responsive design and frontend frameworks. I prioritize accessibility and seamless integration with backend technologies, ensuring a holistic user experience. Kept abreast of industry trends, I leverage emerging technologies to stay at the forefront. Join me on this journey as I shape digital landscapes, driven by a commitment to excellence, problem-solving, and a forward-thinking approach to the future of frontend development.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

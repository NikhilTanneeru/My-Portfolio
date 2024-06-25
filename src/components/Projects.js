import React from 'react';
import ProjectCard from './ProjectCard';
import '../css/Certifications.css';

export default function Projects(props) {
  return (
    <div className="container certbox-m">
      <center><h3 className="heading py-3">Projects</h3></center>
      <div className="container cont">
        <ProjectCard 
            title={'PayRoll Management System'} 
            imgName='PayRoll.png' 
            desc='Java, JavaFx, Apache Poi, Spreadsheet as Database, Scene Builder' 
            role='Team Lead'
            githubLink="https://github.com/NikhilTanneeru/PayRoll"  
          />
        <ProjectCard 
              title={'Infix to Postfix Converter'} 
              imgName='InfixPostfix.png' 
              desc='HTML, CSS, JavaScript with dynamic programming' 
              role='Team Lead'
              githubLink="https://github.com/NikhilTanneeru/Expression-Converter"
        />
        <ProjectCard 
                title={'Random Password Generator'} 
                imgName='PayRoll.png' 
                desc='Python, Libraries such as Random' 
                role='Team Lead'
                githubLink="https://github.com/NikhilTanneeru/Random-Password-Generator"
        />
        <ProjectCard 
                title={'Online Apraisal'} 
                imgName='PayRoll.png' 
                desc='JavaScript, React, Node, CSS, Bootstrap, MongoDB' 
                role='Team Lead'
                
          />
      </div>
    </div>
  );
}
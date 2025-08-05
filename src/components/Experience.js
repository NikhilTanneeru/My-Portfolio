import React from 'react'
import '../css/About.css'

export default function Experience(props) {
    return (
        <div className='container'>
            <div className="about my-3 py-3">
                <center><p>Explore </p></center>
                <center><h3 className='heading'>My Skills</h3></center>
                <center><hr /></center>
                <div className="container skills ">
                    <div className="skill-set my-3">
                        <center><strong>Programming Languages</strong></center>
                        <ul>
                            <li>Java</li>
                            <li>Python</li>
                            <li>Java Script</li>
                        </ul>
                    </div>
                    <div className="skill-set my-3">
                    <center><strong>Web Technologies</strong></center>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <div className="skill-set my-3">
                        <center><strong>Databases</strong></center>
                        <ul>
                            <li>SQL</li>
                            <li>MongoDB</li>

                        </ul>
                    </div>
                    <div className="skill-set my-3">
                    <center><strong>Soft Skills</strong></center>
                        <ul>
                            <li>Leadership</li>
                            <li>Time Management</li>
                            <li>Adaptability</li>
                            <li>Self-Motivated</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      )
}

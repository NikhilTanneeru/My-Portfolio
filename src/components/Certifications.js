import React from 'react'
import Certificate from './Certificate'
import '../css/Certifications.css'

export default function Certifications() {
  return (
    <div className="container certbox-m">
        <center><h3 className="heading" style={{paddingTop:'3px'}}>Certifications</h3></center><br />
        <div class='container cont'>
            <Certificate title='Using Python to Access Web data' imgName='Coursera.png' desc='By Coursera' />
            <Certificate title='Web Development' imgName='GFG-Certificate.png' desc='By Geeks For Geeks'/>
            <Certificate title='Code Battle' imgName='Code Battle.jpg' desc='By NGC Cloud Club'/>
            <Certificate title='Using Python to Access Web data' imgName='VIT_Python.png' desc='By VIT-AP'/>
            <Certificate title='Front End Web Development' imgName='Great_Learning.jpg' desc='By Great Learning'/>
        </div>
    </div>
  )
}

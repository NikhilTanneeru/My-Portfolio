import React from 'react'
import '../css/Certificate.css'

export default function ProjectCard(props) {
  const openGithubLink = () => {
    window.open(props.githubLink, '_blank');
  }

  return (
    <div className='container cert-view'>
        <img className='cert-img' src={props.imgName} alt="image1" />
        <div style={{height:'45%'}}>
            <center><h5 className="cert-title py-3 " style={{marginTop:'3px'}}>{props.title}</h5></center>
            <p className='px-3' style={{paddingTop:'3px'}}><strong>Technologies Used: </strong>{props.desc}</p>
            <p className='px-3' style={{paddingTop:'3px'}}><strong>Role: </strong>{props.role}</p>
            <center><button className='btn btn-primary' onClick={openGithubLink}>Open Credential</button></center>
        </div>
    </div>
  )
}

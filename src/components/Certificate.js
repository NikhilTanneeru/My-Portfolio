import React from 'react'
import '../css/Certificate.css'

export default function Certificate(props) {
  return (
    <div className='container cert-view'>
        <img className='cert-img' src={props.imgName} alt="image1" />
        <div style={{height:'50%',display:'flex',flexDirection:'column'}}>
            <center><h5 className="cert-title " style={{marginTop:'3px'}}>{props.title}</h5></center>
            <center><p>{props.desc}</p></center>
            <center><button className='btn btn-primary' style={{alignItems:'flex-end'}}>Open Credential</button></center>
        </div>
    </div>
  )
}

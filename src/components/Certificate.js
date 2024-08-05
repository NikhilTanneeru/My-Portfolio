import React from 'react';
import Swal from 'sweetalert2';
import '../css/Certificate.css';

export default function Certificate(props) {
  const getAlertWidth = () => {
    return window.innerWidth <= 768 ? '90vw' : '45vw';
  };

  const handleButtonClick = () => {
    Swal.fire({
      title: props.title,
      text: props.altdesc,
      imageUrl: props.imgName,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      width: getAlertWidth(),
      customClass: {
        popup: 'custom-swal-background'
    },
      html: `
        <p>${props.altdesc.replace(/\n/g, '<br/>').replace(/(\*\*[^*]+\*\*)/g, '<b>$1</b>').replace(/\*\*/g, '')}</p>
        ${props.link ? 
          `<a href="${props.link}" target="_blank" style="display: block; margin-top: 10px; color: #007bff; text-decoration: none;">
             Open Certificate Credential <i class="fa fa-external-link" aria-hidden="true" style="margin-left: 5px;"></i>
           </a>` 
          : ''}`
      
    });
  };

  return (
    <div className='container cert-view'>
      <img className='cert-img' src={props.imgName} alt="image1" />
      <div style={{ height: '50%', display: 'flex', flexDirection: 'column' }}>
        <center>
          <h5 className="cert-title" style={{ marginTop: '3px' }}>{props.title}</h5>
        </center>
        <center>
          <p>{props.desc}</p>
        </center>
        <center>
          <button 
            className='btn btn-primary' 
            style={{ alignItems: 'flex-end' }} 
            onClick={handleButtonClick}
          >
            View Details
          </button>
        </center>
      </div>
    </div>
  );
}

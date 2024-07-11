import React from 'react';
import Swal from 'sweetalert2';
import '../css/Certificate.css';

export default function Certificate(props) {
  const handleButtonClick = () => {
    Swal.fire({
      title: props.title,
      text: props.altdesc,
      imageUrl: props.imgName,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      width:'45vw',
      html: `<p>${props.altdesc.replace(/\n/g, '<br/>').replace(/(\*\*[^*]+\*\*)/g, '<b>$1</b>').replace(/\*\*/g, '')}</p>`,

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
            Open Credential
          </button>
        </center>
      </div>
    </div>
  );
}

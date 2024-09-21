import React from 'react';
import '../css/Certificate.css';
import Swal from 'sweetalert2';

export default function ProjectCard(props) {
  const openGithubLink = () => {
    window.open(props.githubLink, '_blank');
  };

  const getAlertWidth = () => {
    return window.innerWidth <= 768 ? '90vw' : '45vw';
  };

  const handleViewClick = () => {
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
      html: `<p>${props.altdesc.replace(/\n/g, '<br/>').replace(/(\*\*[^*]+\*\*)/g, '<b>$1</b>').replace(/\*\*/g, '')}</p>`
    });
  };

  return (
    <div className="container mx-auto p-4 cert-view md:flex md:items-center md:space-x-6">
      <img
        className="cert-img"
        src={props.imgName}
        alt="image1"
      />
      <div className="w-full mt-4 md:mt-0 md:w-2/3">
        <h5 className="cert-title text-center py-3 text-lg font-semibold">
          {props.title}
        </h5>
        <p className="px-3 py-2">
          <strong>Technologies Used: </strong>{props.desc}
        </p>
        <p className="px-3 py-2">
          <strong>Role: </strong>{props.role}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4">
          <button
            className="btn btn-primary mx-3 my-2 sm:my-0"
            onClick={openGithubLink}
          >
            Open Github
          </button>
          <button
            className="btn btn-primary mx-3 my-2 sm:my-0"
            onClick={handleViewClick}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

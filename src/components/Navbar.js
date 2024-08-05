// import React, { useState } from 'react';
// import '../css/Navbar.css';

// export default function Navbar() {
//   const [mode, setMode] = useState('light');

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#333333';
//       document.body.style.color = 'white';
//       document.querySelectorAll('.prbox, .certbox-m, .cert-view, .about, .conticons').forEach(element => {
//         element.classList.add('dark-mode');
//       });
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       document.body.style.color = 'black';
//       document.querySelectorAll('.prbox, .certbox-m, .cert-view, .about, .conticons').forEach(element => {
//         element.classList.remove('dark-mode');
//       });
//     }
//   };

//   return (
//     <div>
//       <ul className={`ul ${mode === 'dark' ? 'dark-mode' : ''}`}>
//         <li><b><h4 style={{ float: 'left', paddingLeft: '5vw', paddingTop: '8px' }}>🕸 Nikhil</h4></b></li>
//         <li>
//           <div className={`form-check form-switch text-${mode === 'dark' ? 'light' : 'dark'}`} id='toggleswitch' style={{ float: 'right' }}>
//             <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault" />
//             <label className={`form-check-label ${mode === 'dark' ? 'text-light' : 'text-dark'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
//           </div>
//         </li>
//         <li className='hide'><a style={{ float: 'right', marginRight: '5vw', color: mode === 'dark' ? 'white' : 'black' }} href="#contact">Contact</a></li>
//         <li className='hide'><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href="#certificates">Certifications</a></li>
//         <li className='hide'><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href="#projects">Projects</a></li>
//         <li className='hide'><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href="#about">About</a></li>
//         <li className='hide'><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href="#home">Home</a></li>
//       </ul>
//     </div>
//   );
// }

import React, { useState } from 'react';
import '../css/Navbar.css';

export default function Navbar() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#333333';
      document.body.style.color = 'white';
      document.querySelectorAll('.prbox, .certbox-m, .cert-view, .about, .conticons, .custom-swal-background').forEach(element => {
        element.classList.add('dark-mode');
      });
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.querySelectorAll('.prbox, .certbox-m, .cert-view, .about, .conticons, .custom-swal-background').forEach(element => {
        element.classList.remove('dark-mode');
      });
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <h4 style={{marginLeft:'3vw', paddingTop: '8px'}} className="navbar-brand" href="/">🕸 Nikhil</h4>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{marginRight:'2vw'}}>
            <li className="nav-item order-1 me-1" >
              <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'}`} href="#home">Home</a>
            </li>
            <li className="nav-item order-2">
              <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'}`} href="#about">About</a>
            </li>
            <li className="nav-item order-3">
              <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'}`} href="#projects">Projects</a>
            </li>
            <li className="nav-item order-4">
              <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'}`} href="#certificates">Certifications</a>
            </li>
            <li className="nav-item order-5">
              <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'}`} href="#contact">Contact</a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${mode === 'dark' ? 'light' : 'dark'}`}>
            <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label ${mode === 'dark' ? 'text-light' : 'text-dark'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// import React, { useState } from 'react';
// import '../css/Navbar.css';

// export default function Navbar(props) {
//   const [mode, setMode] = useState('light');

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#333333';
//       document.body.style.color = 'white';
//       document.querySelectorAll('.prbox').forEach(element => {
//         element.classList.add('dark-mode');
//       });
//       document.querySelectorAll('.certbox-m').forEach(element => {
//         element.classList.add('dark-mode');
//       });
//       document.querySelectorAll('.cert-view').forEach(element => {
//         element.classList.add('dark-mode');
//       });
//       document.querySelectorAll('.about').forEach(element => {
//         element.classList.add('dark-mode');
//       });
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       document.body.style.color = 'black';
//       document.querySelectorAll('.prbox').forEach(element => {
//         element.classList.remove('dark-mode');
//       });
//       document.querySelectorAll('.certbox-m').forEach(element => {
//         element.classList.remove('dark-mode');
//       });
//       document.querySelectorAll('.cert-view').forEach(element => {
//         element.classList.remove('dark-mode');
//       });
//       document.querySelectorAll('.about').forEach(element => {
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
//         <li><a style={{ float: 'right', marginRight: '5vw', color: mode === 'dark' ? 'white' : 'black' }} href='/'>Contact</a></li>
//         <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href='#certificates'>Certifications</a></li>
//         <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href='#projects'>Projects</a></li>
//         <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href='#about'>About</a></li>
//         <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href='/'>Home</a></li>
//       </ul>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import '../css/Navbar.css';

// export default function Navbar(props) {
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
//         <li><a style={{ float: 'right', marginRight: '5vw', color: mode === 'dark' ? 'white' : 'black' }} href='/'>Contact</a></li>
//         <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href='#certificates'>Certifications</a></li>
//         <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href='#projects'>Projects</a></li>
//         <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href='#about'>About</a></li>
//         <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href='/'>Home</a></li>
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
      document.querySelectorAll('.prbox, .certbox-m, .cert-view, .about, .conticons').forEach(element => {
        element.classList.add('dark-mode');
      });
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.querySelectorAll('.prbox, .certbox-m, .cert-view, .about, .conticons').forEach(element => {
        element.classList.remove('dark-mode');
      });
    }
  };

  return (
    <div>
      <ul className={`ul ${mode === 'dark' ? 'dark-mode' : ''}`}>
        <li><b><h4 style={{ float: 'left', paddingLeft: '5vw', paddingTop: '8px' }}>🕸 Nikhil</h4></b></li>
        <li>
          <div className={`form-check form-switch text-${mode === 'dark' ? 'light' : 'dark'}`} id='toggleswitch' style={{ float: 'right' }}>
            <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label ${mode === 'dark' ? 'text-light' : 'text-dark'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </li>
        <li><a style={{ float: 'right', marginRight: '5vw', color: mode === 'dark' ? 'white' : 'black' }} href="#contact">Contact</a></li>
        <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href="#certificates">Certifications</a></li>
        <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href="#projects">Projects</a></li>
        <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href="#about">About</a></li>
        <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href="#home">Home</a></li>
      </ul>
    </div>
  );
}


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/Navbar.css';

// export default function Navbar() {
//   const [mode, setMode] = useState('light');
//   const [collapsed, setCollapsed] = useState(true);

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

//   const toggleCollapse = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#home"><b>🕸 Nikhil</b></a>
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-toggle="collapse" 
//           data-target="#navbarSupportedContent" 
//           aria-controls="navbarSupportedContent" 
//           aria-expanded={!collapsed} 
//           aria-label="Toggle navigation" 
//           onClick={toggleCollapse}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
//             <ul className={`ul ${mode === 'dark' ? 'dark-mode' : ''}`}>
//             <li><b><h4 style={{ float: 'left', paddingLeft: '5vw', paddingTop: '8px' }}>🕸 Nikhil</h4></b></li>
//             <li>
//               <div className={`form-check form-switch text-${mode === 'dark' ? 'light' : 'dark'}`} id='toggleswitch' style={{ float: 'right' }}>
//                 <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault" />
//                 <label className={`form-check-label ${mode === 'dark' ? 'text-light' : 'text-dark'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
//               </div>
//             </li>
//             <li><a style={{ float: 'right', marginRight: '5vw', color: mode === 'dark' ? 'white' : 'black' }} href="#contact">Contact</a></li>
//             <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href="#certificates">Certifications</a></li>
//             <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href="#projects">Projects</a></li>
//             <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href="#about">About</a></li>
//             <li><a style={{ float: 'right', color: mode === 'dark' ? 'white' : 'black' }} href="#home">Home</a></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }




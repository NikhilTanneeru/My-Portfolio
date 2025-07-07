// import Contact from './components/Contact';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//   } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//         <Navbar/>
//         {/* <div className="container my-5">
//             <Routes>
//                 <Route path="/"element={<Home />} />
//             </Routes>
//         </div>  */}
//         <div className="container my-5">
//             <Home/>
//         </div> 
//         <Contact/>
//     </Router>
        
//     );
// }

// export default App;

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,    // animation duration in ms
      once: true        // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Contact />
    </>
  );
}

export default App;

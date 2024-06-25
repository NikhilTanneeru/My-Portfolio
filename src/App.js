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


import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Contact />
    </>
  );
}

export default App;

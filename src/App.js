import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

function App() {
  return (
    <Router>
        <Navbar/>
        <div className="container my-5">
            <Routes>
                <Route path="/"element={<Home />} />
            </Routes>
        </div> 
        <Contact/>
    </Router>
        
    );
}

export default App;

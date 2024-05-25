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
        <Home/>
        <Contact/>
    </Router>
        
    );
}

export default App;

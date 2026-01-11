//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Skills from './Components/Skill';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import SoftwareProjects from './components/SoftwareProject.jsx';
import Contact from './components/Contact.jsx'
import Experience from "./components/Experience.jsx";
import About from "./components/About.jsx";
import Placeholder from "./components/Placeholder.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx"; // Add this import

function Home() {
    return (
        <div className="max-w-7xl mx-auto">
            <Intro />
            <SoftwareProjects/>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Written" element={<Placeholder />} />
                    <Route path="/Experience" element={<Experience/>} />
                    <Route path="/About" element={<About/>} />
                    <Route path="/project/:projectId" element={<ProjectDetail />} />
                </Routes>
                <Contact/>
            </div>
        </Router>
    );
}

export default App;

//import WrittenWork from './components/Written/WrittenWork.jsx';
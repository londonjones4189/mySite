import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import SoftwareProjects from './components/SoftwareProject.jsx';
import WrittenWork from './components/Written/WrittenWork.jsx';
import Contact from './components/Contact.jsx'
import Experience from "./components/Experience.jsx";


function Home() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Intro />
            <SoftwareProjects />
        </div>
    );
}

function App() {
    return (
        <Router>
            <div
                className="p-4"
                style={{
                    cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><text y="24" font-size="24">🪄</text></svg>') 16 0, auto`,
                }}
            >
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/testing125679" element={<WrittenWork />} />
                    <Route path = "/Experience" element={<Experience/>} />
                </Routes>
                <Contact/>
            </div>
        </Router>
    );
}

export default App;

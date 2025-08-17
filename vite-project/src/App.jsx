
import React from 'react';
import ShelfExperience from './components/ShelfExperience.jsx';
import CreativeWorks from "./components/CreativeWorks.jsx";
import Intro from "./components/Intro.jsx"
import Header from "./components/Header.jsx"
import SoftwareProjects from "./components/SoftwareProject.jsx";

function App() {
    return (
        <div className="p-4">
            <Header/>
            <Intro/>
            <SoftwareProjects/>
            <ShelfExperience />
            <CreativeWorks/>

        </div>
    );
}

export default App;
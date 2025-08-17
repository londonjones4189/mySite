
import React from 'react';
import ShelfExperience from './components/ShelfExperience.jsx';
import CreativeWorks from "./components/CreativeWorks.jsx";

function App() {
    return (
        <div className="bg-blue-500 text-white p-4">
            <h1 className="text-2xl">Tailwind Test</h1>
            <ShelfExperience />
            <CreativeWorks/>
        </div>
    );
}

export default App;
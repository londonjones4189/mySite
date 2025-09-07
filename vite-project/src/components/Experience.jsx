import React, { useState } from 'react';

const Experience = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isFlipping, setIsFlipping] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [activeAnnotation, setActiveAnnotation] = useState(null);

    // Recent Reads Data
    const jobData = {
        job1: {
            title:"Junior Software Developer",
            company: "Scout Studio",
            duration: "September 2025 - Present",
            bullets: [
                "Rebuilt site for The Rehumanization Project, a non-profit dedicated to supporting homeless individuals",
                "Collaborated with clients weekly to define requirements, ensure user accessibility, and align with mission",
                "Implemented responsive user interface using Javascript, HTML, and CSS to optimize site performance"
            ]
        },
        job2: {
            title: "Software Consultant",
            company: "Sesame",
            duration: "June 2025 - July 2025",
            bullets: [
                "Constructed a benchmarking tool to evaluate 5 speech-to-text models, achieving 95% word-level accuracy",
                "Leveraged SpeechBrain for speaker diarization and RoBERTa-based BERTScore to measure semantic output",
                "Integrated Open AI Whisper and GPT-4o-mini to extract structured health notes from real-time patient audio",
            ]
        },
        job3: {
            title: "Copywriter Co-op",
            company: "Bose Corporation",
            duration: "January 2025 - June 2025",
            bullets: [
                "Wrote copy for Bose x LISA campaign that drove 8,000+ new member sign-ups and supported global activations",
                "Partnered with designers and devs on promotional giveaway landing pages for UConn and Victor Solomon",
                "Co-authored Bose's first brand book defining its voice, tone, and messaging standards across all channels ",
            ]
        },
        job4: {
            title: "User Experience Lead",
            company: "Innovators of Global Health (IGH)",
            duration: "September 2024 - April 2025",
            bullets: [
                "Directed a team of 10 on designing Nurture Nest, a mental health app for pre and postpartum mothers in Ghana",
                "Engineered key features based on requirements, including a symptoms tracker and questions dashboard",
                "Created 40-week fruit comparison tool to help mothers track fetal development with clear, relatable visuals",
            ]
        },
    };

    // Career interests with annotations
    const careerInterests = [
        {
            title: "SWE",
            color: "bg-red-700",
            annotation: "Annotation #1: Love building scalable systems and solving complex problems!"
        },
        {
            title: "Technical Writing",
            color: "bg-orange-600",
            annotation: "Annotation #2: Passionate about making complex tech accessible to everyone."
        },
        {
            title: "Project Management",
            color: "bg-yellow-600",
            annotation: "Annotation #3: Enjoy coordinating teams and bringing ideas to life!"
        }
    ];

    //Opening of book if selected
    const openBook = (jobKey) => {
        if (!selectedJob) {
            setIsOpening(true);
            setTimeout(() => {
                setSelectedJob(jobData[jobKey]);
                setIsOpening(false);
            }, 800);
        } else if (selectedJob && selectedJob !== jobData[jobKey]) {
            setIsFlipping(true);
            setTimeout(() => {
                setSelectedJob(jobData[jobKey]);
                setIsFlipping(false);
            }, 300);
        }
    };

    const handleBookClick = (index) => {
        setActiveAnnotation(activeAnnotation === index ? null : index);
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-slate-50" style={{fontFamily: 'Plantagenet Cherokee, serif'}}>
            <section className="text-center p-6">
                {/* Welcome to the library */}
                <h1
                    className="mb-2"
                    style={{
                        fontFamily: "'Great Vibes', cursive",
                        fontSize: '100px',
                        color: '#1A4CA3',
                        lineHeight: 1,
                    }}
                >
                    Experience
                </h1>
            </section>

            {/* Recent Reads Section */}
            <section className="p-10">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-[#1A4CA3] mb-0 border-b-4 border-[#1A4CA3] pb-4 inline-block">
                            Recent reads
                        </h2>

                        <div className="p-8 rounded-2xl">
                            <p className="text-lg text-black leading-relaxed mb-0">
                                I have experiences in software development, UX design, and copy!
                            </p>
                            </div>
                        {/* Shelf Container */}
                        <div className="relative mx-auto mb-10 w-full max-w-4xl h-80">
                            {/* Shelf */}
                            <div
                                className="absolute bottom-0 w-full h-8 bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg shadow-2xl">
                                <div
                                    className="absolute -top-1 left-0 right-0 h-2 bg-amber-700 rounded"></div>
                            </div>

                            {/* Items on shelf */}
                            <div
                                className="absolute bottom-8 w-full h-80 flex items-end justify-center px-10">
                                {/* Potted Flower */}
                                <div className="relative w-16 h-20 mr-4">
                                    <div
                                        className="absolute bottom-0 w-16 h-12 bg-gradient-to-b from-orange-600 to-amber-800 rounded-b-3xl"></div>
                                    <div
                                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                                        <div
                                            className="relative w-8 h-8 mx-auto animate-pulse mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute w-3 h-5 bg-pink-400 rounded-full top-1/2 left-1/2"
                                                    style={{
                                                        transform: `translate(-50%, -50%) rotate(${i
                                                                                                   * 72}deg)`,
                                                        transformOrigin: 'bottom center',
                                                        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
                                                    }}
                                                ></div>
                                            ))}
                                        </div>
                                        <div className="w-1 h-10 bg-green-600 mx-auto"></div>
                                    </div>
                                </div>

                                {/* Book 1 - Scout */}
                                <div
                                    onClick={() => openBook('job1')}
                                    className="w-32 h-48 bg-gray-700 rounded cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative group"
                                >
                                    <div
                                        className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-white/30 to-black/10 rounded-r"></div>
                                    <div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">
                                        <div className="transform rotate-90 whitespace-nowrap">
                                            Junior Developer
                                        </div>
                                    </div>
                                </div>

                                {/* Book 2 - Sesame */}
                                <div
                                    onClick={() => openBook('job2')}
                                    className="w-32 h-52 bg-[#1A4CA3] rounded cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative group -ml-1"
                                >
                                    <div
                                        className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-white/30 to-black/10 rounded-r"></div>
                                    <div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">
                                        <div className="transform rotate-90 whitespace-nowrap">
                                            Software Consultant
                                        </div>
                                    </div>
                                </div>

                                {/* Book 3 - Copywriter co-op */}
                                <div
                                    onClick={() => openBook('job3')}
                                    className="w-32 h-44 bg-gray-700 rounded cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative group -ml-1"
                                >
                                    <div
                                        className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-white/30 to-black/10 rounded-r"></div>
                                    <div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">
                                        <div className="transform rotate-90 whitespace-nowrap">
                                            Copywriter
                                        </div>
                                    </div>
                                </div>

                                {/* Book 4 - UX Lead */}
                                <div
                                    onClick={() => openBook('job2')}
                                    className="w-32 h-52 bg-[#1A4CA3] rounded cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative group -ml-1"
                                >
                                    <div
                                        className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-white/30 to-black/10 rounded-r"></div>
                                    <div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">
                                        <div className="transform rotate-90 whitespace-nowrap">
                                            UX Lead
                                        </div>
                                    </div>
                                </div>

                                {/* Fish Bowl */}
                                <div className="relative w-24 h-28 ml-4">
                                    <div
                                        className="absolute bottom-0 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-blue-300/10 border-4 border-blue-200/50 rounded-full overflow-hidden">
                                        <div
                                            className="absolute bottom-0 w-full h-4/5 bg-gradient-to-t from-blue-400/40 to-blue-300/20 rounded-full animate-pulse"></div>
                                        <div
                                            className="absolute bottom-8 left-3 w-5 h-3 transition-all duration-1000 ease-in-out"
                                            style={{
                                                animation: 'fishSwim 4s ease-in-out infinite'
                                            }}
                                        >
                                            <div
                                                className="w-4 h-2 bg-orange-400 rounded-full relative">
                                                <div
                                                    className="absolute -right-2 top-0"
                                                    style={{
                                                        width: 0,
                                                        height: 0,
                                                        borderLeft: '6px solid #fb923c',
                                                        borderTop: '3px solid transparent',
                                                        borderBottom: '3px solid transparent'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Book on floor - Opens to show selected job */}
                        <div className="mx-auto max-w-4xl perspective-1000"
                             style={{perspective: '1000px'}}>
                            {(selectedJob || isOpening) ? (
                                <div
                                    className={`relative w-full h-96 bg-white rounded-lg shadow-2xl flex overflow-hidden transition-transform duration-300 ${
                                        isOpening ? 'animate-opening' : ''
                                    } ${isFlipping ? 'animate-flip' : ''}`}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        animation: isOpening ? 'bookOpen 0.8s ease-out'
                                                             : (isFlipping
                                                                ? 'pageFlip 0.6s ease-in-out'
                                                                : 'none'),
                                        transform: isOpening && !selectedJob ? 'rotateX(-90deg)'
                                                                             : 'rotateX(0deg)'
                                    }}>

                                    {/* Left Page */}
                                    <div
                                        className="flex-1 p-12 border-r-2 border-stone-300 relative">
                                        <div className={`transition-opacity duration-500 ${
                                            (isFlipping || (isOpening && !selectedJob))
                                            ? 'opacity-0' : 'opacity-100'
                                        }`}>
                                            {selectedJob && (
                                                <>
                                                    <h2 className="text-3xl text-black mb-3 border-b-2 border-[#1A4CA3] pb-2">
                                                        {selectedJob.title}
                                                    </h2>
                                                    <h3 className="text-xl text-black mb-2">
                                                        {selectedJob.company}
                                                    </h3>
                                                    <p className="text-base text-black mb-8">
                                                        {selectedJob.duration}
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right Page - with scrolling */}
                                    <div
                                        className="flex-1 p-12 bg-[#EAF3FB] relative overflow-y-auto">
                                        <div className={`transition-opacity duration-500 ${
                                            (isFlipping || (isOpening && !selectedJob))
                                            ? 'opacity-0' : 'opacity-100'
                                        }`}>
                                            {selectedJob && (
                                                <ul className="space-y-4">
                                                    {selectedJob.bullets.map((bullet, index) => (
                                                        <li key={index}
                                                            className="flex items-start">
                                                            <span
                                                                className="text-[#1A4CA3] text-left font-bold text-xl mr-4 mt-1">•</span>
                                                            <span
                                                                className="text-black leading-relaxed">{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                 <div
                                     className="relative w-48 h-8 bg-blue-800 mx-auto rounded shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
                                     onClick={() => setSelectedJob(null)}>
                                     <div
                                         className="absolute top-0 right-0 w-3 h-full bg-gradient-to-r from-white/20 to-black/10 rounded-r"></div>
                                 </div>
                             )}
                        </div>

                        {/* Instruction text - moved under Recent Reads */}
                        <div className="text-center mt-8 text-gray-600">
                            <p className="text-lg italic transform -skew-x-6">Click on any book on
                                the shelf and view the experience!</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* TBR (To Be Read) Section */}
            <section className="p-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-[#1A4CA3] mb-0 border-b-4 border-[#1A4CA3] pb-4 inline-block">
                        To Be Read
                    </h2>

                    <div className="p-8 rounded-2xl">
                        <p className="text-lg text-black leading-relaxed mb-12">
                            Looking for my next read! I'm currently seeking opportunities in:
                        </p>

                        {/* Stacked Books with Fixed Annotations */}
                        <div className="flex justify-center items-center relative">
                            {/* SWE annotation - to the right of SWE book (top book) */}
                            {activeAnnotation === 0 && (
                                <div className="absolute right-0 top-44 w-52 bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 shadow-lg z-10" style={{right: '-50px'}}>
                                    <div className="text-sm text-black font-handwriting italic leading-relaxed">
                                        {careerInterests[0].annotation}
                                    </div>
                                    <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-0 h-0 border-r-4 border-l-4 border-b-4 border-transparent border-r-yellow-400"></div>
                                </div>
                            )}

                            {/* Technical Writing annotation - to the left of Technical Writing book (middle book) */}
                            {activeAnnotation === 1 && (
                                <div className="absolute left-0 top-28 w-25 bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 shadow-lg z-10" style={{left: '-50px'}}>
                                    <div className="text-sm text-black font-handwriting italic leading-relaxed">
                                        {careerInterests[1].annotation}
                                    </div>
                                    <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-l-yellow-400"></div>
                                </div>
                            )}

                            {/* Stack of rectangular books */}
                            <div className="relative">
                                {/* Project Management - Bottom book - FIXED DIMENSIONS */}
                                <div
                                    className="rounded cursor-pointer transition-all duration-300 hover:shadow-xl shadow-lg relative bg-gray-500"
                                    style={{width: '300px', height: '60px', marginLeft: '10px'}}
                                    onClick={() => handleBookClick(2)}
                                >
                                    <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-white/30 to-black/10 rounded-r"></div>
                                    <div className="flex items-center justify-center h-full text-white text-sm font-bold">
                                        Project Management
                                    </div>
                                </div>

                                {/* Technical Writing - Middle book - FIXED DIMENSIONS */}
                                <div
                                    className="rounded cursor-pointer transition-all duration-300 hover:shadow-xl shadow-lg mt-2 relative bg-sky-400"
                                    style={{width: '300px', height: '50px', marginLeft: '-10px'}}
                                    onClick={() => handleBookClick(1)}
                                >
                                    <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-white/30 to-black/10 rounded-r"></div>
                                    <div className="flex items-center justify-center h-full text-white text-sm font-bold">
                                        Technical Writing
                                    </div>
                                </div>

                                {/* SWE - Top book - FIXED DIMENSIONS */}
                                <div
                                    className="rounded cursor-pointer transition-all duration-300 hover:shadow-xl shadow-lg mt-2 ml-4 relative bg-gray-600"
                                    style={{width: '300px', height: '60px'}}
                                    onClick={() => handleBookClick(0)}
                                >
                                    <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-white/30 to-black/10 rounded-r"></div>
                                    <div className="flex items-center justify-center h-full text-white text-sm font-bold">
                                        SWE
                                    </div>
                                </div>
                            </div>

                            {/* Project Management annotation - to the right of Project Management book (bottom book) */}
                            {activeAnnotation === 2 && (
                                <div className="absolute right-0 top-12 w-52 bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 shadow-lg z-10" style={{right: '-50px'}}>
                                    <div className="text-sm text-black font-handwriting italic leading-relaxed">
                                        {careerInterests[2].annotation}
                                    </div>
                                    <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-0 h-0 border-r-4 border-l-4 border-b-4 border-transparent border-r-yellow-400"></div>
                                </div>
                            )}
                        </div>

                        <p className="text-lg text-gray-600 mt-8 italic">
                            Click on any book to see my annotation!
                        </p>
                    </div>
                </div>
            </section>


            {/* Custom animations and fonts */}
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
                
                .font-handwriting {
                    font-family: 'Caveat', cursive;
                }
                
                @keyframes fishSwim {
                    0% { transform: translateX(0px) translateY(0px); }
                    15% { transform: translateX(8px) translateY(-4px); }
                    30% { transform: translateX(12px) translateY(-2px); }
                    45% { transform: translateX(6px) translateY(4px); }
                    60% { transform: translateX(14px) translateY(2px); }
                    75% { transform: translateX(4px) translateY(-6px); }
                    90% { transform: translateX(10px) translateY(-1px); }
                    100% { transform: translateX(0px) translateY(0px); }
                }
                
                @keyframes bookOpen {
                    0% { 
                        transform: rotateX(-90deg) scale(0.8);
                        opacity: 0.3;
                    }
                    30% { 
                        transform: rotateX(-45deg) scale(0.9);
                        opacity: 0.6;
                    }
                    70% { 
                        transform: rotateX(-10deg) scale(1.02);
                        opacity: 0.9;
                    }
                    100% { 
                        transform: rotateX(0deg) scale(1);
                        opacity: 1;
                    }
                }
                
                @keyframes pageFlip {
                    0% { transform: rotateY(0deg) scale(1); }
                    25% { transform: rotateY(-15deg) scale(0.98); }
                    50% { transform: rotateY(0deg) scale(0.95); }
                    75% { transform: rotateY(15deg) scale(0.98); }
                    100% { transform: rotateY(0deg) scale(1); }
                }
                
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </div>
    );
};


export default Experience;
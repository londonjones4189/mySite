import React, { useState } from 'react';

const ShelfExperience = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isFlipping, setIsFlipping] = useState(false);
    const [isOpening, setIsOpening] = useState(false);

    // Job data
    const jobData = {
        job1: {
            title: "Frontend Developer",
            company: "Tech Innovations Inc.",
            duration: "2022 - 2024",
            bullets: [
                "Developed responsive web applications using React and TypeScript",
                "Collaborated with design team to implement pixel-perfect UI components",
                "Optimized application performance reducing load times by 40%",
                "Led code reviews and mentored junior developers",
                "Implemented automated testing increasing code coverage to 85%"
            ]
        },
        job2: {
            title: "UI/UX Designer",
            company: "Creative Solutions LLC",
            duration: "2020 - 2022",
            bullets: [
                "Designed user interfaces for web and mobile applications",
                "Conducted user research and usability testing sessions",
                "Created wireframes, prototypes, and high-fidelity mockups",
                "Established design system and component library",
                "Collaborated with development team to ensure design feasibility"
            ]
        },
        job3: {
            title: "Project Manager",
            company: "Global Enterprises Corp",
            duration: "2018 - 2020",
            bullets: [
                "Managed cross-functional teams of 8-12 members",
                "Delivered projects on time and within budget consistently",
                "Implemented Agile methodologies improving team efficiency by 30%",
                "Coordinated with stakeholders and clients for project requirements",
                "Reduced project delivery time by 25% through process optimization"
            ]
        }
    };

    const openBook = (jobKey) => {
        if (!selectedJob) {
            // First time opening - trigger opening animation
            setIsOpening(true);
            setTimeout(() => {
                setSelectedJob(jobData[jobKey]);
                setIsOpening(false);
            }, 800);
        } else if (selectedJob && selectedJob !== jobData[jobKey]) {
            // If a different book is selected, trigger flip animation
            setIsFlipping(true);
            setTimeout(() => {
                setSelectedJob(jobData[jobKey]);
                setIsFlipping(false);
            }, 300);
        }
        // If same book is clicked, do nothing (book stays open)
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-100 to-stone-300 p-10 font-serif">
            <div className="max-w-6xl mx-auto">
                {/* Chapter Title */}
                <h1 className="text-4xl font-bold text-amber-900 text-center mb-16 drop-shadow-lg">
                    Chapter 1: My Shelf of Experience
                </h1>

                {/* Shelf Container */}
                <div className="relative mx-auto mb-20 w-full max-w-4xl h-80">
                    {/* Shelf */}
                    <div className="absolute bottom-0 w-full h-8 bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg shadow-2xl">
                        <div className="absolute -top-1 left-0 right-0 h-2 bg-amber-700 rounded"></div>
                    </div>

                    {/* Items on shelf */}
                    <div className="absolute bottom-8 w-full h-60 flex items-end justify-center px-10">
                        {/* Potted Flower */}
                        <div className="relative w-16 h-20 mr-4">
                            <div className="absolute bottom-0 w-16 h-12 bg-gradient-to-b from-orange-600 to-amber-800 rounded-b-3xl"></div>
                            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                                <div className="relative w-8 h-8 mx-auto animate-pulse mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-3 h-5 bg-pink-400 rounded-full top-1/2 left-1/2"
                                            style={{
                                                transform: `translate(-50%, -50%) rotate(${i * 72}deg)`,
                                                transformOrigin: 'bottom center',
                                                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
                                            }}
                                        ></div>
                                    ))}
                                </div>
                                <div className="w-1 h-10 bg-green-600 mx-auto"></div>
                            </div>
                        </div>

                        {/* Book 1 - Frontend Developer */}
                        <div
                            onClick={() => openBook('job1')}
                            className="w-20 h-48 bg-green-800 rounded cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative group"
                        >
                            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-white/30 to-black/10 rounded-r"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-300 text-xs font-bold">
                                <div className="transform rotate-90 whitespace-nowrap">
                                    Frontend Developer
                                </div>
                            </div>
                        </div>

                        {/* Book 2 - UI Designer */}
                        <div
                            onClick={() => openBook('job2')}
                            className="w-20 h-44 bg-blue-800 rounded cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative group -ml-1"
                        >
                            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-white/30 to-black/10 rounded-r"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-300 text-xs font-bold">
                                <div className="transform rotate-90 whitespace-nowrap">
                                    UI Designer
                                </div>
                            </div>
                        </div>

                        {/* Book 3 - Project Manager */}
                        <div
                            onClick={() => openBook('job3')}
                            className="w-20 h-52 bg-purple-800 rounded cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative group -ml-1"
                        >
                            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-white/30 to-black/10 rounded-r"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-300 text-xs font-bold">
                                <div className="transform rotate-90 whitespace-nowrap">
                                    Project Manager
                                </div>
                            </div>
                        </div>

                        {/* Fish Bowl */}
                        <div className="relative w-24 h-28 ml-4">
                            <div className="absolute bottom-0 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-blue-300/10 border-4 border-blue-200/50 rounded-full overflow-hidden">
                                <div className="absolute bottom-0 w-full h-4/5 bg-gradient-to-t from-blue-400/40 to-blue-300/20 rounded-full animate-pulse"></div>
                                <div
                                    className="absolute bottom-8 left-3 w-5 h-3 transition-all duration-1000 ease-in-out"
                                    style={{
                                        animation: 'fishSwim 4s ease-in-out infinite'
                                    }}
                                >
                                    <div className="w-4 h-2 bg-orange-400 rounded-full relative">
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
                            <style jsx>{`
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
              `}</style>
                        </div>
                    </div>
                </div>

                {/* Book on floor - Opens to show selected job */}
                <div className="mx-auto max-w-4xl perspective-1000" style={{ perspective: '1000px' }}>
                    {(selectedJob || isOpening) ? (
                        // Opened book showing job details
                        <div className={`relative w-full h-96 bg-stone-100 rounded-lg shadow-2xl flex overflow-hidden transition-transform duration-300 ${
                            isOpening ? 'animate-opening' : ''
                        } ${isFlipping ? 'animate-flip' : ''}`}
                             style={{
                                 transformStyle: 'preserve-3d',
                                 animation: isOpening ? 'bookOpen 0.8s ease-out' : (isFlipping ? 'pageFlip 0.6s ease-in-out' : 'none'),
                                 transform: isOpening && !selectedJob ? 'rotateX(-90deg)' : 'rotateX(0deg)'
                             }}>
                            {/* Bookmark */}
                            <div className="absolute -top-0 right-24 w-5 h-20 bg-gradient-to-b from-red-600 to-red-800 z-10"
                                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 60%, 0 80%)' }}>
                            </div>

                            {/* Left Page */}
                            <div className="flex-1 p-12 border-r-2 border-stone-300 relative">
                                <div className={`transition-opacity duration-500 ${
                                    (isFlipping || (isOpening && !selectedJob)) ? 'opacity-0' : 'opacity-100'
                                }`}>
                                    {selectedJob && (
                                        <>
                                            <h2 className="text-3xl text-slate-800 mb-3 border-b-2 border-blue-500 pb-2">
                                                {selectedJob.title}
                                            </h2>
                                            <h3 className="text-xl text-slate-700 mb-2">
                                                {selectedJob.company}
                                            </h3>
                                            <p className="text-base text-slate-600 mb-8">
                                                {selectedJob.duration}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Right Page */}
                            <div className="flex-1 p-12 bg-stone-50 relative">
                                <div className={`transition-opacity duration-500 ${
                                    (isFlipping || (isOpening && !selectedJob)) ? 'opacity-0' : 'opacity-100'
                                }`}>
                                    {selectedJob && (
                                        <ul className="space-y-4">
                                            {selectedJob.bullets.map((bullet, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-blue-500 font-bold text-xl mr-4 mt-1">•</span>
                                                    <span className="text-slate-700 leading-relaxed">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            {/* Page flip overlay effect */}
                            {isFlipping && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-20"
                                     style={{
                                         animation: 'pageGlint 0.6s ease-in-out',
                                         transform: 'skewX(-20deg)'
                                     }}>
                                </div>
                            )}

                            {/* Opening shimmer effect */}
                            {isOpening && (
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 via-transparent to-yellow-200/30 pointer-events-none z-20"
                                     style={{
                                         animation: 'openingShimmer 0.8s ease-out'
                                     }}>
                                </div>
                            )}
                        </div>
                    ) : (
                         // Closed book on floor
                         <div className="relative w-48 h-8 bg-red-800 mx-auto rounded shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
                              onClick={() => setSelectedJob(null)}>
                             <div className="absolute top-0 right-0 w-3 h-full bg-gradient-to-r from-white/20 to-black/10 rounded-r"></div>
                         </div>
                     )}
                </div>
            </div>

            {/* Instructions */}
            <div className="text-center mt-8 text-slate-600">
                <p className="text-lg">Click on any book on the shelf to open it and view the experience!</p>
            </div>

            {/* Custom CSS for flip animation */}
            <style jsx>{`
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
                
                @keyframes pageGlint {
                    0% { 
                        transform: translateX(-100%) skewX(-20deg);
                        opacity: 0;
                    }
                    50% { 
                        transform: translateX(0%) skewX(-20deg);
                        opacity: 1;
                    }
                    100% { 
                        transform: translateX(100%) skewX(-20deg);
                        opacity: 0;
                    }
                }
                
                @keyframes openingShimmer {
                    0% { 
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    50% { 
                        opacity: 0.6;
                        transform: scale(1.05);
                    }
                    100% { 
                        opacity: 0;
                        transform: scale(1);
                    }
                }
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </div>
    );
};

export default ShelfExperience;
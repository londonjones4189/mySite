import React from "react";
import Aayati from "./photos/aayati.jpeg";
import Lily from "./photos/lily.jpeg";
import Birds from "./photos/birds.jpeg";
import Mathena from "./photos/mathena.jpeg";
import Syd from "./photos/syndey.jpeg";
import Yurika from "./photos/yurika.jpeg";

// Fixed: photos should be an array, not function parameters
const photos = [Aayati, Lily, Birds, Mathena, Yurika, Syd];

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col items-stretch gap-12 min-h-screen">
                    {/* Text Content - Always on top */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1
                            className="text-3xl md:text-7xl lg:text-8xl font-normal mb-8"
                            style={{color: "#1A4CA3", fontFamily: "'Great Vibes', cursive"}}
                        >
                            Hello!
                        </h1>
                        <div
                            className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed space-y-4"
                            style={{color: "#000000", fontFamily: "'Plantagenet Cherokee', serif"}}
                        >
                            <p>
                                Storytelling has always been at the heart of who I am. No matter how
                                far I stray, it always finds a way to seep through the cracks of my
                                life and pull me back in.
                            </p>
                            <p>
                                The first story I ever shared was about a one-winged fairy named
                                Cleo who lived on the island of Randomia. When I read it to my mom
                                and she praised it, I beamed like I was the sun. Since that day,
                                that sunlight has never left me.
                            </p>
                            <p>
                                I've continued telling stories ever since, from poems about parking
                                lots to essays on culture, each one helping that light shine a
                                little brighter.
                            </p>
                            <p>
                                Today I continue to tell stories across mediums through words,
                                visuals, and technology. I'm currently studying Computer Science and
                                English with a minor in Business and exploring the intersections of
                                creativity and innovation.
                            </p>
                            <p>
                                Last semester I worked as a copywriter at Bose where I contributed
                                to the Bose x LISA collaboration, an experience that deepened my
                                love for creative storytelling. Now I'm a junior developer at Scout
                                helping The Rehumanization Project reimagine their website and
                                brand.
                            </p>
                            <p>
                                When I'm not writing or coding, you'll find me watching video
                                essays, hate watching movies, listening to music, or buried in a
                                book.
                            </p>
                        </div>
                    </div>

                    {/* Film Strip Container */}
                    <div className="relative w-full overflow-hidden">

                        {/* Main film strip */}
                        <div className="bg-black p-4 border-4 border-gray-800 rounded-lg shadow-2xl">
                            {/* Photo strip with animation */}
                            <div className="overflow-hidden">
                                <div className="flex animate-scroll">
                                    {/* First set of photos */}
                                    {photos.map((photo, index) => (
                                        <div
                                            key={`first-${index}`}
                                            className="flex-shrink-0 mx-2 bg-white p-1 rounded shadow-lg transform hover:scale-105 transition-transform duration-300"
                                        >
                                            <img
                                                src={photo}
                                                alt={`Photo ${index + 1}`}
                                                className="w-48 h-36 object-cover rounded"
                                            />
                                        </div>
                                    ))}
                                    {/* Duplicate set for seamless loop */}
                                    {photos.map((photo, index) => (
                                        <div
                                            key={`second-${index}`}
                                            className="flex-shrink-0 mx-2 bg-white p-1 rounded shadow-lg transform hover:scale-105 transition-transform duration-300"
                                        >
                                            <img
                                                src={photo}
                                                alt={`Photo ${index + 1} duplicate`}
                                                className="w-48 h-36 object-cover rounded"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <style jsx>{`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                    }
                    
                    .animate-scroll:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default About;
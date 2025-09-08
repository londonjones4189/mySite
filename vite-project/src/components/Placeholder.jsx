import React from "react";
import BeachVideo from "./videos/beaches.mov"; // adjust path if needed

const About = () => {
    return (
        <div className="flex flex-col items-center gap-10 p-10 justify-center">

            {/* Text Content */}
            <div className="max-w-4xl text-center">
                {/* Main Heading */}
                <h1
                    className="text-[100px] font-normal"
                    style={{ color: "#1A4CA3", fontFamily: "'Great Vibes', cursive" }}
                >
                    My written work is coming soon...
                </h1>

                {/* Subtext */}
                <p
                    className="text-2xl mt-4"
                    style={{ color: "#000000", fontFamily: "'Plantagenet Cherokee', serif" }}
                >
                    Sit back and watch waves crash on Bondi Beach
                </p>

                {/* Video */}
                <div className="mt-10 flex justify-center">
                    <video
                        src={BeachVideo}
                        controls
                        autoPlay
                        loop
                        muted
                        className="rounded-lg shadow-lg w-[800px] max-w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;

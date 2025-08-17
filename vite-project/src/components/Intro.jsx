import React from "react";

const Intro = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-10 p-10 justify-center">

            {/* Hand-drawn style iPod Nano (simulated) */}
            <div
                className="w-40 h-72 border-4 rounded-xl relative"
                style={{ borderColor: "#1A4CA3" }}
            >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-20 bg-white border-2 rounded-sm border-black flex items-center justify-center text-xs">
                    🎵 Laufey - From The Start
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-20 h-20 border-2 border-black rounded-full" />
            </div>

            {/* Text Content */}
            <div className="max-w-xl text-center md:text-left">
                <h1
                    className="text-[100px] font-normal"
                    style={{ color: "#1A4CA3", fontFamily: "'Great Vibes', cursive" }}
                >
                    London Jones
                </h1>
                <p className="text-[25px] text-black">
                    I'm a Boston-based,{" "}
                    <span className="font-bold" style={{ color: "#1A4CA3" }}>
            Software Engineer
          </span>{" "}
                    and{" "}
                    <span className="font-bold" style={{ color: "#1A4CA3" }}>
            Writer
          </span>
                    , passionate about bringing ideas to life through language, creativity,
                    and technology.
                </p>
            </div>
        </div>
    );
};

export default Intro;

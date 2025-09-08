import React from "react";
import Aayati from "./photos/aayati.jpeg"
import Lily from "./photos/lily.jpeg"
import Birds from "./photos/birds.jpeg"
import Mathena from "./photos/mathena.jpeg"
import Sydney from "./photos/mathena.jpeg"
import Yurika from "./photos/yurika.jpeg"


const photos = (Aayati, Lily, Birds, Mathena, Yurika, Sydney)


const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-10 p-10 justify-center">
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

export default About;

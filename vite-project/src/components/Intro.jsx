import React from "react";
import Book from "./videos/book.gif";
const Intro = () => {
    return (

        //fix it so its for a gif not a movie
        <div className="flex flex-col md:flex-row items-center gap-10 p-5 justify-center">
            <div className="mt-10 flex justify-center">
                <img
                    src={Book}
                    alt="Animated book"
                    className="rounded-lg  w-[500px] max-w-full"
                />
            </div>
            {/* Text Content */
            }
            <div className="max-w-xl text-center md:text-left">
                <h1
                    className="text-[100px] font-normal"
                    style={{color: "#1A4CA3", fontFamily: "'Great Vibes', cursive"}}
                >
                    London Jones
                </h1>
                <p className="text-2xl mt-4"
                    style={{ color: "#000000", fontFamily: "'Plantagenet Cherokee', serif" }} >
                    I'm a Boston-based,{" "}
                    <span className="font-bold" style={{color: "#1A4CA3"}}>
            Software Engineer
          </span>{" "}
                    and{" "}
                    <span className="font-bold" style={{color: "#1A4CA3"}}>
            Writer
          </span>
                    , passionate about bringing ideas to life through language, creativity,
                    and technology
                </p>
            </div>
        </div>
    );
};

export default Intro;

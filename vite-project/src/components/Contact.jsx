import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <footer className="bg-[#EAF3FB] text-black text-center py-10 font-great-vibes w-full">
            <p className="text-[25px]"
               style={{color: "#000000", fontFamily: "'Great Vibes', cursive"}}
            >
                Thank you for getting to know me — I would love to get to know you too!
            </p>
            <div
                className="flex flex-col items-center mt-6 md:flex-row md:space-x-6 justify-center">
                <div className="flex space-x-6 text-[#1A4CA3] text-[30px]">
                    <a
                        href="https://github.com/londonjones4189"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub/>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/london--jones/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin/>
                    </a>
                    <a href="mailto:londonjonez00@gmail.com" aria-label="Email">
                        <FaEnvelope/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
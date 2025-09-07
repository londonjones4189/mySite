import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-[#EAF3FB] text-black text-[25px] text-center py-10 px-0 font-great-vibes">
            Thank you for getting to know me I would love to get to know you too!

            <div
                className="flex flex-col items-center mt-6 space-y-4 md:space-y-0 md:flex-row md:space-x-6 justify-center">
                <div className="flex space-x-6 text-[#1A4CA3] text-[30px]">
                    <a href="https://github.com/londonjones4189" target="_blank"
                       rel="noopener noreferrer">
                        <FaGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/london--jones/" target="_blank"
                       rel="noopener noreferrer">
                        <FaLinkedin/>
                    </a>
                    <a href="mailto:londonjonez00@gmail.com">
                        <FaEnvelope/>
                    </a>
                </div>
                <span className="text-[#1A4CA3] text-[18px] font-sans">
          London Jones © 2025
        </span>
            </div>
        </div>
    );
};

export default Contact;

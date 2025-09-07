import React from 'react';

function WelcomeTo() {
    return (
        <div className="text-center p-6">
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
                Welcome to the Library
            </h1>

            {/* Table of Contents */}
            <h2
                className="mb-4"
                style={{
                    fontFamily: "'Plantagenet Cherokee', serif",
                    fontSize: '25px',
                    color: '#1A4CA3',
                }}
            >
                Table of Contents
            </h2>

            {/* Thin blue line */}
            <hr className="border-t border-blue-700 mb-6 mx-auto w-3/4" />

            {/* Chapter listing */}
            <p
                className="mb-8 whitespace-pre-line"
                style={{ color: '#1A4CA3', fontFamily: "'Plantagenet Cherokee', serif" }}
            >
                {`Chapter 1 ............................ Copy
Chapter 2 ............................ Creative Works`}
            </p>
        </div>
    );
}

export default WelcomeTo;

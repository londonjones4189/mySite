import React from "react";

const ProjectTemplate = ({ projectData }) => {
    const {
        projectName,
        projectImage,
        overview,
        role,
        contributors,
        techStack,
        duration
    } = projectData;

    return (
        <div className="flex flex-col items-center gap-10 p-10 justify-center">
            <div className="max-w-4xl w-full">

                {/* Project Title */}
                <h1
                    className="text-[80px] font-normal text-center mb-8"
                    style={{ color: "#1A4CA3", fontFamily: "'Great Vibes', cursive" }}
                >
                    {projectName}
                </h1>

                {/* Project Image */}
                <div className="flex justify-center mb-12">
                    <img
                        src={projectImage}
                        alt={projectName}
                        className="rounded-lg shadow-lg w-[800px] max-w-full h-auto"
                    />
                </div>

                {/* Overview Section */}
                <div className="mb-12">
                    <h2
                        className="text-4xl font-normal mb-6"
                        style={{ color: "#1A4CA3", fontFamily: "'Great Vibes', cursive" }}
                    >
                        Overview
                    </h2>
                    <p
                        className="text-xl leading-relaxed"
                        style={{ color: "#000000", fontFamily: "'Plantagenet Cherokee', serif" }}
                    >
                        {overview}
                    </p>
                </div>

                {/* Project Details */}
                <div className="space-y-8">

                    {/* Role */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div
                            className="text-2xl font-semibold min-w-[140px]"
                            style={{ color: "#1A4CA3", fontFamily: "'Plantagenet Cherokee', serif" }}
                        >
                            Role:
                        </div>
                        <div
                            className="text-xl"
                            style={{ color: "#000000", fontFamily: "'Plantagenet Cherokee', serif" }}
                        >
                            {role}
                        </div>
                    </div>

                    {/* Contributors */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div
                            className="text-2xl font-semibold min-w-[140px]"
                            style={{ color: "#1A4CA3", fontFamily: "'Plantagenet Cherokee', serif" }}
                        >
                            Contributors:
                        </div>
                        <div
                            className="text-xl"
                            style={{ color: "#000000", fontFamily: "'Plantagenet Cherokee', serif" }}
                        >
                            {contributors.join(", ")}
                        </div>
                    </div>

                    {/* Duration */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div
                            className="text-2xl font-semibold min-w-[140px]"
                            style={{ color: "#1A4CA3", fontFamily: "'Plantagenet Cherokee', serif" }}
                        >
                            Duration:
                        </div>
                        <div
                            className="text-xl"
                            style={{ color: "#000000", fontFamily: "'Plantagenet Cherokee', serif" }}
                        >
                            {duration}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div
                            className="text-2xl font-semibold min-w-[140px]"
                            style={{ color: "#1A4CA3", fontFamily: "'Plantagenet Cherokee', serif" }}
                        >
                            Tech Stack:
                        </div>
                        <div className="flex-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {techStack.map(([category, technology], index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <span
                                            className="text-lg font-medium px-3 py-1 rounded-full border-2 min-w-[100px] text-center"
                                            style={{
                                                color: "#1A4CA3",
                                                borderColor: "#1A4CA3",
                                                fontFamily: "'Plantagenet Cherokee', serif"
                                            }}
                                        >
                                            {category}
                                        </span>
                                        <span
                                            className="text-xl"
                                            style={{ color: "#000000", fontFamily: "'Plantagenet Cherokee', serif" }}
                                        >
                                            {technology}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectTemplate;
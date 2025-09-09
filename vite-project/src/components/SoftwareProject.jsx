
// 2. Updated SoftwareProjects.jsx
import React from "react";
import { Link } from "react-router-dom";
import { projectsData } from "./Data/projectsData";

export default function SoftwareProjects() {
    // Convert projectsData object to array for mapping
    const projects = Object.values(projectsData).map(project => ({
        id: project.id,
        name: project.projectName,
        techStack: project.originalTechStack,
        type: project.type,
        role: project.role,
        description: project.description,
        View: project.available,
        image: project.projectImage
    }));

    return (
        <section id="software-projects" className="py-10 px-4">
            <div className="max-w-4xl mx-auto">
                {projects.map(({ id, name, techStack, type, role, description, View, image }) => (
                    <div
                        key={id}
                        className="flex flex-col lg:flex-row justify-center items-start gap-8 mb-16 font-serif"
                        style={{ fontFamily: "'Plantagenet Cherokee', serif" }}
                    >
                        {/* Left large image */}
                        <div className="flex-shrink-0 w-full lg:w-96 h-64 lg:h-80 rounded-lg overflow-hidden">
                            <img
                                src={image}
                                alt={`${name} project preview`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right side content - fills remaining space to container edge */}
                        <div className="flex-1 w-full">
                            {/* Project name */}
                            <h1
                                className="text-4xl lg:text-5xl text-black mb-2 select-text"
                                style={{ margin: '0 0 10px 0' }}
                            >
                                {name}
                            </h1>

                            {/* Type | Role */}
                            <div
                                className="text-black opacity-80 text-2xl mb-3 select-text"
                                style={{ marginBottom: '12px' }}
                            >
                                {type} | {role}
                            </div>

                            {/* Description with updated styling */}
                            <p
                                className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed space-y-4 mb-5 select-text"
                                style={{
                                    color: "#000000",
                                    fontFamily: "'Plantagenet Cherokee', serif",
                                    marginBottom: '20px'
                                }}
                            >
                                {description}
                            </p>

                            {/* Tech hashtags */}
                            <div className="flex gap-3 mb-5 flex-wrap justify-start">
                                {techStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="select-none text-s"
                                        style={{ color: "#1A4CA3" }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* View Project Button */}
                            {View ? (
                                <Link to={`/project/${id}`}>
                                    <button
                                        className="w-40 h-35 cursor-pointer font-serif select-none rounded-lg hover:opacity-90 transition-opacity"
                                        style={{
                                            backgroundColor: '#1A4CA3',
                                            color: 'white',
                                            fontSize: '14px',
                                            padding: '10px',
                                            fontFamily: "'Plantagenet Cherokee', serif"
                                        }}
                                        aria-label={`View project ${name}`}
                                    >
                                        View Project
                                    </button>
                                </Link>
                            ) : (
                                 <button
                                     className="w-40 h-35 cursor-not-allowed font-serif select-none rounded-lg opacity-50"
                                     style={{
                                         backgroundColor: '#1A4CA3',
                                         color: 'white',
                                         fontSize: '14px',
                                         padding: '10px',
                                         fontFamily: "'Plantagenet Cherokee', serif"
                                     }}
                                     disabled
                                 >
                                     Coming Soon!
                                 </button>
                             )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
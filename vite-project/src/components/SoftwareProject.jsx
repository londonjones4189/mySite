import React from "react";

const projects = [
    {
        id: 1,
        techStack: ["#React", "#NodeJS", "#GraphQL"],
        name: "Clarity",
        type: "Website",
        role: "Software Engineer",
        View: true,
        description:
            "Worked with a healthcare startup developing a speech-to-text system that automatically logs patient medical information by listening to conversations",
    },
    {
        id: 2,
        techStack: ["#Python", "#Django", "#PostgreSQL"],
        name: "Nurture's Nest",
        type: "Mobile App",
        role: "UX Lead",
        View: true,
        description:
            "Collaborated with partner clinic in Ghana to create an app that promotes mental health awareness for new and expecting mothers.",
    },
    {
        id: 3,
        techStack: [],
        name: "Summer in Sydney",
        type: "Website",
        role: "Software Engineer",
        View: false,
        description:
            "Follow-up service project for the Benjamin A. Gilman International Scholarship Award",
    },
];

export default function SoftwareProjects() {
    return (
        <section id="software-projects" className="py-10 px-4">
            <div className="max-w-6xl mx-auto">
                {projects.map(({ id, name, techStack, type, role, description, View }) => (
                    <div
                        key={id}
                        className="flex flex-col lg:flex-row justify-center items-start gap-8 mb-16 font-serif"
                        style={{ fontFamily: "'Plantagenet Cherokee', serif" }}
                    >
                        {/* Left placeholder image */}
                        <div
                            className="bg-blue-700 rounded-lg flex-shrink-0 w-full lg:w-80 h-48 lg:h-52"
                            style={{ backgroundColor: '#1A4CA3' }}
                        />

                        {/* Right side content */}
                        <div className="w-full lg:w-80">
                            {/* Project name */}
                            <h1
                                className="text-4xl lg:text-5xl text-black mb-2 select-text"
                                style={{ margin: '0 0 10px 0' }}
                            >
                                {name}
                            </h1>

                            {/* Type | Role */}
                            <div
                                className="text-black opacity-80 text-sm mb-3 select-text"
                                style={{ marginBottom: '12px' }}
                            >
                                {type} | {role}
                            </div>

                            {/* Description */}
                            <p
                                className="text-sm leading-relaxed mb-5 select-text text-gray-700"
                                style={{ marginBottom: '20px' }}
                            >
                                {description}
                            </p>

                            {/* Tech hashtags */}
                            <div className="flex gap-3 mb-5 flex-wrap justify-center lg:justify-start">
                                {techStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="opacity-40 select-none text-xs"
                                        style={{ color: "#1A4CA3" }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* View Project Button */}
                            <button
                                className="w-24 h-24 cursor-pointer font-serif select-none opacity-70 hover:opacity-100 transition-opacity duration-200 rounded-lg"
                                style={{
                                    backgroundColor: '#f5f5f5',
                                    color: '#1A4CA3',
                                    border: '1px solid #1A4CA3',
                                    fontSize: '14px',
                                    fontFamily: "'Plantagenet Cherokee', serif"
                                }}
                                aria-label={`View project ${name}`}
                                disabled={!View}
                            >
                                {View ? "View Project" : "Coming Soon!"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
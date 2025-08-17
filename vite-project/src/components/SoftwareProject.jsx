import React from "react";

const projects = [
    {
        id: 1,
        techStack: ["#React", "#NodeJS", "#GraphQL"],
        name: "Project Alpha",
        type: "Web App",
        role: "Lead Developer",
        description:
            "This project focuses on creating a responsive web app that streamlines workflows and enhances collaboration.",
    },
    {
        id: 2,
        techStack: ["#Python", "#Django", "#PostgreSQL"],
        name: "Project Beta",
        type: "Backend API",
        role: "Backend Engineer",
        description:
            "A scalable API designed to handle millions of requests per day with robust data security and fast response times.",
    },
    {
        id: 3,
        techStack: ["#Flutter", "#Firebase", "#REST"],
        name: "Project Gamma",
        type: "Mobile App",
        role: "Full Stack Developer",
        description:
            "Cross-platform mobile application that provides seamless user experiences and real-time updates.",
    },
];

export default function SoftwareProjects() {
    return (
        <section id="software-projects" style={{ padding: "40px 20px" }}>
            {projects.map(({ id, techStack, name, type, role, description }) => (
                <div
                    key={id}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 60,
                        fontFamily: "'Plantagenet Cherokee', serif",
                    }}
                >
                    {/* Left content */}
                    <div style={{ flex: 1, paddingRight: 30 }}>
                        {/* Tech hashtags */}
                        <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                            {techStack.map((tech, idx) => (
                                <span
                                    key={idx}
                                    style={{
                                        color: "#1A4CA3",
                                        opacity: 0.4,
                                        fontSize: 30,
                                        userSelect: "none",
                                    }}
                                >
                  {tech}
                </span>
                            ))}
                        </div>

                        {/* Project name */}
                        <h2
                            style={{
                                margin: "0 0 10px 0",
                                color: "black",
                                fontSize: 50,
                                userSelect: "text",
                            }}
                        >
                            {name}
                        </h2>

                        {/* Type | Role */}
                        <div
                            style={{
                                fontSize: 25,
                                color: "black",
                                opacity: 0.8,
                                marginBottom: 12,
                                userSelect: "text",
                            }}
                        >
                            {type} | {role}
                        </div>

                        {/* Description */}
                        <p
                            style={{
                                fontSize: 25,
                                lineHeight: 1.4,
                                maxHeight: "3.6em", // ~2 lines
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                marginBottom: 20,
                                userSelect: "text",
                            }}
                        >
                            {description}
                        </p>

                        {/* View Project Button */}
                        <button
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "#1A4CA3",
                                color: "white",
                                border: "none",
                                borderRadius: 6,
                                fontSize: 18,
                                cursor: "pointer",
                                fontFamily: "'Plantagenet Cherokee', serif",
                                userSelect: "none",
                            }}
                            aria-label={`View project ${name}`}
                        >
                            View Project
                        </button>
                    </div>

                    {/* Right placeholder image */}
                    <div
                        style={{
                            width: 350,
                            height: 200,
                            backgroundColor: "#1A4CA3",
                            borderRadius: 8,
                            flexShrink: 0,
                        }}
                    />
                </div>
            ))}
        </section>
    );
}

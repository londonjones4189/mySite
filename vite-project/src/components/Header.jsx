import React, { useState } from "react";

const navItems = [
    { label: "Software Projects", targetId: "software-projects" },
    { label: "Written Works", targetId: "written-works" },
    { label: "About", targetId: "about" },
];

export default function Header() {
    const [active, setActive] = useState(null);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            style={{
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
                height: 60,
                fontFamily: "'Plantagenet Cherokee', serif",
                fontSize: 25,
                color: "black",
                userSelect: "none",
            }}
        >
            {/* Left icon */}
            <div
                onClick={() => scrollToSection("intro")}
                style={{
                    cursor: "pointer",
                    fontSize: 28,
                    lineHeight: 1,
                    userSelect: "none",
                }}
                aria-label="Go to Intro"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") scrollToSection("intro");
                }}
            >
                🪄
            </div>

            {/* Navigation */}
            <nav style={{ display: "flex", gap: 30 }}>
                {navItems.map(({ label, targetId }, idx) => (
                    <div
                        key={targetId}
                        onClick={() => {
                            setActive(targetId);
                            scrollToSection(targetId);
                        }}
                        onMouseEnter={() => setActive(targetId)}
                        onMouseLeave={() => setActive(null)}
                        style={{
                            cursor: "pointer",
                            borderBottom:
                                active === targetId
                                ? "3px solid #1A4CA3"
                                : "3px solid transparent",
                            paddingBottom: 4,
                            transition: "border-color 0.3s ease",
                        }}
                        tabIndex={0}
                        role="link"
                        aria-label={`Go to ${label}`}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                setActive(targetId);
                                scrollToSection(targetId);
                            }
                        }}
                    >
                        {label}
                    </div>
                ))}
            </nav>
        </header>
    );
}

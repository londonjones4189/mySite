import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
    { label: "Software Projects", targetId: "software-projects", type: "scroll" },
    { label: "Written Works", targetId: "/testing125679", type: "navigate" },
    { label: "About", targetId: "/Experience", type: "navigate" },
];

export default function Header() {
    const [active, setActive] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleNavClick = (item) => {
        setActive(item.targetId);

        if (item.type === "scroll") {
            // If we're not on the home page, navigate there first
            if (location.pathname !== '/') {
                navigate('/');
                // Wait a bit for the page to load, then scroll
                setTimeout(() => scrollToSection(item.targetId), 100);
            } else {
                scrollToSection(item.targetId);
            }
        } else if (item.type === "navigate") {
            navigate(item.targetId);
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
                onClick={() => {
                    navigate('/');
                    setTimeout(() => scrollToSection("intro"), 100);
                }}
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
                    if (e.key === "Enter" || e.key === " ") {
                        navigate('/');
                        setTimeout(() => scrollToSection("intro"), 100);
                    }
                }}
            >
                🪄
            </div>

            {/* Navigation */}
            <nav style={{ display: "flex", gap: 30 }}>
                {navItems.map((item, idx) => (
                    <div
                        key={item.targetId}
                        onClick={() => handleNavClick(item)}
                        onMouseEnter={() => setActive(item.targetId)}
                        onMouseLeave={() => setActive(null)}
                        style={{
                            cursor: "pointer",
                            borderBottom:
                                active === item.targetId
                                ? "3px solid #1A4CA3"
                                : "3px solid transparent",
                            paddingBottom: 4,
                            transition: "border-color 0.3s ease",
                        }}
                        tabIndex={0}
                        role="link"
                        aria-label={`Go to ${item.label}`}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                handleNavClick(item);
                            }
                        }}
                    >
                        {item.label}
                    </div>
                ))}
            </nav>
        </header>
    );
}
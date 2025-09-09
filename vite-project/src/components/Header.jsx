import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
    { label: "Software Projects", targetId: "software-projects", type: "scroll" },
    { label: "Written Works", targetId: "/Written", type: "navigate" },
    { label: "Experience", targetId: "/Experience", type: "navigate" },
    { label: "About", targetId: "/About", type: "navigate" },
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
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => scrollToSection(item.targetId), 100);
            } else {
                scrollToSection(item.targetId);
            }
        } else if (item.type === "navigate") {
            navigate(item.targetId);
        }
    };

    return (
        <header className="bg-white flex items-center justify-between px-10 pt-5 font-serif text-[25px] text-black select-none">
            {/* Left icon */}
            <div
                onClick={() => {
                    navigate('/');
                    setTimeout(() => scrollToSection("intro"), 100);
                }}
                className="cursor-pointer text-[50px] leading-none"
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
            <nav className="flex gap-[30px]">
                {navItems.map((item) => (
                    <div
                        key={item.targetId}
                        onClick={() => handleNavClick(item)}
                        onMouseEnter={() => setActive(item.targetId)}
                        onMouseLeave={() => setActive(null)}
                        className={`cursor-pointer pb-1 border-b-4 transition-colors duration-300 ${
                            active === item.targetId ? 'border-blue-800' : 'border-transparent'
                        }`}
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

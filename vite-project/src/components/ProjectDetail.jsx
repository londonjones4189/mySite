import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ProjectTemplate from "./ProjectTemplate"; // Fixed path - same folder
import { projectsData } from "./Data/projectsData";

const ProjectDetail = () => {
    const { projectId } = useParams(); // Gets "clarity" from URL "/project/clarity"
    const projectData = projectsData[projectId]; // Fixed: use projectId variable

    // If project doesn't exist, redirect back to home
    if (!projectData) {
        return <Navigate to="/" replace />;
    }

    // Pass the project data to the template
    return <ProjectTemplate projectData={projectData} />;
};

export default ProjectDetail;
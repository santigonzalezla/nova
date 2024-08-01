import React from "react";
import './css/projectitem.css';

interface Project {
    name: string;
    description: string;
    image: string;
    client: string,
    price: string,
    time: string,
    link: string
}

interface ProjectItemProps {
    project: Project;
}

const ProjectItem:React.FC<ProjectItemProps> = ({ project }) =>
{
    return (
        <div className="project-item">
            <div className="project-item-left">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="project-item-left-info">
                    <p><span>Cliente:</span> {project.client}</p>
                    <p><span>Precio:</span> {project.price}</p>
                    <p><span>Tiempo:</span> {project.time}</p>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
            </div>
            <div className="project-item-right">
                <img src={project.image} alt="Imagen del proyecto"/>
            </div>
        </div>
    );
}

export default ProjectItem;
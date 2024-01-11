import React from 'react'
import "../../styles/start.css"
import { useTheme } from '../ThemeContext'
import TechBox from './TechBox'

interface ProjectProps {
    project_name: string;
    project_description: string;
    project_image: string;
    tech: string[];
    onClick: () => void;
}

const ProjectBox: React.FC<ProjectProps> = ({ project_name, project_description, project_image, tech, onClick }) => {
    const techBoxes = () => {
      return tech.map((technology, index) => (
        <TechBox key={index} technology={technology} />
      ));
    };
  
    const { theme, toggleTheme } = useTheme();
    return (
      <div className={`project-box ${theme}`} onClick={onClick}>
        <div className="project-img">
          <img src={project_image} className="image" />
        </div>
        <div className="project-title">
          {project_name}
        </div>
        <div className="project-description">
          {project_description}
        </div>
        <div className="technologies">
          {techBoxes()}
        </div>
        
      </div>
    );
  };

export default ProjectBox
import React from 'react'
import "../../styles/start.css"

interface ProjectProps {
    project_name: string;
    project_description: string;
    project_image: string;
    tech: string[];
    onClick: () => void;
}

const ProjectBox: React.FC<ProjectProps> = ({ project_name, project_description, project_image, onClick }) => {
    return (
      <div className="project-box" onClick={onClick}>
        <div className="project-img">
          <img src={project_image} className="image" />
        </div>
        
        {project_name}
        {project_description}
      </div>
    );
  };

// function ProjectBox() {
//   return (
//     <div>ProjectBox</div>
//   )
// }

export default ProjectBox
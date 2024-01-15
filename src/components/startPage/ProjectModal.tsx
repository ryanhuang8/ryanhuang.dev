import React, { MouseEvent } from 'react';
import "../../styles/start.css"
import { useTheme } from '../ThemeContext'

interface ProjectModalProps {
  project: {name : string, description : string, image : string}
  closeModal: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, closeModal }) => {
  const { theme, toggleTheme } = useTheme();
  const handleCloseModal = (e: MouseEvent) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className={`modal-container ${theme}`} onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={handleCloseModal}>
          &times;
        </span>
        <div className="project-img">
          <img src={project.image} className="image" />
        </div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectModal;

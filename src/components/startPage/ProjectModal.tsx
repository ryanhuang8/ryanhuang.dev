import React, { MouseEvent } from 'react';
import "../../styles/start.css"
import { useTheme } from '../ThemeContext'

interface ProjectModalProps {
  closeModal: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ closeModal }) => {
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
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
      </div>
    </div>
  );
};

export default ProjectModal;

import { MouseEvent } from 'react';
import "../../styles/start.css"
import { useTheme } from '../ThemeContext'
import { RxCross2 } from "react-icons/rx";

interface ProjectModalProps {
  project: {name : string, description : string, image : string, links : { [key: string]: string }}
  closeModal: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, closeModal }) => {
  const { theme, } = useTheme();
  const handleCloseModal = (e: MouseEvent) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className={`modal-container ${theme}`} onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={handleCloseModal}>
          <RxCross2/>
        </span>
        <div className="image-slot">
          <div className="project-img-modal">
            <img src={project.image} className="image-modal" />
          </div>
        </div>
        <h2 className="modal-title">{project.name}</h2>
        <p>{project.description}</p>
        <div>
            {Object.entries(project.links).map(([key, value]) => (
            <button className={`project-links ${theme}`} key={key} onClick={() => window.open(value, '_blank')} type="button">
                {key}
            </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

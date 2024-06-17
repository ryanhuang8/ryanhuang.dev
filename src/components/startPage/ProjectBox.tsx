import "../../styles/start.css"
import { useTheme } from '../ThemeContext'
import TechBox from './TechBox'

interface ProjectProps {
    project_name: string;
    extra_description?: string;
    project_description: string;
    project_image: string;
    tech: string[];
    links : { [key: string]: string };
    onClick: () => void;
    changeProject: (name : string, description : string, image : string, links : { [key: string]: string }) => void;
}

const ProjectBox: React.FC<ProjectProps> = ({ project_name, extra_description, project_description, links, project_image, tech, onClick, changeProject }) => {
    const techBoxes = () => {
      return tech.map((technology, index) => (
        <TechBox key={index} technology={technology} />
      ));
    };

    const clickEvent = () => {
      onClick();
      changeProject(project_name, project_description, project_image, links)
    }
  
    const { theme, } = useTheme();
    return (
      <div className={`project-box ${theme}`} onClick={clickEvent}>
        <div className="project-img">
          <img src={project_image} className="image" />
        </div>
        <div className="project-title">
          {project_name}
        </div>
        {extra_description && (
          <div className="extra-description">
            {extra_description}
          </div>
        )}
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
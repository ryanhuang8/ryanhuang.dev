import React, { useState } from 'react'
import ProjectModal from './ProjectModal';
import ProjectBox from './ProjectBox';
import webSnap from '../../images/webSnap.png';

function PersonalProjects() {
  const [isModalOpen, setModalOpen] = useState(false);
  
  // Function to handle the click on a project box and open the modal
  const handleProjectBoxClick = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <div className="proj-title">Personal Projects</div>
      <div className="flex-container">
        <ProjectBox project_name={'PaperPilot'} project_description={''} project_image={webSnap} tech={[]} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'hi'} project_description={''} project_image={''} tech={[]} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'hi'} project_description={''} project_image={''} tech={[]} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'hi'} project_description={''} project_image={''} tech={[]} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'hi'} project_description={''} project_image={''} tech={[]} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'hi'} project_description={''} project_image={''} tech={[]} onClick={handleProjectBoxClick}></ProjectBox>
      </div>

      {/* Render the modal conditionally based on the state */}
      {isModalOpen && <ProjectModal closeModal={() => setModalOpen(false)} />}
    </div>
    
  )
}

export default PersonalProjects
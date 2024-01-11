import React, { useState } from 'react'
import ProjectModal from './ProjectModal';
import ProjectBox from './ProjectBox';
import webSnap from '../../images/webSnap.png';
import medChat from '../../images/medchat3.png';

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
        <ProjectBox project_name={'PaperPilot'} project_description={'Literature search for research papers via approximate nearest neighbors on doc2vec embeddings'} project_image={webSnap} tech={['Typescript', 'Flask', 'Firebase']} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'MedChat'} project_description={'Facilitating doctor-patient interactions using an application with checklist and chat functionalities'} project_image={medChat} tech={['Flutter', 'Firebase']} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'Trading Bot'} project_description={'Helping automate the trading process with built-in indicators like SMA and portfolio that tracks current stocks'} project_image={''} tech={['Python']} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'WebSnap'} project_description={''} project_image={''} tech={[]} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'PathPerfect'} project_description={''} project_image={''} tech={[]} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'Personal Website'} project_description={''} project_image={''} tech={[]} onClick={handleProjectBoxClick}></ProjectBox>
      </div>

      {/* Render the modal conditionally based on the state */}
      {isModalOpen && <ProjectModal closeModal={() => setModalOpen(false)} />}
    </div>
    
  )
}

export default PersonalProjects
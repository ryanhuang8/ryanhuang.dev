import React, { useState } from 'react'
import ProjectModal from './ProjectModal';
import ProjectBox from './ProjectBox';
import paperPilot from '../../images/paperpilot.png';
import medChat from '../../images/medchat.png';
import webSnap from '../../images/websnap.png';
import pathPerfect from '../../images/pathperfect.png';
import stocks from '../../images/stocks.png';
import gan from '../../images/3dgan.png'
import Ditto from '../Ditto';

function PersonalProjects() {
  const [isModalOpen, setModalOpen] = useState(false);
  
  // Function to handle the click on a project box and open the modal
  const handleProjectBoxClick = () => {
    setModalOpen(true);
  };

  return (
    <div>
      {/* <Ditto></Ditto> */}
      <div className="proj-title">Personal Projects</div>
      <div className="flex-container">
        <ProjectBox project_name={'PaperPilot'} project_description={'Literature search for research papers via approximate nearest neighbors on doc2vec embeddings'} project_image={paperPilot} tech={['Typescript', 'Flask', 'Firebase']} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'MedChat'} project_description={'Facilitating doctor-patient interactions using an application with checklist and chat functionalities'} project_image={medChat} tech={['Flutter', 'Dart', 'Firebase']} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'Stocks Trading Robot'} project_description={'Helping automate the trading process with built-in indicators like SMA and portfolio that tracks current stocks'} project_image={stocks} tech={['Python']} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'WebSnap'} project_description={'Summarize online articles in one paragraph using OpenAI API; previous searches are saved via caching'} project_image={webSnap} tech={['Javascript']} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'PathPerfect'} project_description={'Finding a scenic, round path to plan a jog; path is calculated based on the user\'s preferred distance'} project_image={pathPerfect} tech={['Javascript', 'MongoDB']} onClick={handleProjectBoxClick}></ProjectBox>
        <ProjectBox project_name={'Shape 3DGAN'} project_description={'Trained a generative adversarial network to generate spheres that follows a given distribution of radii'} project_image={gan} tech={['Python', 'Jupyter Notebook']} onClick={handleProjectBoxClick}></ProjectBox>
      </div>

      {/* Render the modal conditionally based on the state */}
      {isModalOpen && <ProjectModal closeModal={() => setModalOpen(false)} />}
    </div>
    
  )
}

export default PersonalProjects
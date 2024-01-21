import { useState } from 'react'
import ProjectModal from './ProjectModal';
import ProjectBox from './ProjectBox';
import paperPilot from '../../images/paperpilot.png';
import medChat from '../../images/MedChat.png';
import webSnap from '../../images/webSnap.png';
import pathPerfect from '../../images/pathperfect.png';
import stocks from '../../images/stocks.png';
import gan from '../../images/3dgan.png'
// import Ditto from '../Ditto';

function PersonalProjects() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currProject, setCurrProject] = useState({name : '', description : '', image : '', links: {}});
  
  // Function to handle the click on a project box and open the modal
  const handleProjectBoxClick = () => {
    setModalOpen(true);
  };

  const changeProject = (name : string, description : string, image : string, links : { [key: string]: string }) => {
    setCurrProject({'name' : name, 'description' : description, 'image' : image, 'links' : links})
  }

  return (
    <div>
      {/* <Ditto></Ditto> */}
      <div className="proj-title">Personal Projects</div>
      <div className="flex-container">
        <ProjectBox project_name={'PaperPilot'} project_description={'Literature search for research papers via approximate nearest neighbors on doc2vec embeddings'} project_image={paperPilot} tech={['Typescript', 'Flask', 'Firebase']} links={{'Github' : 'https://github.com/cs0320-f23/term-project-tfong1-ryhuang-dhan25-eko10'}} onClick={handleProjectBoxClick} changeProject={changeProject}></ProjectBox>
        <ProjectBox project_name={'MedChat'} project_description={'Facilitating doctor-patient interactions using an application with checklist and chat functionalities'} project_image={medChat} tech={['Flutter', 'Dart', 'Firebase']} links={{'Github' : 'https://github.com/huangr0867/MedChat'}} onClick={handleProjectBoxClick} changeProject={changeProject}></ProjectBox>
        <ProjectBox project_name={'Stocks Trading Robot'} project_description={'Helping automate the trading process with built-in indicators like SMA and portfolio that tracks current stocks'} project_image={stocks} tech={['Python']} links={{'Github' : 'https://github.com/huangr0867/TradingBot'}}onClick={handleProjectBoxClick} changeProject={changeProject}></ProjectBox>
        <ProjectBox project_name={'WebSnap'} project_description={'Summarize online articles in one paragraph using OpenAI API; previous searches are saved via caching'} project_image={webSnap} tech={['Javascript']} links={{'Github' : 'https://github.com/huangr0867/webSnap', 'Link' : 'https://64e9257704ddee4d3cbdcf0c--luminous-brioche-1dde41.netlify.app/'}} onClick={handleProjectBoxClick} changeProject={changeProject}></ProjectBox>
        <ProjectBox project_name={'PathPerfect'} project_description={'Finding a scenic, round path to plan a jog; path is calculated based on the user\'s preferred distance'} project_image={pathPerfect} tech={['Javascript', 'MongoDB']} links={{'Github' : 'https://github.com/Eric-04/PathPerfect', 'Devpost' : 'https://devpost.com/software/pathperfect'}} onClick={handleProjectBoxClick} changeProject={changeProject}></ProjectBox>
        <ProjectBox project_name={'Shape 3DGAN'} project_description={'Trained a generative adversarial network to generate spheres that follows a given distribution of radii'} project_image={gan} tech={['Python', 'Jupyter Notebook']} links={{'Github' : 'https://github.com/huangr0867/Shape_3DGAN'}} onClick={handleProjectBoxClick} changeProject={changeProject}></ProjectBox>
      </div>

      {/* Render the modal conditionally based on the state */}
      {isModalOpen && <ProjectModal project={currProject} closeModal={() => setModalOpen(false)} />}
    </div>
    
  )
}

export default PersonalProjects
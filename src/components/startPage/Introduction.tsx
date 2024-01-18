import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoDocumentText } from "react-icons/io5";
import '../../styles/start.css';
import Resume from '../../files/Ryan-Yuki-Huang-Resume.pdf';

function Introduction() {
  return (
    <div className="title-intro">
        <div className="title">
            Ryan Huang
        </div>
        <div className="intro">
            I study computer science <a href="https://www.brown.edu/" target="_blank">@Brown University</a> and am part of the <a href="https://plme.med.brown.edu/" target="_blank">PLME Program</a>. I'm currently interested in software engineering, AI/ML research, and biotech.
        </div>
        <div className="simple-navigation">
            <a href={Resume} target="_blank">
                <div className="icon-text">
                    <IoDocumentText size={24}/>
                    <div>Resume</div>
                </div>
            </a>
            <a href="https://github.com/huangr0867" target="_blank">
                <div className="icon-text">
                  <FaGithub size={22}/>
                  <div>Github</div>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/ryanyukihuang/" target="_blank">
              <div className="icon-text">
                  <FaLinkedin size={22}/>
                  <div>LinkedIn</div>
              </div>
            </a>
        </div>
    </div>
  )
}

export default Introduction
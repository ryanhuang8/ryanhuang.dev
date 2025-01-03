import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { IoDocumentText } from "react-icons/io5";
import "../../styles/start.css";
// import Resume from "../../files/SWE_Resume.pdf";
import ProfilePic from "../../images/larger_pic.png"; // Make sure to import your profile picture

function Introduction() {
  return (
    <div className="title-intro">
      <div className="text-section">
        <div className="title">Ryan Huang</div>
        <div className="intro">
          I study computer science{" "}
          <a href="https://www.brown.edu/" target="_blank">
            @ Brown University
          </a>{" "}
          and am part of the{" "}
          <a href="https://plme.med.brown.edu/" target="_blank">
            PLME Program
          </a>
          . I'm currently interested in software engineering and computer vision research.
        </div>
        <div className="simple-navigation">
          {/* <a href={Resume} target="_blank">
            <div className="icon-text">
              <IoDocumentText size={24} />
              <div className="text-by-icon">Resume</div>
            </div>
          </a> */}
          <a href="https://github.com/ryanhuang8" target="_blank">
            <div className="icon-text">
              <FaGithub size={22} />
              <div className="text-by-icon">Github</div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ryanyukihuang/" target="_blank">
            <div className="icon-text">
              <FaLinkedin size={22} />
              <div className="text-by-icon">LinkedIn</div>
            </div>
          </a>
        </div>
      </div>
      <div className="profile-pic-container">
        <img src={ProfilePic} alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
}

export default Introduction;

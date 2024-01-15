import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoDocumentText } from "react-icons/io5";
import '../../styles/start.css'

function Introduction() {
  return (
    <div className="title-intro">
        <div className="title">
            Ryan Huang
        </div>
        <div className="intro">
            I study computer science @ Brown University and am part of the PLME Program. I'm currently interested in software engineering, AI/ML research, and biotech.
        </div>
        <div className="simple-navigation">
            <a href="src/files/Ryan Yuki Huang Resume.pdf" target="_blank">
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
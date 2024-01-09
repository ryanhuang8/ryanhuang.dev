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
            I study computer science @ Brown University. I'm currently interested in software engineering, AI/ML research, and biotech.
        </div>
        <div className="simple-navigation">
            <a href="huangr0867.github.io">
                <div className="icon-text">
                    <IoDocumentText size={24}/>
                    <div>Resume</div>
                </div>
            </a>
            <a href="huangr0867.github.io">
                <div className="icon-text">
                  <FaGithub size={22}/>
                  <div>Github</div>
                </div>
            </a>
            <a href="huangr0867.github.io">
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
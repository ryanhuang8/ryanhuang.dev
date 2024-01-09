import React from 'react'
import Introduction from '../components/startPage/Introduction'
import PersonalProjects from '../components/startPage/PersonalProjects'
import '../styles/start.css'


function Start() {
  return (
    <div className="container">
        <div className="column">
          <Introduction></Introduction>
          <PersonalProjects></PersonalProjects>
        </div>
    </div>
  )
}

export default Start
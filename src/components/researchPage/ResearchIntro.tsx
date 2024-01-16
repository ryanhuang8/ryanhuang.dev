import React from 'react'
import '../../styles/research.css'
import { AcademiconsGoogleScholarSquare } from './GoogleScholar'

function ResearchIntro() {
  return (
    <div className="title-intro-research">
        <div className="title-research">
          Research
        </div>
        <a className="research-icon" href="https://scholar.google.com/citations?user=hvXdB_QAAAAJ&hl=en" target="_blank">
          <div className="research-icon">
            <AcademiconsGoogleScholarSquare></AcademiconsGoogleScholarSquare>
            <div>Google Scholar</div>
          </div>
        </a>
        
          
    </div>
  )
}

export default ResearchIntro
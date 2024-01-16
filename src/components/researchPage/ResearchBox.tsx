import React from 'react'

interface ResearchBoxProps {
    title : string;
    authors : string[];
    journal : string;
    links : {};

}

function generateNamesDiv(names: string[]): JSX.Element {
    return (
      <div>
        {names.map((name, index) => (
          <React.Fragment key={index}>
            {index > 0 && <br />} {/* Add line break after the first name */}
            {name === 'Ryan Huang' ? <span style={{ fontWeight: 'bold' }}>{name}</span> : name}
          </React.Fragment>
        ))}
      </div>
    );
  }

const ResearchBox : React.FC<ResearchBoxProps> = ({ title, authors, journal, links}) => {
  return (
    <div className="research-box">
        <div className="highlight">
        </div>
        <div className="project-title-research">
            {title}
        </div>
        <div className="research-names">{authors}</div>
        <div className="research-names">{journal}</div>
    </div>
  )
}

export default ResearchBox
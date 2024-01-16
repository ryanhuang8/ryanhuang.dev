import React from 'react'
import { useTheme } from '../ThemeContext'

interface ResearchBoxProps {
    title : string;
    authors : string[];
    journal : string;
    links : { [key: string]: string };
    color : string;
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

const ResearchBox : React.FC<ResearchBoxProps> = ({ title, authors, journal, links, color }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="research-box">
        <div className="highlight" style={{backgroundColor: color}}>
        </div>
        <div className="project-title-research">
            {title}
        </div>
        <div className="research-names">{authors}</div>
        <div className="research-journal">{journal}</div>
        <div>
            {Object.entries(links).map(([key, value]) => (
            <button className={`research-links ${theme}`} key={key} onClick={() => window.open(value, '_blank')} type="button">
                {key}
            </button>
            ))}
        </div>
    </div>
  )
}

export default ResearchBox
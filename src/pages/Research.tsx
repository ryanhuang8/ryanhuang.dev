import React from 'react'
import { useTheme } from '../components/ThemeContext'
import ResearchIntro from '../components/researchPage/ResearchIntro';
import '../styles/research.css'
import ResearchBox from '../components/researchPage/ResearchBox';

function Research() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`container ${theme}`}>
      <div className="column">
        <ResearchIntro/>
        <ResearchBox title="Generative modeling of biological shapes and images using a probabilistic α-shape sampler" authors={['Emily Winn-Nuñez, Hadley Witt, Dhananjay Bhaskar, Ryan Huang, Jonathan Reichner, Ian Wong, Lorin Crawford']} journal="arxiv" links={{'doi' : 'https://doi.org/10.1101/2024.01.09.574919', 'poster' : ''}}/>
      </div>
    </div>
  )
}

export default Research
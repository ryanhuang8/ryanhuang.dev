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
        <ResearchBox title="Generative modeling of biological shapes and images using a probabilistic α-shape sampler" authors={['Emily Winn-Nuñez, Hadley Witt, Dhananjay Bhaskar, Ryan Huang, Jonathan Reichner, Ian Wong, Lorin Crawford']} journal="bioRxiv preprint" links={{'Link' : 'https://doi.org/10.1101/2024.01.09.574919'}} color="#3498db"/>
        <ResearchBox title="Mass Spectrometry Analysis of the Human Brain Sphingolipidome" authors={['Xin Ying Chua, Ryan Huang, Deron Herr, Mitchell KP Lai, Markus R Wenk, Federico Torta']} journal="Alzheimer’s Disease: Methods and Protocols" links={{'Link' : 'https://doi.org/10.1007/978-1-0716-2655-9_12'}} color="#e8bb4c"/>
        <ResearchBox title="The Gut-Skin Microbiota Axis and Its Role in Diabetic Wound Healing—A Review Based on Current Literature" authors={['Patel Bharati Kadamb, Kadamb Haribhai Patel, Ryan Yuki Huang, Chuen Neng Lee, and Shabbir M. Moochhala']} journal="International Journal of Molecular Sciences" links={{'Link' : 'https://doi.org/10.3390/ijms23042375'}} color="#e8bb4c"/>
        <ResearchBox title="Metabolomic Analysis of Skin Malodor-Associated Compounds and Structure-based Prediction of Acetolactate Synthase Selective Sulfonylurea Inhibitors" authors={['Ryan Yuki Huang']} journal="Research Square preprint" links={{'Link' : 'https://doi.org/10.21203/rs.3.rs-1193756/v1'}} color="#e8bb4c"/>
        <ResearchBox title="Quantitative circular flow immunoassays with trained object recognition to detect antibodies to SARS-CoV-2 membrane glycoprotein" authors={['Ryan Yuki Huang, Deron Raymond Herr']} journal="Biochemical and Biophysical Research Communications" links={{'Link' : 'https://doi.org/10.1016/j.bbrc.2021.05.073'}} color="#3498db"/>
        <ResearchBox title="Circulating Antibodies to Skin Bacteria Detected by Serological Lateral Flow Immunoassays Differentially Correlated With Bacterial Abundance" authors={['Ryan Yuki Huang, Chuen Neng Lee, Shabbir Moochhala']} journal="Frontiers in Microbiology" links={{'Link' : 'https://doi.org/10.3389/fmicb.2021.709562'}} color="#e8bb4c"/>
        <ResearchBox title="Manipulation of Alcohol and Short-Chain Fatty Acids in the Metabolome of Commensal and Virulent Klebsiella pneumoniae by Linolenic Acid" authors={['Ryan Yuki Huang, Deron Raymond Herr, Shabbir Moochhala']} journal="Microorganisms" links={{'Link' : 'https://doi.org/10.3390/microorganisms8050773'}} color="#e8bb4c"/>

      </div>
    </div>
  )
}

export default Research
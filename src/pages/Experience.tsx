import { useTheme } from '../components/ThemeContext'
import Resume from '../../src/files/Ryan Huang Resume 2025.pdf'
import { IoDocumentText } from 'react-icons/io5';

function Experience() {
  const { theme, } = useTheme();
  // TODO: Fix experience page later, temporary code to add link to resume
  return (
    <div className={`container ${theme}`}>
      <div style={{ marginTop: '60px' }}>
        Experience
        <a href={Resume} target="_blank">
                  <div className="icon-text">
                      <IoDocumentText size={24}/>
                      <div className="text-by-icon">Resume</div>
                  </div>
        </a>
      </div>
    </div>
  )
}

export default Experience
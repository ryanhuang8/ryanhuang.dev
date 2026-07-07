import Introduction from '../components/startPage/Introduction'
import PersonalProjects from '../components/startPage/PersonalProjects'
import '../styles/start.css'
import { useTheme } from '../components/ThemeContext'
import { usePageMeta } from '../utils/usePageMeta'


function Start() {
  const { theme, } = useTheme();
  usePageMeta();

  return (
    <div className={`container ${theme}`}>
        <div className="column">
          <Introduction></Introduction>
          <PersonalProjects></PersonalProjects>
        </div>
    </div>
  )
}

export default Start
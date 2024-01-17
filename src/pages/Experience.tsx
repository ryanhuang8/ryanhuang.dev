import { useTheme } from '../components/ThemeContext'

function Experience() {
  const { theme, } = useTheme();
  return (
    <div className={`container ${theme}`}>
      Experience
    </div>
  )
}

export default Experience
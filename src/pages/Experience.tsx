import React from 'react'
import { useTheme } from '../components/ThemeContext'

function Experience() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`container ${theme}`}>
      Experience
    </div>
  )
}

export default Experience
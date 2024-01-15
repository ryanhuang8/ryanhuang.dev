import React from 'react'
import { useTheme } from '../components/ThemeContext'

function Research() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`container ${theme}`}>
      Research
    </div>
  )
}

export default Research
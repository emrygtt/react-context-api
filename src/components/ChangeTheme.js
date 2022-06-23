import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const ChangeTheme = () => {

  const { 
    theme,
    toggleTheme
  } = useTheme();

  console.log(theme)
  return (
    <div>
      <div> Active Theme : {theme}</div>
      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  )
}

export default ChangeTheme
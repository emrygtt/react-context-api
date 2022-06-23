import React from 'react'
import { useLang } from '../contexts/LangContext'
import { useTheme } from '../contexts/ThemeContext'

const Footer = () => {

  const {
    theme,
    toggleTheme
  } = useTheme()


  const {
    lang
  } = useLang()
  return (
    <div>
      <hr/>
      Footer
      <div> Active Theme : {theme}</div>
      <div> Active Lang : {lang}</div>
      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  )
}

export default Footer
import React, { useContext } from 'react'
import ChangeLang from './components/ChangeLang'
import ChangeTheme from './components/ChangeTheme'
import Footer from './components/Footer'
import ThemeContext from './contexts/ThemeContext'

export const Container = () => {

  const {
    theme
  } = useContext(ThemeContext)
  return (
    <div className={`container ${theme}`}>
      <ChangeTheme/>
      <hr/>
      <ChangeLang/>
      <hr/>
      <Footer/>
    </div>
  )
}

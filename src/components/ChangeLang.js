import React, { useContext } from 'react'
import LangContext, { useLang } from '../contexts/LangContext'

const ChangeLang = () => {
  const {
    lang,
    setLang
  } = useLang();
  return (
    <div>
      Active Lang : {lang}
      <div>
        <button onClick={() => setLang("tr")}>TR</button>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("de")}>DE</button>
      </div> 
    
    </div>
  )
}

export default ChangeLang
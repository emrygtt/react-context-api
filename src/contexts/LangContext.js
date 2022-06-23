import { createContext, useContext, useState } from "react";

const LangContext = createContext();


export const LangContextProvider = ({children}) => {

  const [lang, setLang] = useState("tr");

  


  return (
    <LangContext.Provider value={{
      lang,
      setLang,
    }}>
      {children}
    </LangContext.Provider>
  )
}


export const useLang = () => {
  return useContext(LangContext)
};


export default LangContext
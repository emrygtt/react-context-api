import { createContext, useContext, useEffect, useState } from "react";

const defaultTheme = localStorage.getItem("theme") || "light"

const ThemeContext = createContext();



export const ThemeContextProvider = ({children}) => {

  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])
  

  const toggleTheme = () => {
    setTheme(prev => prev  === "light" ? "dark" : "light")
  }
  return (
    <ThemeContext.Provider value= {{
      theme,
      setTheme,
      toggleTheme
    }} >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
};

export default ThemeContext
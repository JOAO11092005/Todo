import { createContext , useState } from "react";

export const ThemeContext = createContext({});

interface ThemeProviderProps {
    children: Recat.ReactNode
}

type ThemeName = "light" | "darck"

export const ThemeProvider = ({children}:ThemeProviderProps) => {

    const [theme , setTheme] = useState<ThemeName>("dark");

    const toogleTheme = () => {
        setTheme(prev => prev === "darck" ? "light" : "dark")
    }

    return(
        <ThemeContext.Provider value={{toogleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
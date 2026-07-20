import { createContext, useState } from "react";

export const ThemeContext = createContext({});

interface ThemeProviderProps {
    children: Recat.ReactNode
}

type ThemeName = "light" | "dark"

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [theme, setTheme] = useState<ThemeName>("dark");

    const toggleTheme = () => {
        setTheme((prev) => prev === "dark" ? "light" : "dark")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
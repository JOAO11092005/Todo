import { createContext } from "react";

export type ThemeName = "light" | "dark"

interface themeContextType {
    theme: ThemeName;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<themeContextType>({
    theme: "dark",
    toggleTheme: () => {}
});
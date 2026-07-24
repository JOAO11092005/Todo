import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { themeConfig } from "../../contexts/theme"
interface TodoContainerProps {
    children: React.ReactNode
}
export const TodoContainer = ({children}: TodoContainerProps) => {
    const { theme } = useContext(ThemeContext)
    return (
        <main className={`${themeConfig[theme].layout.backgroundColor} h-screen `}>
            <div className={`${themeConfig[theme].layout.heroImage} h-80 bg-center bg-cover`}>
                <div className='max-w-[43.75rem] m-auto p-8'>
                    {children}
                </div>
            </div>
    </main >
    )
}
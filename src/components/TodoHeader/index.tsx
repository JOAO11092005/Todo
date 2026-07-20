
import { themeConfig } from '../../contexts/theme'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from 'react'
const TodoHeader = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)
  console.log(themeConfig)
  return (
    <header className='flex justify-between max-w-[43.75rem] m-auto mb-6 pt-20'>
      <h1 className='text-white text-[2.5rem] font-bold tracking-[1rem] m-w'>TODO</h1>

      <button className='cursor-pointer' onClick={toggleTheme}>
        <img className='w-8 h-8' src={`${themeConfig[theme].icon}`} alt="Alternar tema" />
      </button>
    </header>
  )
}

export default TodoHeader
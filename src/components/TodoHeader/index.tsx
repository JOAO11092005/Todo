import IconSun from '/images/icon-sun.svg'
import { theme } from '../../contexts/theme'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from 'react'
const TodoHeader = () => {

  const {theme , toogleTheme} = useContext(ThemeContext)

    return(
         <header className='flex justify-between max-w-[43.75rem] m-auto mb-6 pt-20'>
          <h1 className='text-white text-[2.5rem] font-bold tracking-[1rem] m-w'>TODO</h1>

          <button className='cursor-pointer' onClick={toogleTheme}>
            <img className='w-8 h-8' src={IconSun} alt="Alternar tema" />
          </button>
        </header>
    )
}

export default TodoHeader
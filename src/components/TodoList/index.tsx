
import { themeConfig } from "../../contexts/theme"
import { ThemeContext } from "../../contexts/ThemeContext"
import { useContext } from "react"
import iconCheck from '/images/icon-check.svg'
import { type Todo } from "../../hooks/useTodo"

interface TodoListProps {
    todoList: Todo[];
    toggleTodoCompleted: (id: number) => void,
    setFilter: (filter: 'all' | 'active' | 'completed') => void ,
    filter: 'all' | 'active' | 'completed'
    
    clearCompleted: () => void,
    clearTodo: (id:number) => void
}

const TodoList = ({ todoList, toggleTodoCompleted, setFilter, filter , clearCompleted , clearTodo}: TodoListProps) => {


    const { theme } = useContext(ThemeContext)
    return (
        <>
            <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`} >
                <ul>
                    {
                        todoList.map((todo) => (
                            <li className={`p-6 border-b ${themeConfig[theme].todo.borderColor} list-none flex justify-between`} key={todo.id} >
                                <div className='flex itens-center gap-4' >

                                    <span className="w-6 h-6 rounded-full             hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-[1px]">
                                        <button onClick={() => toggleTodoCompleted(todo.id)} className={`w-full h-full border ${themeConfig[theme].todo.borderColor} border rounded-full cursor-pointer ${themeConfig[theme].todo.backgroundColor} ${todo.completed ? "bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]" : ""}`}>
                                            {
                                                todo.completed && (
                                                    <img src={iconCheck} alt="Icone de marcador" className="h-2 m-2 m-auto" />
                                                )
                                            }
                                        </button>
                                    </span>


                                    <p className={`${themeConfig[theme].todo.textColor} ${todo.completed ? "line-through opacity-50" : ""}`}>{todo.text}</p>

                                   
                                </div>
                                 <button onClick={() => clearTodo(todo.id)} className="p-1 hover:bg-gradient-to-b from-[#fafafa] to-[#4a4747] b-r rounded-md cursor-pointer" >
                                        <img src="/Todo/images/icon-cross.svg" alt="Remover Lista" />
                                    </button>
                            </li>
                        ))
                    }
                </ul>

                <div className={`text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}>

                    {todoList.length > 0 ? <p>{todoList.length} Itens total</p> : <p></p>}


                    {/* Modo desktop  */}
                    <div className='hidden sm:flex gap-4'>
                        <button className={`${filter === 'all' ? 'text-bright-blue cursor-pointer': ''} cursor-pointer`} onClick={() => setFilter('all')}>All</button>
                        <button onClick={() => setFilter('active')} className={`cursor-pointer ${theme === 'dark' ?
                            "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-blue"} 
                            ${filter === 'active' ? 'text-bright-blue cursor-pointer': ''}`
                        }  >
                            Active
                        </button>
                        <button onClick={() => setFilter('completed')} className={`cursor-pointer ${theme === 'dark' ?
                            "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-blue"}
                            ${filter === 'completed' ? 'text-bright-blue cursor-pointer': ''}`}>
                            Completed
                        </button>
                    </div>

                    <button onClick={() => clearCompleted()} className={`cursor-pointer ${theme === 'dark' ?
                        "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-blue"}
                            `} >
                        Clear Selected
                    </button>
                </div>

            </div >


            {/* Modo Mobile */}
            <div className={`${themeConfig[theme].todo.backgroundColor} flex justify-center gap-5 py-4 rounded-md mt-4 sm:hidden ${themeConfig[theme].layout.textColor}`}>
                <button className={`${filter === 'all' ? 'text-bright-blue cursor-pointer': ''} cursor-pointer`} onClick={() => setFilter('all')}>All</button>
                <button className={`${filter === 'active' ? 'text-bright-blue cursor-pointer': ''} cursor-pointer`} onClick={() => setFilter('active')}>Active</button>
                <button className={`${filter === 'completed' ? 'text-bright-blue cursor-pointer': ''}`} onClick={() => setFilter('completed')}>Completed</button>
            </div>


        </>
    )
}

export default TodoList
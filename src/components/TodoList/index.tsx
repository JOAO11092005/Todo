const TodoList = () => {
    const todos = [
        { id: 1, text: 'Todo 1' },
        { id: 2, text: 'Todo 2' },
        { id: 3, text: 'Todo 3' }
    ]
    return (
        <div className='bg-neutral-very-dark-desaturated-blue rounded-md '>
            <ul>
                {
                    todos.map((todo) => (
                        <li className='p-6 border-b border-neutral-very-dark-grayish-blue list-none' key={todo.id}>
                            <div className='flex itens-center gap-4'>
                                <button className='w-6 h-6 border rounded-full cursor-pointer'></button>
                                <p className='text-neutral-very-light-gray'>{todo.text}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className='flex justify-between p-4 text-neutral-very-light-grayish-blue'>
                <p>{todos.length} itens total</p>

                <div className='flex gap-3'>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>

                <button>Clear Selected</button>
            </div>
        </div>
    )
}

export default TodoList
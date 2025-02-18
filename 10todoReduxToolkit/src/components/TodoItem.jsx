import { useSelector, useDispatch } from "react-redux"
import { removeTodo, editTodo } from "../features/todo/todoSlice"
import { useState } from "react" 

function TodoItem() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [editingId, setEditingId] = useState(null)
  const [editedText, setEditedText] = useState('')

  const handleEdit = (todo) => {
    setEditingId(todo.id)
    setEditedText(todo.text)
  }

  const handleUpdate = () => {
    if(editedText.trim()) {
      dispatch(editTodo({id: editingId, text: editedText}))
      setEditingId(null)
      setEditedText('')
    }
  }

  return (
    <>
    <div>---</div>
    <ul className="list-none px-4 sm:px-0 transition-all duration-300 ease-in-out">
        {todos.map((todo) => (
          <li
            className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-zinc-800 px-4 py-2 rounded gap-2 transition-all duration-300 ease-in-out"
            key={todo.id}
          >
            {editingId === todo.id ? (
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto transition-all duration-300 ease-in-out">
                  <input
                   type="text" 
                   value={editedText}
                   onChange={(e) => setEditedText(e.target.value)} 
                   className="w-full sm:w-auto bg-zinc-700 text-white px-2 py-1 rounded transition-all duration-300 ease-in-out"
                  />
                  <button 
                  onClick={handleUpdate} 
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md transition-all duration-300 ease-in-out" 
                  > Save </button>
              </div>
            ) : (
              <div className='text-white break-all transition-all duration-300 ease-in-out'>{todo.text}</div>
            )}
            <div className="flex gap-2 w-full sm:w-auto justify-end transition-all duration-300 ease-in-out">
              {editingId !== todo.id && (
                <button
                 onClick={() => handleEdit(todo)} 
                 className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md transition-all duration-300 ease-in-out">
                  Edit
                </button>
              )}
              <button
               onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md transition-all duration-300 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoItem
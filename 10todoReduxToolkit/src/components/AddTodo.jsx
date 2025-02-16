import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


  return (
    <form onSubmit={addTodoHandler} className="flex flex-col sm:flex-row gap-3 mt-12 px-4 sm:px-0 transition-all duration-300 ease-in-out">
      <input
        type="text"
        className="flex-1 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-all duration-300 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="w-full sm:w-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-all duration-300 ease-in-out"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
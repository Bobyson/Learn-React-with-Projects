import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  
  const increase = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  const decrease = () => {
    setCounter(prevCounter => Math.max(0, prevCounter - 1));
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen bg-gray-900 text-white'>
        <h1 className='text-3xl text-balance tracking-tighter font-semibold mb-4'>Counter</h1>
        <div className='flex gap-4'>
        <button
            onClick={decrease}
            className='bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-medium transition'
            >-</button>
            <h2 className='text-5xl font-bold mb-6'>{counter}</h2>
            <button 
            onClick={increase}
            className='bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium transition'
            >+</button>
            
        </div>
      </div>
    </>
  )
}

export default App

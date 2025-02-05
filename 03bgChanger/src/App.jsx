import { useState } from "react"


function App() {
  const [color, setColor] = useState("green")
  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
            className="outline-none bg-blue-500 px-4 py-1 rounded-full text-white cursor-pointer"
            onClick={() => setColor('blue')}
            >Blue</button>
            <button 
            className="outline-none bg-green-500 px-4 py-1 rounded-full text-white cursor-pointer"
            onClick={() => setColor('green')}
            >Green</button>
            <button 
            className="outline-none bg-red-500 px-4 py-1 rounded-full text-white cursor-pointer"
            onClick={() => setColor('red')}
            >Red</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

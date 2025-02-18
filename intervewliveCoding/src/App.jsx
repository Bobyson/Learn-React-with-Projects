import { useState } from 'react'

import './App.css'
import Counter from './component/Counter'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <div>
        <h1>Counter</h1>
        <Counter setCount={setCount} count={count}/>
        
      </div>
      
    </>
  )
}

export default App

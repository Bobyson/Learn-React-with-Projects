import Card from './components/Card'
import './App.css'

function App() {
  
  const user1 = {
    name: "Some woman",
    description: "taking photo with camera",
  };

  const user2 = {
    name: "2nd",
    description: "taking photo with camera",
  };


  return (
    <>
      <Card user={user1}/>
      <Card user={user2}/>
    </>
  )
}

export default App

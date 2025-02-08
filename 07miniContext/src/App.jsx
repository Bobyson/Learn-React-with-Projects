import Login from './components/Login'
import Profile from './components/Profile'
import UseContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UseContextProvider>
      <h1>Context Course</h1>
      <Login />
      <Profile />
    </UseContextProvider>
  )
}

export default App

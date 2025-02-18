import { useDispatch } from 'react-redux' 
import { useEffect } from 'react'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import './App.css'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logout())
        }
      })
      .catch(() => {
        // Silently handle the guest user error by dispatching logout
        dispatch(logout())
      })
  }, [dispatch])

  return (
    <ThemeProvider>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-50'>
        <div className='w-full block'>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

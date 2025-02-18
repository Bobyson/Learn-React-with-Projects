import { Container, Logo, LogoutBtn, ThemeButton } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import LogoutBtn from './LogoutBtn'

function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    }, 
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Get Started',
      slug: '/signup',
      active: !authStatus,
    }, 
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ]

  return (
    <header className='py-4 shadow bg-white dark:bg-gray-900 transition-colors duration-200'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link to='/' className='hover:opacity-80 transition-opacity'>
              <Logo />
            </Link>
          </div>
          <ul className='flex items-center gap-2'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-block px-6 py-2 text-gray-700 dark:text-gray-200 font-medium duration-200 hover:bg-cyan-400/10 rounded-lg transition-colors'
                >{item.name}</button>
              </li>
            ) : null
            )}
            <li>
              <ThemeButton />
            </li>
            {authStatus && (
              <li className='ml-2'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
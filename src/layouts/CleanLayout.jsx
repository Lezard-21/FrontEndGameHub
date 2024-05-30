import { Outlet } from 'react-router-dom'
import NavBarLogin from '../components/NavBarLogin'
// import NavBar from '../components/NavBar'

const CleanLayout = () => {
  return (
    <main className='relative min-h-screen w-full max-w-xl mx-auto'>
      <NavBarLogin />
      <Outlet />
    </main>
  )
}

export default CleanLayout

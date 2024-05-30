import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const HomeLayout = () => {
  return (
    <main className='relative min-h-screen w-full max-w-xl mx-auto'>
      <NavBar />
      <Outlet />
    </main>
  )
}

export default HomeLayout

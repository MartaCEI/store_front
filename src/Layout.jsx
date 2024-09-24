
import Footer from './components/Footer'
import Header from './components/Header'
import '@/css/App.css'
import { Outlet } from 'react-router-dom'

function Layout() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

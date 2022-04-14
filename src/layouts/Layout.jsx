  // react-router-dom
import { Outlet } from 'react-router-dom'

// componentes
import Header from '../components/Header'


const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>

  )
}

export default Layout
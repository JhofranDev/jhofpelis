  // react-router
import { Outlet } from 'react-router-dom'

// componentes
import Header from '../components/Header'

// multimedia
import logo from '../images/logo.png'

// iconos de la libreria react-icons https://react-icons.github.io/react-icons/
// import { GoHome } from 'react-icons/go';


const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>

  )
}

export default Layout
// react-router
import { Outlet, Link } from 'react-router-dom'

// multimedia
import logo from '../images/logo.png'

// iconos de la libreria react-icons https://react-icons.github.io/react-icons/
// import { GoHome } from 'react-icons/go';


const Layout = () => {
  return (
    <div>
      <header className='bg-black flex justify-between items-center px-10 h-[8vh]'>
        <div className='flex items-center'>
          <img src={logo} alt="logo de jhofpelis" className="" />
          <nav className="h-[40px] pt-3">
            <ul className="flex ">
              <li className="text-white ml-5 font-medium text-sm cursor-pointer hover:border-b-2"><Link to='/'>INICIO</Link></li>
              <li className="text-white ml-5 font-medium text-sm cursor-pointer hover:border-b-2"><Link to='/favorites'>FAVORITOS</Link></li>
            </ul>
          </nav>
        </div>
        <Link to='/session'><button className="text-white font-medium text-sm bg-zinc-600 py-3 px-6 rounded-md hover:bg-zinc-700" >INICIAR SESIÓN</button></Link>
      </header>

      <Outlet />
    </div>

  )
}

export default Layout
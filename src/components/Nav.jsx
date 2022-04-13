// componentes
import ListItem from './ListItem'

// multimedia
import logo from '../images/logo.png'


const Nav = () => {
  return (
    <div className='flex items-center'>

      <img src={logo} alt="logo de jhofpelis" />

      <nav>
        <ul className='flex'>
          <ListItem to='/' text='INICIO' />
          <ListItem to='/favorites' text='FAVORITOS' />
        </ul>
      </nav>

    </div>
  )
}

export default Nav
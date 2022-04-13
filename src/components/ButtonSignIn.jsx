// react-router
import { Link } from 'react-router-dom'


const ButtonSignIn = () => {
  return (
    <Link to='/session'>
      <button 
        className='
          py-3 px-6 
          rounded-md
          font-medium text-sm text-white bg-zinc-600 
          hover:bg-zinc-700
        '
      >INICIAR SESIÓN</button>
    </Link>
  )
}

export default ButtonSignIn
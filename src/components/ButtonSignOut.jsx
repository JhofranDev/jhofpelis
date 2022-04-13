import { useNavigate } from "react-router-dom";

const ButtonSignOut = () => {

  let navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear()
    window.open(`http://localhost:3000/`, '_self')
  }

  return (
    <button 
      className='
        py-3 px-6 
        rounded-md
        font-medium text-sm text-white bg-zinc-600 
        hover:bg-zinc-700
      '
      onClick={handleClick}
    >CERRAR SESIÓN</button>
  )
}

export default ButtonSignOut
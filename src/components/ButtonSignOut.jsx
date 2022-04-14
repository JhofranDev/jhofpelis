

const ButtonSignOut = () => {

  const handleClick = () => {
    localStorage.clear()
    window.open(`https://strong-mousse-2caad7.netlify.app/`, '_self')
  }

  return (
    <button 
      className='
        py-3 px-6 
        rounded-md
        hover:bg-zinc-700
        font-medium text-sm text-white bg-zinc-600 
      '
      onClick={handleClick}
    >CERRAR SESIÓN</button>
  )
}

export default ButtonSignOut
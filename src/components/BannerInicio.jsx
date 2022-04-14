

const BannerInicio = ({ validated, setValidated }) => {

  const handleClick = async () => {
    try {
      const token = localStorage.getItem('TokenTemporal')
      const url = 'https://api.themoviedb.org/3/authentication/session/new?api_key=f05e97a11aba1268670bfd11062aba02'

      const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ request_token: token })   
      })

      const request  = await response.json()

      localStorage.setItem('session', request['session_id'])
      
    } catch (err) {
      console.log(err)
    }
    
    localStorage.setItem('validated', 0)
    localStorage.setItem('initiated', 1)
    setValidated(0)
    window.open(`https://strong-mousse-2caad7.netlify.app/`, '_self')
  }

  return (
    <>
      {validated === 1 && 
        <>
          <div className='absolute top-0 left-0 w-full h-screen bg-black/80 z-10'>

          </div>

          <div className='absolute top-[10%] left-[43%] z-20 bg-zinc-600 p-10 rounded-lg text-center'>

            <h2 className='text-xl font-medium text-white mb-5'>
              Bien! Ya inicio sesión
            </h2>
            
            <button 
              className='
                py-2 px-5
                rounded-md
                font-medium text-sm text-white bg-red-600 
                hover:bg-red-700
              '
              onClick={handleClick}
            >VOLVER</button>
            
          </div>
        </>
      }
    </>
  )
}

export default BannerInicio
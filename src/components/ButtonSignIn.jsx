import { useState, useEffect } from 'react'


const ButtonSignIn = () => {

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const token = localStorage.getItem('Token')

        if (token === '' || !token) {
          return 
        }

        const url = 'https://api.themoviedb.org/3/authentication/session/new?api_key=f05e97a11aba1268670bfd11062aba02'

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ request_token: token })
        }

        const response = await fetch(url, requestOptions)
        const request = response.json()
        console.log(request)

      } catch (err) {
        console.log('entre aca');
        console.log(err)
      }

    }

    getPopularMovies()
  }, [])

  const handleClick = async () => {
    try {
      const url = 'https://api.themoviedb.org/3/authentication/token/new?api_key=f05e97a11aba1268670bfd11062aba02'
      const response = await fetch(url)
      const request  = await response.json()
      const requestToken = request['request_token']
      localStorage.setItem('TokenTemporal', requestToken)
      window.open(`https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=https://strong-mousse-2caad7.netlify.app/`, '_self')
      const tokenT = localStorage.getItem('TokenTemporal')
      localStorage.setItem('Token', tokenT)

    } catch (err) {
      console.log('entre aca');
      console.log(err)
    }
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
    >INICIAR SESIÓN</button>
  )
}

export default ButtonSignIn
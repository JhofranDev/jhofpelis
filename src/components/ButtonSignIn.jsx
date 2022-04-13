import { useState, useEffect } from 'react'


const ButtonSignIn = () => {

  const handleClick = async () => {

    try {
      const url = 'https://api.themoviedb.org/3/authentication/token/new?api_key=f05e97a11aba1268670bfd11062aba02'
      const response = await fetch(url)
      const request  = await response.json()
      const requestToken = request['request_token']

      localStorage.setItem('TokenTemporal', requestToken)
      localStorage.setItem('validated', 1)

      window.open(`https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/`, '_self')
      
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
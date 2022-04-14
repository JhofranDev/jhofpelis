import { useState, useEffect } from 'react'

// componentes
import Nav from './Nav'
import ButtonSignIn from './ButtonSignIn'
import ButtonSignOut from './ButtonSignOut'


const Header = () => {

  const [ validated, setValidated ] = useState(0)

  useEffect(() => {
    const validation = localStorage.getItem('initiated')
    if (validation && validation == '1') {
      setValidated(1)
    } else {
      setValidated(0)
    }
  }, [])

  return (
    <header className='px-10  h-[8vh] w-full fixed z-10 bg-black flex justify-between items-center'>
      <Nav />

      {validated === 1? 
        <ButtonSignOut setValidated={setValidated} /> 
      : 
        <ButtonSignIn setValidated={setValidated} />
      }

    </header>
  )
}

export default Header
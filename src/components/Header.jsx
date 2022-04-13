import { useState, useEffect } from 'react'

// componentes
import Nav from './Nav'
import ButtonSignIn from './ButtonSignIn'
import ButtonSignOut from './ButtonSignOut'


const Header = () => {

  const [ validated, setValidated ] = useState(false)

  // useEffect(() => {
  //   const getValidation = () => {
  //     const token = localStorage.getItem('Token')
  //     if(token) {

  //     }
  //   }

  //   getValidation()
  // }, [])

  return (
    <header 
      className='
        px-10 
        h-[8vh] w-full
        fixed z-10
        bg-black 
        flex justify-between items-center 
      '
    >

      <Nav />

      {validated ? 
        <ButtonSignOut setValidated={setValidated} /> 
      : 
        <ButtonSignIn setValidated={setValidated} />
      }

    </header>
  )
}

export default Header
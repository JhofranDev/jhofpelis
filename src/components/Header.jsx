// componentes
import Nav from './Nav'
import ButtonSignIn from './ButtonSignIn'


const Header = () => {
  return (
    <header 
      className='
        px-10 
        h-[8vh]
        bg-black 
        flex justify-between items-center 
      '
    >

      <Nav />
      <ButtonSignIn />

    </header>
  )
}

export default Header
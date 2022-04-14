import React from 'react'

// react-router-dom
import { Link } from 'react-router-dom'

// componentes
import ButtonSignIn from './ButtonSignIn'

const BannerDetail = ({ validated }) => {
  return (
    <>
      {validated === 0 && 
        <>        
          <div className='p-10 bg-zinc-800 text-white text-center absolute 
            top-[300px] left-[40%] z-20'>

            <h1 className='text-2xl text-white font-medium mb-10'>
              DEBES INICIAR SESIÓN
            </h1>

            <div>
              <ButtonSignIn />
              
              <Link to={`/`}>
                <button className='py-3 px-6 ml-5 rounded-md font-medium text-sm text-white bg-red-600 hover:bg-red-700'>
                  VOLVER
                </button>
              </Link>
            </div>

          </div>

          <div className='bg-black/80 h-screen w-full absolute top-0 left-0 z-10'>

          </div>
        </>
      }
    </>
  )
}

export default BannerDetail
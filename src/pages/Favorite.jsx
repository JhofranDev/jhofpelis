import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'


const Favorite = () => {

  const [ validated, setValidated ] = useState(false)

  useEffect(() => {
    const getValidation = () => {
      const validation = JSON.parse(localStorage.getItem('validated'))
      setValidated(validation)
    }

    getValidation()
  }, [])

  return (
    <main className="min-h-screen bg-black relative">
      <section className="pt-32 px-16" >
        <h1 className="text-4xl text-white font-medium border-b-2 pb-5">Mi lista</h1>
      </section>

      {!validated && 
        <>        
          <div className="bg-zinc-600 text-white p-10 text-center absolute top-[30%] left-[40%] z-20">
            <h1 className='text-2xl text-white font-medium mb-10'>DEBES INICIAR SESIÓN</h1>
            <div>

              <button 
                className='
                  py-3 px-6 
                  rounded-md
                  font-medium text-sm text-white bg-zinc-700 
                  hover:bg-zinc-900
                  mr-5
                '
              >INICIAR SESIÓN</button>

              <Link to='/'>
                <button 
                  className='
                    py-3 px-6 
                    rounded-md
                    font-medium text-sm text-white bg-red-600 
                    hover:bg-red-700
                  '
                >VOLVER</button>
              </Link>

            </div>

          </div>

          <div className="bg-black/80 h-screen w-full absolute top-0 left-0 z-10">
          </div>
        </>
      }
    </main>
  )
}

export default Favorite
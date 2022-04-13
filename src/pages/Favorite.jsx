import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import FavoriteCard from '../components/FavoriteCard'


const Favorite = () => {

  const [ validated, setValidated ] = useState(0)
  const [ favorites, setFavorites ] = useState([])

  useEffect(() => {
    const validation = localStorage.getItem('initiated')
    if (validation && validation == '1') {
      setValidated(1)
    } else {
      setValidated(0)
    }
  }, [])

  useEffect(() => {
    const getFavorite = async () => {
      try {
        const session = localStorage.getItem('session')
        const url = `https://api.themoviedb.org/3/account/550/favorite/movies?api_key=f05e97a11aba1268670bfd11062aba02&language=es-MX&sort_by=created_at.asc&page=1&session_id=${session}`
        const response = await fetch(url)
        const request  = await response.json()
        setFavorites(request.results)

      } catch (err) {
        console.log('entre aca');
        console.log(err)
      }

    }

    getFavorite()
  }, [])

  return (
    <main className="min-h-screen bg-black relative">
      <section className="pt-32 px-16" >
        <h1 className="text-4xl text-white font-medium border-b-2 pb-5">Mi lista</h1>
        <div className='flex flex-wrap gap-5 justify-center mt-10'>
          {favorites.map( (favorite, i) => (
            <FavoriteCard 
              key={i}
              movie={favorite}
            />
          ))}
        </div>
      </section>

      {validated === 0 && 
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
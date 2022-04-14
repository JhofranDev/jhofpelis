import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

// componentes
import FavoriteCard from '../components/FavoriteCard'
import BannerDetail from '../components/BannerDetail';


const Favorite = () => {

  const [ validated, setValidated ] = useState(0)
  const [ favorites, setFavorites ] = useState([])

  useEffect(() => {
    const validation = localStorage.getItem('initiated')
    if (validation && validation == '1') {
      setValidated(1)
    } else {
      setValidated(0)
      return
    }

    const getFavorite = async () => {
      try {
        const url = `https://api.themoviedb.org/3/list/8198609?api_key=f05e97a11aba1268670bfd11062aba02&language=es-MX`
        const response = await fetch(url)
        const request  = await response.json()
        setFavorites(request.items)
      } catch (err) {
        console.log(err)
      }
  
    }
  
    getFavorite()

  }, [])

  return (
    <main className="min-h-screen bg-black relative">
      <section className="pt-32 px-16" >

        <h1 className="text-4xl text-white font-medium border-b-2 pb-5">
          Mi lista
        </h1>

        <div className='flex flex-wrap gap-5 justify-center mt-10'>
          {/* Peliculas favoritas */}
          {favorites.map( (favorite, i) => (
            <FavoriteCard 
              key={i}
              movie={favorite}
            />
          ))}
        </div>
        
      </section>

      <BannerDetail validated={validated} />
    </main>
  )
}

export default Favorite
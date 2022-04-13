import { useState, useEffect } from 'react'

// componentes
import CoverPage from '../components/CoverPage'
import SectionMovie from '../components/SectionMovie'

// multimedia
import card from '../images/card1.jpg'

const Home = () => {

  const [movie, setMovie] = useState({})
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=f05e97a11aba1268670bfd11062aba02&language=es-MX&page=1'
        const response = await fetch(url)
        const request  = await response.json()
        const results  = request.results
        const movies   = results.filter(movie => movie.overview != '')

        setMovies(movies)
        setMovie(movies[0])
      } catch (err) {
        console.log('entre aca');
        console.log(err)
      }

    }

    getPopularMovies()
  }, [])

  return (
    <main className="bg-black">
      <CoverPage movies={movies} movie={movie} setMovie={setMovie} />

      <article>
        {/* <section>
          <h2 className='text-white font-bold text-lg pl-10'>Tus Favoritas</h2>
          <div className=' bg-black h-[220px] w-full flex justify-around items-center'>
            <div className='h-[182px] w-[332px] hover:h-[185px] hover:w-[335px] hover:border-4 border-white/70 bg-black rounded'>
              <img src={card} alt='Fondo' className='h-full w-full' />
            </div>
            <div className='h-[182px] w-[332px] hover:h-[185px] hover:w-[335px] hover:border-4 border-white/70 bg-black rounded'>
              <img src={card} alt='Fondo' className='h-full w-full' />
            </div>
          </div>
        </section> */}
        <SectionMovie movies={movies}/>
      </article>
    </main>
  )
}

export default Home
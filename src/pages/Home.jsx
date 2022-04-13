import { useState, useEffect } from 'react'

import { useNavigate } from "react-router-dom";


// import { Link } from 'react-router-dom'

// componentes
import CoverPage from '../components/CoverPage'
import SectionMovie from '../components/SectionMovie'

// multimedia
import card from '../images/card1.jpg'

const Home = () => {

  const [movie, setMovie] = useState({})
  const [movies, setMovies] = useState([])
  const [validated, setValidated] = useState(0)
  let navigate = useNavigate();
  
  useEffect(() => {
    const validation = localStorage.getItem('validated')
    if (validation && validation == '1') {
      setValidated(1)
    } else {
      setValidated(0)
    }
  }, [])

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

  const handleClick = async () => {
    try {
      const token = localStorage.getItem('TokenTemporal')
      
      const url = 'https://api.themoviedb.org/3/authentication/session/new?api_key=f05e97a11aba1268670bfd11062aba02'

      const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ request_token: token })   
      })
      const request  = await response.json()
      localStorage.setItem('session', request['session_id'])
      
    } catch (err) {
      console.log('entre aca');
      console.log(err)
    }
    
    localStorage.setItem('validated', 0)
    localStorage.setItem('initiated', 1)
    setValidated(0)
    window.open(`http://localhost:3000/`, '_self')
  }

  return (
    <main className="bg-black relative">
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

      {validated === 1 && 
        <>
          <div
            className='
              absolute top-0 left-0
              w-full h-screen
              bg-black/80
              z-10
            '
          ></div>

          <div
            className='
              absolute top-[10%] left-[43%] z-20
              bg-zinc-600
              p-10 rounded-lg text-center
            '
          >
            <h2 className='text-xl font-medium text-white mb-5'>Bien! Ya inicio sesión</h2>
              <button 
                className='
                  py-2 px-5
                  rounded-md
                  font-medium text-sm text-white bg-red-600 
                  hover:bg-red-700
                '
                onClick={handleClick}
              >VOLVER</button>
          </div>
        </>
      }

    </main>
  )
}

export default Home
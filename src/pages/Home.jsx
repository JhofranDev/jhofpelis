import { useState, useEffect } from 'react'

// componentes
import CoverPage from '../components/CoverPage'
import SectionMovie from '../components/SectionMovie'
import BannerInicio from '../components/BannerInicio'


const Home = () => {

  const [movie, setMovie] = useState({})
  const [movies, setMovies] = useState([])
  const [validated, setValidated] = useState(0)
  
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
        console.log(err)
      }

    }

    getPopularMovies()
  }, [])

  return (
    <main className="bg-black relative">
      <CoverPage movies={movies} movie={movie} setMovie={setMovie} />
      
      <SectionMovie movies={movies}/>

      <BannerInicio 
        validated={validated} 
        setValidated={setValidated} 
      />

    </main>
  )
}

export default Home
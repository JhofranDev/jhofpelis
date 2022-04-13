// componentes
import CoverCard  from './CoverCard'

// multimedia
import card from '../images/card1.jpg'


const Featured = ({ movies, setMovie }) => {

  const featuredMovies = movies.filter((movie, i) => i < 5)
  const updateMovie = (i) => {
    setMovie(featuredMovies[i])
  }

  return (
    <div 
      className='
        h-[220px] w-full   
        absolute bottom-0 left-0
        flex justify-around items-center
        bg-gradient-to-b from-black/10 via-black/70 to-black 
      '
    >

      {featuredMovies.map((movie, i) => (
        <CoverCard
          key={i}
          updateMovie={updateMovie}
          id={i}
          movie={movie}
        />
      ))}
    </div>
  )
}

export default Featured
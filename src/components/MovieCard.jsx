import { Link } from 'react-router-dom'


const MovieCard = ({ movie }) => {
  return (
    <div className='bg-black w-[300px] h-[460px] rounded border-white/70 hover:border-4'>

    <Link to={`/detail/${movie.id}`} >
      <img 
        alt={movie.title} 
        className='h-full w-full' 
        src={`https://image.tmdb.org/t/p/original${movie['poster_path']}`} 
      />
    </Link>

  </div>
  )
}

export default MovieCard
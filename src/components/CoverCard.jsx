// react-router-dom
import { Link } from 'react-router-dom'


const CoverCard = ({ updateMovie, id, movie }) => {

  const handleMousedEnter = (e) => {
    updateMovie(id)
  }

  return (
    <div 
      className='
        bg-black 
        h-[182px] w-[332px] 
        rounded border-white/70
        hover:h-[185px] hover:w-[335px] hover:border-4 
      '
      onMouseEnter={handleMousedEnter}
    >

      <Link to={`/detail/${movie.id}`} >
        <img 
          className='h-full w-full' 
          alt={`Poster de ${movie.title}`} 
          src={`https://image.tmdb.org/t/p/original${movie['backdrop_path']}`}
        />
      </Link>

    </div>
  )
}

export default CoverCard
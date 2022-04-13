import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div 
    className='
      bg-black 
      w-[300px] h-[460px]
      rounded border-white/70
      hover:border-4 
    '
  >
    <img 
      src={`https://image.tmdb.org/t/p/original${movie['poster_path']}`} 
      alt={movie.title} 
      className='h-full w-full' />
  </div>
  )
}

export default MovieCard
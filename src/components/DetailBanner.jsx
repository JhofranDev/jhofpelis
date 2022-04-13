import React from 'react'

const DetailBanner = ({ movie, handleClickSave }) => {
  return (
    <div 
     className='
      px-10
      w-[50%] h-[300px]
      absolute top-[30%] left-0
      flex flex-col justify-center items-start
      bg-gradient-to-r from-black via-black/50 to-black/10
      text-white
    '
    >
      <h1 className='text-6xl font-bebas'>{movie.title}</h1>
      <h2 className='text-xl font-bebas font-medium'>{ movie.tagline }</h2>
      <div>
        <span className='mr-5 font-medium text-sm text-gray-400'>Lanzamiento: {movie['release_date']}</span>
        <span className='mr-5 font-medium text-sm text-gray-300'>Popularidad: {movie.popularity}</span>
        <span className='mr-5 font-medium text-sm text-gray-200'>Promedio Votos: {movie['vote_average']}</span>
      </div>
      <p className='font-medium text-sm'>{movie.overview}</p>

      <button 
        className='
          bg-green-500 py-2 px-5 rounded-md text-sm font-medium my-5 hover:bg-green-700
        '
        onClick={handleClickSave}
      >GUARDAR</button>

      <button 
        className='
          bg-zinc-500 py-2 px-5 rounded-md text-sm font-medium my-5 hover:bg-zinc-700 hidden
        '
      >QUITAR</button>
    </div>
  )
}

export default DetailBanner
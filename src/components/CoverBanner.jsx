

const CoverBanner = ({ movie }) => {
  return (
    <div 
     className='
      absolute top-[20%] left-0
      w-[40%] h-[300px]
      flex flex-col justify-center
      pl-10
      bg-gradient-to-r from-black via-black/50 to-black/1
      text-white
    '
    >
      <h1 className='text-6xl font-bebas'>{movie.title}</h1>
      <div>
        <span className='mr-5 font-medium text-sm text-gray-400'>Lanzamiento: {movie['release_date']}</span>
        <span className='mr-5 font-medium text-sm text-gray-300'>Popularidad: {movie.popularity}</span>
        <span className='mr-5 font-medium text-sm text-gray-200'>Promedio Votos: {movie['vote_average']}</span>
      </div>
    </div>
  )
}

export default CoverBanner


const CoverImage = ({ movie }) => {
  return (
    <div className='h-screen'>
      <img 
        className='w-full' 
        src={`https://image.tmdb.org/t/p/original${movie['poster_path']}`} 
        alt={`Poster de ${movie.title}`} />
    </div>
  )
}

export default CoverImage


const CoverImage = ({ movie }) => {
  return (
    <div className='h-screen'>
      <img 
        className='w-full' 
        alt={`Poster de ${movie.title}`} 
        src={`https://image.tmdb.org/t/p/original${movie['poster_path']}`} 
      />
    </div>
  )
}

export default CoverImage
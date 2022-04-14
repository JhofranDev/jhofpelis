

const DetailImage = ({ movie }) => {
  return (
    <img 
      alt={`Poster de ${movie.title}`} 
      className='w-full min-h-screen overflow-hidden' 
      src={`https://image.tmdb.org/t/p/original${movie['poster_path']}`} 
    />
  )
}

export default DetailImage



const DetailImage = ({ movie }) => {

  return (
    <img 
      className='w-full min-h-screen overflow-hidden' 
      src={`https://image.tmdb.org/t/p/original${movie['poster_path']}`} 
      alt={`Poster de ${movie.title}`} 
    />
  )
}

export default DetailImage
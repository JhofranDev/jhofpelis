// componentes
import Featured from './Featured'
import CoverImage from './CoverImage'
import CoverBanner from './CoverBanner'


const CoverPage = ({ movies, movie, setMovie }) => {

  return (
    <article className='relative min-h-[92vh] overflow-hidden'>

      <CoverImage movie={movie}/>
      <CoverBanner movie={movie} />
      <Featured movies={movies} setMovie={setMovie}/>
    </article>
  )
}

export default CoverPage
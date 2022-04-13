// componentes
import MovieCard from "./MovieCard"

const SectionMovie = ({ movies }) => {
  return (
    <section className="px-10 pb-10">
      <h2 className='text-white font-bold text-lg pl-10 mb-5'>Populares</h2>
      <div className='flex flex-wrap justify-center gap-5'>
        {movies.map((movie, i) => (
          <MovieCard 
            key={i}
            movie={movie}
          />
        ))}
      </div>
    </section>
  )
}

export default SectionMovie
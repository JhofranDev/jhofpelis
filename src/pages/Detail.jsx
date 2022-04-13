import { useState, useEffect } from 'react'

// react-router-dom
import { useParams, Link } from "react-router-dom";

// componentes
import DetailImage from '../components/DetailImage'
import DetailBanner from '../components/DetailBanner'
import ReviewCard from '../components/ReviewCard';


const Detail = () => {

  const [movieDetail, setMovieDetail] = useState({})
  const [reviews, setReviews] = useState([])
  const [ validated, setValidated ] = useState(1)
  let { id } = useParams()

  useEffect(() => {
    const getDetailMovie = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=f05e97a11aba1268670bfd11062aba02&language=es-MX`
        const response = await fetch(url)
        const request  = await response.json()

        setMovieDetail(request)
      } catch (err) {
        console.log('entre aca')
        console.log(err)
      }

    }

    getDetailMovie()
  }, [])

  useEffect(() => {
    const getReviewMovie = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f05e97a11aba1268670bfd11062aba02&language=en-US&page=1`
        const response = await fetch(url)
        const request  = await response.json()

        setReviews(request.results)

      } catch (err) {
        console.log('entre aca 2')
        console.log(err)
      }

    }

    getReviewMovie()
  }, [])

  const handleClickSave = async () => {
    const validation = localStorage.getItem('initiated')
    if (validation && validation == '1') {
      setValidated(1)
    } else {
      setValidated(0)
      return
    }
    
    try {
      const session = localStorage.getItem('session')
      const url = `https://api.themoviedb.org/3/account/${id}/favorite?api_key=f05e97a11aba1268670bfd11062aba02&session_id=${session}`

      const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({ 
          media_type: "movie",
          media_id: id,
          favorite: true
        })   
      })
      const request  = await response.json()
      console.log(request['status_message'])

    } catch (err) {
      console.log('entre aca');
      console.log(err)
    }
  }

  

  return (
    <main className="min-h-screen bg-black relative">
      <article className="max-h-[70vh] bg-black relative overflow-hidden">
        <DetailImage movie={movieDetail} />
        <DetailBanner movie={movieDetail} handleClickSave={handleClickSave} />
      </article>
      <section className="bg-black flex flex-col gap-5 p-10">
        <h2 className="text-white text-xl font-medium border-b-2 w-full pb-2">Reviews</h2>
        {reviews.map((review, i) => (
          <ReviewCard 
            key={i}
            review={review}
          />
        ))}
      </section>

      {validated === 0 && 
        <>        
          <div className="bg-zinc-600 text-white p-10 text-center absolute top-[300px] left-[40%] z-20">
            <h1 className='text-2xl text-white font-medium mb-10'>DEBES INICIAR SESIÓN</h1>
            <div>

              <button 
                className='
                  py-3 px-6 
                  rounded-md
                  font-medium text-sm text-white bg-zinc-700 
                  hover:bg-zinc-900
                  mr-5
                '
              >INICIAR SESIÓN</button>

              <Link to={`/`}>
                <button 
                  className='
                    py-3 px-6 
                    rounded-md
                    font-medium text-sm text-white bg-red-600 
                    hover:bg-red-700
                  '
                >VOLVER</button>
              </Link>

            </div>

          </div>

          <div className="bg-black/80 h-screen w-full absolute top-0 left-0 z-10">
          </div>
        </>
      }

    </main>
  )
}

export default Detail
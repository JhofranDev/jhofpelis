import { useState, useEffect } from 'react'

// react-router-dom
import { useParams } from "react-router-dom";

// componentes
import DetailImage from '../components/DetailImage'
import DetailBanner from '../components/DetailBanner'
import ReviewCard from '../components/ReviewCard';


const Detail = () => {

  const [movieDetail, setMovieDetail] = useState({})
  const [reviews, setReviews] = useState([])
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


  return (
    <main className="min-h-screen bg-black">
      <article className="max-h-[70vh] bg-black relative overflow-hidden">
        <DetailImage movie={movieDetail} />
        <DetailBanner movie={movieDetail} />
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
    </main>
  )
}

export default Detail
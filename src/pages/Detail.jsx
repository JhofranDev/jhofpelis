import { useState, useEffect } from 'react'

// react-router-dom
import { useParams, useNavigate  } from "react-router-dom";

// componentes
import DetailImage from '../components/DetailImage'
import DetailBanner from '../components/DetailBanner'
import ReviewCard from '../components/ReviewCard';
import BannerDetail from '../components/BannerDetail';


const Detail = () => {

  let { id } = useParams()
  let navigate = useNavigate()
  const [reviews, setReviews] = useState([])
  const [ saved, setSaved ] = useState(true)
  const [ validated, setValidated ] = useState(1)
  const [movieDetail, setMovieDetail] = useState({})


  useEffect(() => {
    const getDetailMovie = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=f05e97a11aba1268670bfd11062aba02&language=es-MX`
        const response = await fetch(url)
        const request  = await response.json()

        setMovieDetail(request)
      } catch (err) {
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
        console.log(err)
      }
    }
    getReviewMovie()
  }, [])

  useEffect(() => {
    const getFavorite = async () => {
      try {
        const url = `https://api.themoviedb.org/3/list/8198609?api_key=f05e97a11aba1268670bfd11062aba02&language=es-MX`
        const response = await fetch(url)
        const request  = await response.json()
        const myList = request.items
        const listFilter = myList.filter(item => item.id == id)
        if(listFilter.length === 0) {
          setSaved(false)
        } else {
          setSaved(true)
        }
      } catch (err) {
        console.log(err)
      }
  
    }
  
    getFavorite()

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

      const url = `https://api.themoviedb.org/3/list/8198609/add_item?api_key=f05e97a11aba1268670bfd11062aba02&session_id=${session}`

      const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({ 
          media_id: id,
        })   
      })
      const request  = await response.json()
      console.log('Se agrego a tu lista ')
      navigate('/favorites')

    } catch (err) {
      console.log(err)
    }
  }

  const handleClickRemove = async () => {
    try {
      const session = localStorage.getItem('session')

      const url = `https://api.themoviedb.org/3/list/8198609/remove_item?api_key=f05e97a11aba1268670bfd11062aba02&session_id=${session}`

      const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({ 
          media_id: id,
        })   
      })
      const request  = await response.json()
      console.log('Se elimino de tu lista ')
      navigate('/favorites')

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <main className="min-h-screen bg-black relative">

      <article className='max-h-[70vh] bg-black relative overflow-hidden'
      >
        <DetailImage movie={movieDetail} />

        <DetailBanner
          saved={saved}
          movie={movieDetail} 
          handleClickSave={handleClickSave}
          handleClickRemove={handleClickRemove}
        />

      </article>

      <section className="bg-black flex flex-col gap-5 p-10">
        
        <h2 className='pb-2 w-full border-b-2 text-white text-xl font-medium'>
          Reviews
        </h2>

        // reviews de las peliculas
        {reviews.map((review, i) => (
          <ReviewCard 
            key={i}
            review={review}
          />
        ))}

      </section>
      
      <BannerDetail validated={validated} />

    </main>
  )
}

export default Detail
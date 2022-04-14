import React from 'react'


const ReviewCard = ({ review }) => {
  return (
    <div className='bg-zinc-700 text-white p-10'>
      <h2 className="text-lg font-bold mb-5">{review.author}</h2>
      <p className="text-sm text-white/50 mb-1">{review['created_at']}</p>
      <p>{review.content}</p>
    </div>
  )
}

export default ReviewCard
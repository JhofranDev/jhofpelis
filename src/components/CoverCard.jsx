


const CoverCard = ({ image, alt, updateMovie, id }) => {

  const handleMousedEnter = (e) => {
    updateMovie(id)
  }

  return (
    <div 
      className='
        bg-black 
        h-[182px] w-[332px] 
        rounded border-white/70
        hover:h-[185px] hover:w-[335px] hover:border-4 
      '
      id={id}
      onMouseEnter={handleMousedEnter}
    >
      <img src={image} alt={alt} className='h-full w-full' />
    </div>
  )
}

export default CoverCard
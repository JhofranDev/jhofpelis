// multimedia
import fondo from '../images/fondo2.jpg'
import card from '../images/card1.jpg'

const Home = () => {
  return (
    <main className="bg-black">
      <article className='relative min-h-[92vh] '>
        <div className='h-[92vh]'>
          <img className='h-[85vh] w-full' src={fondo} alt='Fondo' />
        </div>
        <div className='absolute bg-gradient-to-b from-black/10 via-black/50 to-black h-[220px] w-full  bottom-3 left-0 flex justify-around items-center'>
          <div className='h-[182px] w-[332px] hover:h-[185px] hover:w-[335px] hover:border-4 border-white/70 bg-black rounded'>
            <img src={card} alt='Fondo' className='h-full w-full' />
          </div>
          <div className='h-[182px] w-[332px] hover:h-[185px] hover:w-[335px] hover:border-4 border-white/70 bg-black rounded'>
            <img src={card} alt='Fondo' className='h-full w-full' />
          </div>
        </div>
      </article>
      <article>
        <section>
          <h2 className='text-white font-bold text-lg pl-10'>Tus Favoritas</h2>
          <div className=' bg-black h-[220px] w-full flex justify-around items-center'>
            <div className='h-[182px] w-[332px] hover:h-[185px] hover:w-[335px] hover:border-4 border-white/70 bg-black rounded'>
              <img src={card} alt='Fondo' className='h-full w-full' />
            </div>
            <div className='h-[182px] w-[332px] hover:h-[185px] hover:w-[335px] hover:border-4 border-white/70 bg-black rounded'>
              <img src={card} alt='Fondo' className='h-full w-full' />
            </div>
          </div>
        </section>
        <section></section>
      </article>
    </main>
  )
}

export default Home
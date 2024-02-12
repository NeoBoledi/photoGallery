import React from 'react'
import imgHero from '../assets/heroImg.jpg'

function Home() {
  return (
    <section className='Home' id='home'>
      <div className='w-full h-screen relative'>
        <img src={imgHero} alt='hero pict' className='w-full h-screen object-cover'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white '>
          <div className='md:left-[10%] max-w-[110] m-auto absolute p-4 bg-gray-700 opacity-80 mt-10'>
            <div>
            <h1 className='text-2xl font-bold md:text-4xl px-4 drop-shadow-2xl'>Discover Your Moments at NBGallery</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 px-4 text-base text-center'>Where best shots are taken for you.</p>
            <p className='max-w-[600px] drop-shadow-2xl py-2 px-4 text-base'>Step into NBGallery, where every click captures the 
            essence of your memories. Our expert photographers curate unforgettable moments, ensuring each image tells a unique 
            story.</p>
            <div className='space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row p-6'>
              <a href='#project' className='inline-block bg-red-500 text-white py-2 px-4 md:w-auto uppercase'>See projects</a>
              <a href='#contact' className='inline-block border border-red-500 text-red-500 uppercase py-2 px-4 md:w-auto mt-2 md:mt-0'>Talk to us</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  

  )
}

export default Home
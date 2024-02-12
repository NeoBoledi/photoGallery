import React from 'react'
import { FaEnvelopeOpen, FaFacebookF,FaInstagram,FaLocationArrow, FaPhoneAlt, FaTiktok, FaTwitter } from 'react-icons/fa'

function Contact() {
  return (
    <section className='contact  py-12 mb-8 px-12' id='contact'>
    <div className='mt-8'>
      <h3 className='text-3xl font-bold text-center mb-8'>Contact Us</h3>
    </div>
    <div className='w-full flex flex-col lg:flex-row gap-10 lg-gap-20 h-fit p-4 justify-center items-center'>
      <div className='flex justify-center items-end w-full lg:w-3/4 flex-col bg-white shadow-2xl px-8 py-12 gap-10 z-20'>
        <div className='flex justify-center items-start flex-col gap-4 w-full'>
          <h1 className='text-red-600  font-bold text-2xl mb-2'>Contact Info</h1>
          <div id='phone' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'>
            <span className='bg-red-400 p-3 rounded-full'><FaPhoneAlt className='text-2xl'/></span>+27 60-907-5764
          </div>
          <div id='phone' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'>
            <span className='bg-red-400 p-3 rounded-full'><FaEnvelopeOpen className='text-2xl'/></span> neoboledi21@gmail.com
          </div>
          <div id='phone' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'>
            <span className='bg-red-400 p-3 rounded-full'><FaLocationArrow className='text-2xl'/></span> Gauteng
          </div>
  
          <div className='flex justify-center items-center gap-4 mt-10'>
             <span className='bg-red-500 p-3 rounded-full cursor-pointer hover:bg-red-600'><FaFacebookF/></span>
             <span className='bg-red-500 p-3 rounded-full cursor-pointer hover:bg-red-600'><FaTwitter/></span>
             <span className='bg-red-500 p-3 rounded-full cursor-pointer hover:bg-red-600'><FaInstagram/></span>
             <span className='bg-red-500 p-3 rounded-full cursor-pointer hover:bg-red-600'><FaTiktok/></span>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-start gap-2 w-full'>
        <h1 className='text-red-600  font-bold text-2xl mb-4'>Get in touch</h1>
        <input type='text' placeholder='Enter your name' className='px-4 py-4 w-full border-2 border-red-500  text-gray-400 bg-slate-100 focus:outline-none focus:border-red-600'/>
        <input type='email' placeholder='Enter your email' className='px-4 py-4 w-full border-2 border-red-500  text-gray-400 bg-slate-100 focus:outline-none focus:border-red-600'/>
        <textarea placeholder='Enter your message' className='px-4 py-4 w-full border-2 border-red-500  text-gray-400 bg-slate-100 focus:outline-none focus:border-red-600' cols='30' rows='5'></textarea>
        <button className='uppercase bg-red-500 text-white px-4 py-3 w-full hover:bg-red-400'>Submit</button>
      </div>
    </div>
  </section>
  
  )
}

export default Contact
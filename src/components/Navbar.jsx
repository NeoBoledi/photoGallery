import React, { useState } from 'react';
import { FaInstagram, FaTiktok, FaTwitter, FaBars, FaTimes, FaFacebookF } from 'react-icons/fa';
import Login from './Login'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-400">
        <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
        <a href="#home" className={`${isOpen ? 'hidden' : 'flex-col'}`}>
            <h3 className="font-bold text-2xl">NBGallery</h3>
          </a>
          <input type="checkbox" id="check" onChange={toggleMenu} />

          <span className={`menu flex ${isOpen ? 'flex-col' : 'hidden'} lg:flex lg:flex-row lg:items-center lg:pl-8 lg:pr-4`}>
          <a className={`${isOpen ? 'flex-col' : 'hidden'}`} href="#home">
            <h3 className="font-bold text-2xl">NBGallery</h3>
          </a>
            <li><a href="#home" className="block px-4 py-2 text-gray-700 hover:text-gray-900">Home</a></li>
            <li><a href="#about" className="block px-4 py-2 text-gray-700 hover:text-gray-900">About</a></li>
            <li><a href="#service" className="block px-4 py-2 text-gray-700 hover:text-gray-900">Service</a></li>
            <li><a href="#project" className="block px-4 py-2 text-gray-700 hover:text-gray-900">Project</a></li>
            <li><a href="#contact" className="block px-4 py-2 text-gray-700 hover:text-gray-900">Contact</a></li>
        
            <div className='flex justify-center items-center gap-4 mt-0'>
             <a href='#home' className='bg-red-500 p-3 rounded-full cursor-pointer hover:bg-red-600'><FaFacebookF/></a>
             <a href='#home' className='bg-red-500 p-3 rounded-full cursor-pointer hover:bg-red-600'><FaTwitter/></a>
             <a href='#home' className='bg-red-500 p-3 rounded-full cursor-pointer hover:bg-red-600'><FaInstagram/></a>
             <a href='#home' className='bg-red-500 p-3 rounded-full cursor-pointer hover:bg-red-600'><FaTiktok/></a>
          </div>
          <li><a href="/login" className="uppercase bg-red-500 text-white ml-12 px-4 py-3 w-full hover:bg-red-400">Admin</a></li>

            <label htmlFor="check" className="close-menu cursor-pointer"><FaTimes className="w-6 h-6 text-gray-700 hover:text-gray-900" /></label>
          </span>

          <label htmlFor="check" className="open-menu lg:hidden cursor-pointer"><FaBars className="w-6 h-6 text-gray-700 hover:text-gray-900" /></label>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

import { FaArrowUp } from 'react-icons/fa';

function Footer(){
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-1 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
          <div className="flex justify-center sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <p className="mb-8 text-sm">
              &copy; {currentYear} NBGallery
              <em>. All Rights Reserved</em>
            </p>
          </div>
          <div className="hidden sm:block px-4 md:w-1/4 md:ml-auto mt-6 md:mt-0">
            <a href="home" className="flex justify-center items-center">
              <FaArrowUp className="w-8 h-8 text-white bg-gray-400 border border-gray-400 rounded-full text-center py-1 ml-2 hover:text-red-600 hover:bg-white hover:border-red-600"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

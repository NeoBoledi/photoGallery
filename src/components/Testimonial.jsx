import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import classNames from 'classnames';

const testimonials = [
  {
    id: 1,
    image:'https://codingyaar.com/wp-content/uploads/card-image.jpg',
    name: 'John Doe',
    comment: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."',
  },
  {
    id: 2,
    image:'https://codingyaar.com/wp-content/uploads/card-image.jpg',
    name: 'Jane Smith',
    comment: '"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
  },
  {
    id: 3,
    image:'https://codingyaar.com/wp-content/uploads/card-image.jpg',
    name: 'Alice Johnson',
    comment: '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
  },
];

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); 
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className='testimonial  bg-gray-100 p-8' id='testimonial'>
      <div className='mt-8'>
        <h3 className='text-3xl font-bold text-center p-8 mb-8'>Testimonials</h3>
        <div className="container mx-auto mt-8 relative">
          <div className="max-w-xl mx-auto relative overflow-hidden">
            <Transition
              show={true}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
             <div className="relative inset-0">
  <div className="h-full flex justify-center items-center">
    <div className="text-center relative bg-gray-300 p-8 shadow-2xl">
      <div className="relative flex justify-center items-cente">
        <img src={testimonials[activeIndex].image} alt="testimonial pict" className="w-44 h-auto"/>
      </div>
      <div className="bg-white-100 p-8 mt-4 shadow-2xl">
        <p className="text-base font-light">{testimonials[activeIndex].comment}</p>
        <p className="mt-2 text-gray-600">{testimonials[activeIndex].name}</p>
      </div>
    </div>
  </div>
</div>

            </Transition>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={classNames("mx-2 w-4 h-4 rounded-full bg-gray-400 hover:bg-gray-800 transition-all", {
                "bg-gray-800": activeIndex === index,
              })}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

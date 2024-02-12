import React from 'react';

function About() {
  return (
    <section className="about-sectionrelative py-24" id='about'>
      <div className="container">
        <div className="lg:flex pl-16 relative"> 
          <div className="image-column lg:w-6/12 md:w-full">
          <div className="fadeInLeft absolute left-0 top-0 z-10 pl-8"> 
  <figure className="flex flex-col items-center">
    <a href="#home" className="flex" data-fancybox="images">
      <img title="Rahul Kumar Yadav" src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="" className="w-full h-auto mb-2 p-[5%]"/>
      <img title="Rahul Kumar Yadav" src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="" className="w-full h-auto pt-12 absolute my-[10%] mx-[50%] p-[10%]" />
    </a>
  </figure>
</div>
</div>
          <div className="content-column lg:w-6/12 md:w-full z-0 relative mb-12"> 
            <div className="pr-12">
              <div className="relative z-10  mb-8">
                <span className="relative block text-lg font-medium text-red-500 mb-6">About NBGallery</span>
                <h2 className='relative block text-5xl font-semibold text-gray-700 pb-6'>We are Creative Photographers Enthusiast working since 2024</h2>
                <p className='absolute left-0 bottom-0 w-12 h-1 bg-gray-400'></p>
              </div>
              <div className="relative text-base  text-gray-600 font-normal mt-9">
                I am Rahul Yaduvanshi works at Css3 Transition since last 3 years. We are here to provide touch notch solution for your website or web application
                 that helps you to make your website look attractive & efficient in handling by creating useful plugins that 
                 you need.
              </div>
              <div className="relative text-base leading-6 text-gray-600 font-normal mt-3">
                We are here to serve you next level tutorial that currently in trend to match you with your expertise. Css3 transition is a learning website.
                 where you can find many good quality content related to web development and tutorials about plugins. here we are using html, html5, css, css3,
                  jquery & javascript along with inspirational UI design layout by professionals by using Photoshop and adobe allustrator.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

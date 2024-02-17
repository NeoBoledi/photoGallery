import React from 'react'

function Services() {
  return (

    <section className='service bg-gray-100 p-8' id='service'>
      <div className='mt-8'>
        <h3 className='text-3xl font-bold text-center'>Our Services</h3>
      <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-12 sm:p-8">
       <div className="col">
        <div className="border border-gray-200 shadow-md mx-auto">
          <img src="https://codingyaar.com/wp-content/uploads/card-image.jpg" className="card-img-top  mb-8" alt="..." />
          <div className="card-body flex flex-col justify-between">
            <div className='p-4'>
              <h5 className="text-xl font-bold mb-4">Card title</h5>
              <p className="text-gray-700 mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <a href="#home" className="btn btn-primary inline-block mt-2 px-4 py-2 mb-8 bg-red-500 text-white self-center">Go somewhere</a>
          </div>
        </div>
       </div>
       <div className="col">
        <div className="border border-gray-200  shadow-md mx-auto">
          <img src="https://codingyaar.com/wp-content/uploads/card-image.jpg" className="card-img-top mb-8" alt="..." />
          <div className="card-body flex flex-col justify-between">
            <div className='p-4'>
              <h5 className=" text-xl font-bold mb-4">Card title</h5>
              <p className=" text-gray-700 mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <a href="#home" className="btn btn-primary inline-block mt-2 px-4 py-2 mb-8 bg-red-500 text-white self-center">Go somewhere</a>
          </div>
        </div>
       </div>
       <div className="col">
        <div className="border border-gray-200 shadow-md mx-auto">
          <img src="https://codingyaar.com/wp-content/uploads/card-image.jpg" className="card-img-top mb-8" alt="..." />
          <div className="card-body flex flex-col justify-between">
            <div className='p-4'>
              <h5 className="text-xl font-bold mb-4">Card title</h5>
              <p className=" text-gray-700 mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <a href="#home" className="btn btn-primary inline-block mt-2 px-4 py-2 mb-8 bg-red-500 text-white self-center">Go somewhere</a>
          </div>
        </div>
       </div>
       <div className="col">
        <div className="border border-gray-200 shadow-md mx-auto">
          <img src="https://codingyaar.com/wp-content/uploads/card-image.jpg" className="card-img-top mb-8" alt="..." />
          <div className="card-body flex flex-col justify-between">
            <div className='p-4'>
              <h5 className="text-xl font-bold mb-4">Card title</h5>
              <p className=" text-gray-700 mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <a href="#home" className="btn btn-primary inline-block mt-2 px-4 py-2 mb-8 bg-red-500 text-white self-center">Go somewhere</a>
          </div>
        </div>
       </div>
      </div>
    </div>
      </div>
    </section>
  
  )
}

export default Services
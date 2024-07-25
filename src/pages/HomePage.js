import React from 'react';
import Carousel from '../components/Carousel';
import Group from '../assests/Group 20.png';
import Arrow from '../assests/Arrow.png';
import Background from '../assests/Group 20.png';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="relative bg-cover bg-center py-14 md:py-24" style={{ backgroundImage: `url(${Background})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent opacity-70"></div>
        <div className="relative w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className='flex flex-col gap-8 items-center  md:items-start md:w-[40%]'>
            <div className='flex flex-col items-center  md:items-start text-white'>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Welcome to Springdale Public School
              </h1>
              <p className="mt-4 text-lg">
                Where we nurture young minds for a brighter future.
              </p>
            </div>
            <button className='bg-gradient-to-r from-[#149BFC] to-[#0D8BF9] rounded-full flex items-center text-white  px-8 py-3 hover:bg-gradient-to-r hover:from-[#0D8BF9] hover:to-[#149BFC] transition-all duration-300'>
              <p className='text-lg'>Get Started</p>
              <img src={Arrow} alt="arrow" className='md:ml-2' />
            </button>
          </div>

          <div className='md:w-[50%] mt-10 md:mt-0'>
            <img src={Group} alt="Springdale Public School Logo" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </header>

      <main className="my-8">
        <Carousel />
      </main>

      <section className="bg-blue-100 py-16">
        <div className="w-[90%] mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Experienced Faculty</h3>
              <p className="text-gray-600">Our teachers are highly qualified and experienced in their respective fields.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">State-of-the-Art Facilities</h3>
              <p className="text-gray-600">We provide modern classrooms, laboratories, and sports facilities.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Holistic Development</h3>
              <p className="text-gray-600">We focus on both academic excellence and extracurricular activities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

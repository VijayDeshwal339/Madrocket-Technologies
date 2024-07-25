import React from 'react';
import About from '../assests/About.png';

const AboutUsPage = () => {
  return (
    <div className="about-us-page font-sans">
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 py-8 text-white shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">About Us</h1>
        </div>
      </header>

      <main className="w-[90%] mx-auto flex flex-col md:flex-row items-center my-16 gap-10">
        <div className="w-full md:w-[40%] flex justify-center">
          <img src={About} alt="About Us" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105" />
        </div>

        <div className="w-full md:w-[55%] flex flex-col items-start gap-6">
          <p className="text-lg font-medium text-gray-700 leading-relaxed">
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. Our vision is to create a learning environment that fosters academic excellence, critical thinking, and ethical values. Our mission is to empower students with the knowledge, skills, and values needed to thrive in a dynamic world. At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future. Our state-of-the-art science and computer labs provide students with the opportunity to engage in hands-on learning and experiments. The classrooms are spacious and well-equipped with modern teaching aids, ensuring an optimal learning environment. Our library boasts a vast collection of books and digital resources, catering to the diverse interests and academic needs of our students. Additionally, we offer extensive sports facilities, including a playground, gymnasium, and swimming pool, to promote physical well-being and teamwork.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-colors rounded-full text-white px-8 py-3 shadow-lg hover:shadow-2xl">
            Show More
          </button>
        </div>
      </main>
    </div>
  );
};

export default AboutUsPage;


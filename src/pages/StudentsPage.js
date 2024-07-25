import React from 'react';

const StudentsPage = () => {
  return (
    <div className="students-page">
      <header className="bg-gradient-to-r from-green-400 to-blue-500 py-8 text-white shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Students</h1>
        </div>
      </header>
      <main className="container mx-auto my-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Life at Springdale</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://via.placeholder.com/400x300.png?text=Music" alt="Music" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Music</h3>
              <p className="text-gray-700">Join our music classes to learn various instruments and vocals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://via.placeholder.com/400x300.png?text=Sports" alt="Sports" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sports</h3>
              <p className="text-gray-700">Participate in a variety of sports activities to stay active and healthy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://via.placeholder.com/400x300.png?text=Robotics" alt="Robotics" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Robotics</h3>
              <p className="text-gray-700">Explore the world of robotics with our dedicated club and competitions.</p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Achievements</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <ul className="list-disc pl-5 text-gray-700">
              <li className="mb-2"><strong>John Smith</strong> - National Level Math Olympiad Winner</li>
              <li className="mb-2"><strong>Sarah Lee</strong> - Gold Medalist in State Swimming Championship</li>
              <li className="mb-2"><strong>Tech Innovators Club</strong> - Winners of Inter-School Robotics Competition</li>
            </ul>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Student Council</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <ul className="list-disc pl-5 text-gray-700">
              <li className="mb-2"><strong>President:</strong> Amy Parker, Grade 12</li>
              <li className="mb-2"><strong>Vice President:</strong> Rajiv Mehta, Grade 11</li>
              <li className="mb-2"><strong>Secretary:</strong> Lisa Wong, Grade 10</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentsPage;

import React from 'react';

const AcademicsPage = () => {
  return (
    <div className="academics-page font-sans">
      <header className="bg-gradient-to-r from-green-400 to-blue-500 py-12 text-white shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Academics</h1>
          <p className="mt-4 text-lg">Discover our comprehensive curriculum and innovative teaching methodologies</p>
        </div>
      </header>

      <main className="container mx-auto my-16 px-4 md:px-0">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Curriculum</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col">
                <img src="https://via.placeholder.com/300" alt="Primary" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Primary (Grades 1-5)</h3>
                <p className="text-gray-700 leading-relaxed">English, Mathematics, Science, Social Studies, Art, Physical Education</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col">
                <img src="https://via.placeholder.com/300" alt="Secondary" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Secondary (Grades 6-10)</h3>
                <p className="text-gray-700 leading-relaxed">English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col">
                <img src="https://via.placeholder.com/300" alt="Senior Secondary" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Senior Secondary (Grades 11-12)</h3>
                <div className="mb-4">
                  <h4 className="text-xl font-semibold">Science Stream</h4>
                  <p className="text-gray-700 leading-relaxed">Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Commerce Stream</h4>
                  <p className="text-gray-700 leading-relaxed">Accountancy, Business Studies, Economics, Mathematics, English</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Teaching Methodologies</h2>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img src="https://via.placeholder.com/600x300" alt="Teaching Methodologies" className="w-full h-60 object-cover rounded-t-lg mb-4" />
            <p className="text-gray-700 leading-relaxed">We use a blend of traditional and modern teaching techniques to cater to different learning styles. Our methodologies include project-based learning, collaborative activities, and the use of digital tools to enhance the learning experience.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Educational Resources</h2>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img src="https://via.placeholder.com/600x300" alt="Educational Resources" className="w-full h-60 object-cover rounded-t-lg mb-4" />
            <p className="text-gray-700 leading-relaxed">Our school is equipped with digital classrooms, interactive learning modules, and access to online educational platforms. These resources ensure that students have the tools they need to succeed in their academic endeavors.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Co-Curricular Activities</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col">
                <img src="https://via.placeholder.com/300" alt="Sports" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Sports</h3>
                <p className="text-gray-700 leading-relaxed">Our sports programs encourage students to develop physical fitness, teamwork, and sportsmanship. We offer a variety of sports including basketball, soccer, swimming, and more.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col">
                <img src="https://via.placeholder.com/300" alt="Arts" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Arts</h3>
                <p className="text-gray-700 leading-relaxed">Our arts program allows students to explore their creativity through visual arts, music, dance, and theater. We provide opportunities for students to showcase their talents through exhibitions and performances.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col">
                <img src="https://via.placeholder.com/300" alt="Clubs" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Clubs</h3>
                <p className="text-gray-700 leading-relaxed">We offer a variety of clubs such as robotics, debate, and environmental club to help students pursue their interests and develop new skills. Our clubs provide a platform for students to collaborate and innovate.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AcademicsPage;

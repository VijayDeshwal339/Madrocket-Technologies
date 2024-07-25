import React from 'react';

const FacultyPage = () => {
  const facultyProfiles = [
    {
      name: "John Doe",
      title: "Principal",
      qualification: "M.Ed",
      experience: "20 years of experience in educational administration",
      imgSrc: "https://via.placeholder.com/150"
    },
    {
      name: "Jane Smith",
      title: "Vice Principal",
      qualification: "M.Sc. in Physics",
      experience: "15 years of teaching experience",
      imgSrc: "https://via.placeholder.com/150"
    },
    {
      name: "Emily Johnson",
      title: "English Teacher",
      qualification: "M.A. in English",
      experience: "10 years of teaching experience",
      imgSrc: "https://via.placeholder.com/150"
    },
    {
      name: "Michael Brown",
      title: "Mathematics Teacher",
      qualification: "M.Sc. in Mathematics",
      experience: "8 years of teaching experience",
      imgSrc: "https://via.placeholder.com/150"
    },
    {
      name: "Sophia Davis",
      title: "Science Teacher",
      qualification: "M.Sc. in Chemistry",
      experience: "12 years of teaching experience",
      imgSrc: "https://via.placeholder.com/150"
    },
    {
      name: "David Wilson",
      title: "Computer Science Teacher",
      qualification: "B.Tech in Computer Science",
      experience: "5 years of teaching experience",
      imgSrc: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="faculty-page">
      <header className="bg-gradient-to-r from-green-400 to-blue-500 py-8 text-white shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Faculty</h1>
        </div>
      </header>
      <main className="container mx-auto my-12 px-4">
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Faculty Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyProfiles.map((faculty, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                <img src={faculty.imgSrc} alt={faculty.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-bold">{faculty.name}</h3>
                <p className="text-blue-500 mb-2">{faculty.title}</p>
                <p className="text-gray-700 mb-1">{faculty.qualification}</p>
                <p className="text-gray-700">{faculty.experience}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default FacultyPage;

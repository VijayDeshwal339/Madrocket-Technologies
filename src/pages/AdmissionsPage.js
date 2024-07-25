import React from 'react';

const AdmissionsPage = () => {
  return (
    <div className="admissions-page font-sans">
      <header className="bg-gradient-to-r from-teal-400 to-blue-500 py-12 text-white shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Admissions</h1>
          <p className="mt-4 text-lg">Join our school and embark on a journey of excellence and growth</p>
        </div>
      </header>
      <main className="container mx-auto my-16 px-4 md:px-0">
        <section className="mb-16 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-6">Admission Process</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
          <a href="/path/to/admission-form.pdf" download className="text-blue-500 underline hover:text-blue-700 transition-colors">
            Download Admission Form
          </a>
        </section>
        <section className="mb-16 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-6">Admission Criteria</h2>
          <p className="text-gray-700 leading-relaxed">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
        </section>
        <section className="mb-16 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-6">Important Dates</h2>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
          </ul>
        </section>
        <section className="mb-16 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img src="https://via.placeholder.com/300" alt="State-of-the-Art Facilities" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">State-of-the-Art Facilities</h3>
                <p className="text-gray-700">Modern labs, library, sports complex, and more to ensure a holistic learning experience.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img src="https://via.placeholder.com/300" alt="Experienced Faculty" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Experienced Faculty</h3>
                <p className="text-gray-700">Our dedicated teachers are committed to guiding and supporting students in their academic journey.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img src="https://via.placeholder.com/300" alt="Comprehensive Curriculum" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
                <p className="text-gray-700">A balanced curriculum designed to foster critical thinking, creativity, and lifelong learning.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-gray-100 p-4 rounded-lg shadow-md">
              <summary className="font-semibold">What is the admission process?</summary>
              <p className="mt-2 text-gray-700">The admission process involves downloading the form, filling it out, and submitting it along with required documents to the school office.</p>
            </details>
            <details className="bg-gray-100 p-4 rounded-lg shadow-md">
              <summary className="font-semibold">What documents are required?</summary>
              <p className="mt-2 text-gray-700">Required documents include birth certificate, previous school records, and passport-sized photographs.</p>
            </details>
            <details className="bg-gray-100 p-4 rounded-lg shadow-md">
              <summary className="font-semibold">When are the entrance tests conducted?</summary>
              <p className="mt-2 text-gray-700">Entrance tests are conducted on April 15th. Further details will be provided upon form submission.</p>
            </details>
            <details className="bg-gray-100 p-4 rounded-lg shadow-md">
              <summary className="font-semibold">How are results announced?</summary>
              <p className="mt-2 text-gray-700">Results are announced on April 30th and will be communicated via email and the school notice board.</p>
            </details>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdmissionsPage;

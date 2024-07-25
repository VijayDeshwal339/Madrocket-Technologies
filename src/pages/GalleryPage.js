import React, { useState } from 'react';

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');

  const photos = [
    { src: 'https://via.placeholder.com/400x300.png?text=Sports+Day', alt: 'Students participating in various sports events.', caption: 'Sports Day' },
    { src: 'https://via.placeholder.com/400x300.png?text=Science+Exhibition', alt: 'Students presenting their science projects.', caption: 'Science Exhibition' },
    { src: 'https://via.placeholder.com/400x300.png?text=Cultural+Fest', alt: 'Students performing in the cultural fest.', caption: 'Cultural Fest' },
    { src: 'https://via.placeholder.com/400x300.png?text=Classroom', alt: 'A glimpse of our interactive classrooms.', caption: 'Classroom' },
    { src: 'https://via.placeholder.com/400x300.png?text=Library', alt: 'Students reading and studying in the school library.', caption: 'Library' }
  ];

  const videos = [
    { src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Virtual tour of Springdale Public School.', caption: 'School Tour' },
    { src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Highlights from the Annual Function 2023.', caption: 'Annual Function Highlights' }
  ];

  const filteredMedia = filter === 'all' 
    ? [...photos, ...videos]
    : filter === 'photos' 
    ? photos 
    : videos;

  return (
    <div className="gallery-page bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-green-400 to-blue-500 py-8 text-white shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Gallery</h1>
        </div>
      </header>
      <main className="container mx-auto my-12 px-4">
        <section className="mb-12">
          <div className="flex justify-center mb-8">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-3 mx-2 rounded-lg font-semibold ${filter === 'all' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-700'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('photos')} 
              className={`px-6 py-3 mx-2 rounded-lg font-semibold ${filter === 'photos' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-700'}`}
            >
              Photos
            </button>
            <button 
              onClick={() => setFilter('videos')} 
              className={`px-6 py-3 mx-2 rounded-lg font-semibold ${filter === 'videos' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-700'}`}
            >
              Videos
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredMedia.map((media, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                {media.src.endsWith('.mp4') ? (
                  <div className="relative">
                    <video controls className="w-full h-auto rounded-lg transition-transform transform hover:scale-105">
                      <source src={media.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p className="mt-2 text-center text-gray-800 font-semibold">{media.caption}</p>
                  </div>
                ) : (
                  <div className="relative">
                    <img src={media.src} alt={media.alt} className="w-full h-auto rounded-lg transition-transform transform hover:scale-105" />
                    <p className="mt-2 text-center text-gray-800 font-semibold">{media.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default GalleryPage;

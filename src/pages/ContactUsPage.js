import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    toast.success('Our team will contact you soon!');

    
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-us-page font-sans">
      <header className="bg-gradient-to-r from-indigo-500 to-purple-500 py-12 text-white shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-lg">We'd love to hear from you! Reach out to us using the form below or visit us at our location.</p>
        </div>
      </header>

      <main className="container mx-auto my-16 px-4 md:px-0">
        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0 md:w-1/2 md:pr-8">
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">Get in Touch</h2>
              <p className="mb-4 text-gray-700">Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
              <p className="mb-4 text-gray-700">Phone: +1 (123) 456-7890</p>
              <p className="mb-4 text-gray-700">Email: info@springdale.edu</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55967.19520750356!2d77.15516608114156!3d28.75091870338029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01d4f896099f%3A0xd856071fa2f0c441!2sBurari%2C%20Delhi%2C%20110084!5e0!3m2!1sen!2sin!4v1721894099934!5m2!1sen!2sin" 
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">Contact Form</h2>
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-indigo-500 text-white py-3 px-6 rounded-md hover:bg-indigo-600 transition-all duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      
      <ToastContainer />
    </div>
  );
};

export default ContactUsPage;

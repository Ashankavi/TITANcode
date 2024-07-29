import React from 'react'

const Contact = () => {
  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 p-8 bg-white rounded-lg shadow-lg md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-blue-600">SEND US A MESSAGE</h2>
          <p className="mb-4 text-gray-700">
            We'd love to hear from you! Whether you have a question, need support, or are interested in our services, feel free to reach out to us using the contact details below. Our team is here to assist you and ensure you have the best experience possible.
          </p>
          <div className="mb-4">
            <h3 className="font-bold">Phone</h3>
            <p>+94 77 565 5031</p>
            <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Email</h3>
            <p>example@gmail.com</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Address</h3>
            <p>St. Anthony's Mawatha,</p>
            <p>Colombo 00300,</p>
            <p>Sri Lanka</p>
          </div>
          <div className="flex space-x-2">
            <a href="#" className="text-gray-700"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-700"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-700"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-700"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name*</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter name" />
          </div>
          <div>
            <label className="block text-gray-700">Email*</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter email address" />
          </div>
          <div>
            <label className="block text-gray-700">Phone (Optional)</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter phone number" />
          </div>
          <div>
            <label className="block text-gray-700">Subject*</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your subject" />
          </div>
          <div>
            <label className="block text-gray-700">Message*</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="What are you planning to build?"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full p-2 text-white bg-blue-600 rounded">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact

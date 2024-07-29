import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form Data:', formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } else {
      setErrors(formErrors);
    }
  };

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
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Phone (Optional)</label>
            <input
              type="text"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="text-red-500">{errors.subject}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              placeholder="What are you planning to build?"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <div>
            <button type="submit" className="w-full p-2 text-white bg-blue-600 rounded">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

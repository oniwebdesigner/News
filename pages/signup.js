import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Data submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to submit data');
      }
    } catch (error) {
      alert('Error occurred');
    }
  };

  return (
    <div className='p-2 md:p-10'>
      <div className='h-full md:h-[43rem] bg-[#E9F5DA] w-full mx-auto shadow-2xl shadow-gray-600'>
        <div className='mx-0 md:mx-28 p-2'>
          <div className='text-2xl md:text-4xl text-center mt-7'>
            <h1>Register here for daily dozes of news</h1>
          </div>
          <div className=''>
            <div className="container mx-auto px-0 md:px-4 my-4">
              <form className="max-w-lg mx-auto bg-[#E9F5DA] md:p-8 p-6 shadow-md rounded-xl" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-[#112A0E] text-2xl font-semibold mb-2" htmlFor="name">Name</label>
                  <input
                    className="w-full bg-[#E9F5DA] text-[#112A0E] px-3 py-2 rounded-md outline-none shadow-none"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                  <hr className='border-[1.5px] border-[#719744]' />
                </div>
                <div className="mb-4">
                  <label className="block text-[#112A0E] text-2xl font-semibold mb-2" htmlFor="email">Email</label>
                  <input
                    className="w-full px-3 py-2 bg-[#E9F5DA] text-[#112A0E] outline-none shadow-none rounded-md"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                  <hr className='border-[1.5px] border-[#719744]' />
                </div>
                <div className="mb-4">
                  <label className="block text-[#112A0E] text-2xl font-semibold mb-2" htmlFor="message">Message</label>
                  <textarea
                    className="w-full px-3 py-2 bg-[#E9F5DA] text-[#112A0E] outline-none shadow-none rounded-md"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <hr className='border-[1.5px] border-[#719744]' />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="px-6 py-3 bg-[#112A0E] text-white rounded-3xl font-quicksand text-xl hover:bg-[#719744]"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;





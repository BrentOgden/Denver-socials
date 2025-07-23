// src/components/Impact.jsx
import React, { useState } from 'react';
import ImpactBg from '../assets/2025-01-31-4.jpg'; // adjust filename as needed

export default function Impact({ id = "impact" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleChange = (e) => {
    setFormData(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/denversocials@outlook.com',
        {
          method: 'POST',
          body: new FormData(e.target),
        }
      );

      if (response.ok) {
        setStatus('success');
        setPopupVisible(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setPopupVisible(true);
    }
  };

  return (
    <section
      id={id}
      className="relative bg-cover bg-center py-32 px-4"
      style={{ backgroundImage: `url(${ImpactBg})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-2xl mx-auto text-center text-white">
        <h2 className="font-montserrat text-3xl mb-4 text-shadow-lg/50">
          Giving Back with Every Gathering
        </h2>
        <p className="text-lg text-shadow-lg/50 mb-8">
          We believe fun and purpose can coexist. That’s why each event is an opportunity to do good—whether you're playing golf, sharing wine, or shaking hands. Denver Socials proudly donates the majority of net proceeds to local 501(c)(3) organizations doing meaningful work.
        </p>

        {/* AJAX FormSubmit.co FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 p-6 rounded-lg max-w-4xl mx-auto text-black"
        >
          {/* disable their default captcha */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_cc" value="info@denversocials.com" />




            <div className="mb-4 text-left">
              <label htmlFor="name" className="block font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#8A3202] rounded focus:outline-none focus:ring"
              />
            </div>

            <div className="mb-4 text-left">
              <label htmlFor="email" className="block font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#8A3202] rounded focus:outline-none focus:ring"
              />
            </div>

            <div className="mb-4 text-left">
              <label htmlFor="message" className="block font-semibold mb-1">
                Do you have a non‑profit you’d like us to support? (Enter the name and URL)
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary rounded focus:outline-none focus:ring"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full font-semibold py-2 rounded transition
              ${status === 'sending'
                  ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                  : 'bg-[#8A3202] hover:bg-[#8A3202]/80 text-white'}`}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
        </form>
      </div>

      {/* Popup */}
      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 text-center">
            {status === 'success' ? (
              <>
                <h3 className="text-xl font-semibold mb-2">Thank you for your input!</h3>
                <p className="mb-4">We have received your submission. </p>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-2">Oops!</h3>
                <p className="mb-4">Something went wrong. Please try again.</p>
              </>
            )}
            <button
              onClick={() => setPopupVisible(false)}
              className="mt-2 px-4 py-2 bg-[#8A3202] hover:bg-[#8A3202]/80 text-white font-semibold rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

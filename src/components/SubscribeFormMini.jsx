// src/components/SubscribeForm.jsx
import React, { useState } from 'react';

function encode(data) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    )
    .join('&');
}

export default function SubscribeForm({ id = "subscribemini" }) {
  const [email, setEmail]       = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', email }),
    })
      .then(() => {
        setSubmitted(true);
        setEmail('');
      })
      .catch((err) => {
        console.error(err);
        setError('Oops! Something went wrong.');
      });
  };

  return (
    <section id={id} className="py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="font-montserrat text-2xl mb-4">
          Subscribe For Event Updates
        </h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2"
        >
          <input type="hidden" name="form-name" value="contact" />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 border rounded"
            required
          />

          <button
            type="submit"
            className="px-6 py-2 bg-[#8A3202] text-white rounded hover:bg-[#8A3202]/90 transition-colors"
          >
            Subscribe
          </button>
        </form>

        {error && (
          <p className="mt-2 text-red-500">{error}</p>
        )}
      </div>

      {submitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-4">
            <h3 className="text-xl font-semibold mb-4">Thank you!</h3>
            <p className="mb-6">You're now subscribed for event updates.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 bg-[#8A3202] text-white rounded transition-opacity duration-200 hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

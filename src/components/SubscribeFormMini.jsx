// src/components/SubscribeForm.jsx
import React, { useState } from 'react'

export default function SubscribeForm({ id = 'subscribemini' }) {
  const [email, setEmail]         = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]         = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const formData = new FormData(e.target)
    try {
      await fetch(e.target.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      })
      setSubmitted(true)
      setEmail('')
    } catch (err) {
      console.error(err)
      setError('Subscription failed. Please try again.')
    }
  }

  return (
    <section id={id} className="py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="font-montserrat text-2xl mb-4">
          Subscribe For Event Updates
        </h2>

        {!submitted ? (
          <form
            action="https://ee7df108.sibforms.com/serve/MUIFAN4A_pAqYczTw75GGBTadTkIMWSf52Gwjzt_GTrX6KTcxRVcbdYcSKD6Ez9Wo28NxI--UrrfDq0va_R7ppDFxw-kPAvT7vbUZ1PEOIPXiIVYa5CCSAU0eGkH9d-iWSWF5PS8hFtfDY3uPcAvvJzDy92gtfQtheTmOIOk1m1UmxMhLzGDYVNcW6nJCL-MPX9LWYL87jmfn9B6"
            method="POST"
            data-type="subscription"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2"
          >
            {/* honeypot */}
            <input
              type="text"
              name="email_address_check"
              className="hidden"
              value=""
              readOnly
            />
            {/* locale */}
            <input type="hidden" name="locale" value="en" />

            <input
              type="email"
              name="EMAIL"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 border rounded"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#8A3202] text-white rounded transition-colors duration-200 hover:bg-[#8A3202]/90"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow-lg text-left">
            <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
            <p className="mb-4">You're now subscribed to receive event updates.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 bg-[#8A3202] text-white rounded transition-opacity duration-200 hover:opacity-90"
            >
              Close
            </button>
          </div>
        )}

        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
    </section>
  )
}

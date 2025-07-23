// src/components/SubscribeForm.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LiaMeetup } from 'react-icons/lia'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaInstagram } from 'react-icons/fa'
import { SiEventbrite } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import MeetUpQR from '../assets/meetupqr.png'
import LinkedInQR from '../assets/linkedinqr.png'

export default function SubscribeForm({ id = 'subscribe' }) {
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

  const ctaButtons = [
    { label: 'Join Us on Meetup', href: 'https://www.meetup.com/denver-socials', variant: 'primary', Icon: LiaMeetup },
    { label: 'Find Tickets on Eventbrite', href: 'https://www.eventbrite.com/o/denver-socials-94476587943', variant: 'secondary', Icon: SiEventbrite },
    { label: 'Follow on Facebook', href: 'https://www.facebook.com/profile.php?id=61560860032953', variant: 'secondary', Icon: FaFacebookF },
    { label: 'Follow on Instagram', href: 'https://www.instagram.com/denversocials/', variant: 'secondary', Icon: FaInstagram },
    { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/company/denver-socials', variant: 'secondary', Icon: FaLinkedinIn },
    { label: 'Visit our GMB', href: 'https://g.co/kgs/4ATvbKg', variant: 'secondary', Icon: FaGoogle },
    { label: 'Email Us', href: 'mailto:info@denversocials.com', variant: 'secondary', Icon: MdEmail },
  ]
  const primaryBtn   = 'px-6 py-2 bg-[#8A3202] text-white rounded transition-colors duration-200 hover:bg-[#8A3202]/90'
  const secondaryBtn = 'px-6 py-2 border-2 border-[#8A3202] text-[#8A3202] rounded transition-colors duration-200 hover:bg-[#8A3202] hover:text-white'

  return (
    <section id={id} className="py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="font-montserrat text-2xl mb-4">
          Stay Connected & Get Involved
        </h2>

        {/* subscription form */}
        <form
          action="https://ee7df108.sibforms.com/serve/MUIFAN4A_pAqYczTw75GGBTadTkIMWSf52Gwjzt_GTrX6KTcxRVcbdYcSKD6Ez9Wo28NxI--UrrfDq0va_R7ppDFxw-kPAvT7vbUZ1PEOIPXiIVYa5CCSAU0eGkH9d-iWSWF5PS8hFtfDY3uPcAvvJzDy92gtfQtheTmOIOk1m1UmxMhLzGDYVNcW6nJCL-MPX9LWYL87jmfn9B6"
          method="POST"
          data-type="subscription"
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2"
        >
          <input type="text" name="email_address_check" className="hidden" readOnly value="" />
          <input type="hidden" name="locale" value="en" />

          <input
            type="email"
            id="EMAIL"
            name="EMAIL"
            placeholder="Your email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 border rounded shadow-lg"
          />
          <button type="submit" className="px-6 py-2 bg-[#8A3202] text-white rounded transition-colors duration-200 hover:bg-[#8A3202]/90">
            Subscribe
          </button>
        </form>

        {/* inline confirmation box */}
        {submitted && (
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

        {/* error message */}
        {error && <p className="mt-2 text-red-500">{error}</p>}

        {/* Animated CTAs */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } }, hidden: {} }}
        >
          {ctaButtons.map(btn => {
            const Icon = btn.Icon
            const base = btn.variant === 'primary' ? primaryBtn : secondaryBtn
            return (
              <motion.a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${base}`}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <Icon className="mr-2 text-lg flex-shrink-0" />
                {btn.label}
              </motion.a>
            )
          })}
        </motion.div>
      </div>

       {/* QR Section */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 justify-items-center gap-x-1 pt-10">
        <div className="text-center">
          <h4 className="text-2xl">Follow Us on MeetUp</h4>
          <motion.img
            src={MeetUpQR}
            alt="Meetup QR Code"
            className="h-40 w-auto pt-4 mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 2 }}
          />
        </div>
        <div className="text-center">
          <h4 className="text-2xl">Follow Us on LinkedIn</h4>
          <motion.img
            src={LinkedInQR}
            alt="LinkedIn QR Code"
            className="h-40 w-auto pt-4 mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 2 }}
          />
        </div>
      </div>
    </section>
  )
}

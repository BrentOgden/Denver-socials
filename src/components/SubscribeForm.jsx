// src/components/SubscribeForm.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LiaMeetup }    from 'react-icons/lia';
import { FaFacebookF, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { SiEventbrite } from "react-icons/si";

import { MdEmail }      from 'react-icons/md';
import MeetUpQR from '../assets/meetupqr.png';
import LinkedInQR from '../assets/linkedinqr.png';

function encode(data) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    )
    .join('&');
}

export default function SubscribeForm({ id = "subscribe" }) {
  const [email, setEmail]         = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState(null);

  const ctaButtons = [
    {
      label: 'Join Us on Meetup',
      href:  'https://www.meetup.com/denver-socials',
      variant: 'primary',
      Icon: LiaMeetup,
    },
    {
      label: 'Find Tickets on Eventbrite',
      href:  'https://www.eventbrite.com/o/denver-socials-94476587943',
      variant: 'secondary',
      Icon: SiEventbrite,
    },
    {
      label: 'Follow on Facebook',
      href:  'https://www.facebook.com/profile.php?id=61560860032953',
      variant: 'secondary',
      Icon: FaFacebookF,
    },
    {
      label: 'Connect on LinkedIn',
      href:  'https://www.linkedin.com/company/denver-socials',
      variant: 'secondary',
      Icon: FaLinkedinIn,
    },
    {
      label: 'Visit our GMB',
      href:  'https://g.co/kgs/4ATvbKg',
      variant: 'secondary',
      Icon: FaGoogle,
    },
    {
      label: 'Email Us',
      href:  'mailto:DenverSocials@outlook.com',
      variant: 'secondary',
      Icon: MdEmail,
    },
  ];

  const primaryBtn = 'px-6 py-2 bg-[#8A3202] text-white rounded transition-colors duration-200 hover:bg-[#8A3202]/90';
  const secondaryBtn = 'px-6 py-2 border-2 border-[#8A3202] text-[#8A3202] rounded transition-colors duration-200 hover:bg-[#8A3202] hover:text-white';

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
    <>
      <section id={id} className="py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-montserrat text-2xl mb-4">
            Stay Connected & Get Involved
          </h2>

          {/* Netlify form */}
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
              className="px-6 py-2 bg-[#8A3202] text-white rounded transition-colors duration-200 hover:bg-[#8A3202]/90"
            >
              Subscribe
            </button>
          </form>

          {error && <p className="mt-2 text-red-500">{error}</p>}

          {/* Animated CTAs with Icons */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
          >
            {ctaButtons.map((btn) => {
              const Icon = btn.Icon;
              return (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center ${
                    btn.variant === 'primary' ? primaryBtn : secondaryBtn
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {Icon && <Icon className="mr-2 text-lg flex-shrink-0" />}
                  <span>{btn.label}</span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Popup Modal */}
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

      {/* QR Section */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 justify-items-center gap-x-1 py-4">
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
    </>
  );
}

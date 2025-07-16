// src/components/Hero.jsx
import React from 'react';
import HeroImg from '../assets/2025-01-31.jpg';
import SubscribeFormMini from './SubscribeFormMini';

export default function Hero({ id = "hero" }) {
  return (
    <>
      <section
        id={id}
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl text-shadow-lg/50">
            Denver Socials: Where Community Meets Connection
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-shadow-lg/50">
            Curated social and networking events supporting Denver nonprofits
          </p>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.meetup.com/denver-socials"
              className="px-6 py-3 bg-burnt-brown text-white font-semibold rounded animate-bounce-slow hover:bg-opacity-90" target="_blank"
            >
              Join Us on Meetup
            </a>
            <a
              href="https://www.eventbrite.com/o/denver-socials-94476587943"
              className="px-6 py-3 border-2 border-white text-white font-semibold  bg-black/40 rounded animate-bounce-slow hover:bg-white hover:text-gray-900" target="_blank"
            >
              Find Tickets on Eventbrite
            </a>
          </div>
        </div>
      </section>

      
      <div className="flex justify-center mt-0">
        <SubscribeFormMini />
      </div>
    </>
  );
}

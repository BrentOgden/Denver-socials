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
        <h1 className="font-playfair text-4xl md:text-6xl">
          Denver Socials: Where Community Meets Connection
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Curated social and networking events supporting Denver nonprofits
        </p>

        {/* Primary CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://www.meetup.com/denver-socials"
            className="px-6 py-3 bg-burnt-brown hover:bg-opacity-90 rounded text-white font-semibold"
          >
            Join Us on Meetup
          </a>
          <a
            href="https://www.eventbrite.com/o/denver-socials-94476587943"
            className="px-6 py-3 border-2 border-white hover:bg-white hover:text-gray-900 rounded text-white font-semibold"
          >
            Find Tickets on Eventbrite
          </a>
        </div>

        
      </div>
    </section>
    {/* Mini subscribe form, centered */}
        <div className="flex justify-center">
          <SubscribeFormMini />
        </div>
        </>
  );
  
}

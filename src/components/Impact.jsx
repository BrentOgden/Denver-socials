// src/components/Impact.jsx
import React from 'react';
import ImpactBg from '../assets/2025-01-31-4.jpg'; // put your image in assets and adjust the filename

export default function Impact({ id = "impact" }) {
  return (
    <section
      id={id}
      className="relative bg-cover bg-center py-32 px-4"
      style={{ backgroundImage: `url(${ImpactBg})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* content */}
      <div className="relative max-w-2xl mx-auto text-center text-white">
        <h2 className="font-montserrat text-3xl mb-4 text-shadow-lg/50">
          Giving Back with Every Gathering
        </h2>
        <p className="text-lg text-shadow-lg/50">
          We believe fun and purpose can coexist. That’s why each event is an opportunity to do good—whether you're playing golf, sharing wine, or shaking hands. Denver Socials proudly donates the majority of net proceeds to local 501(c)(3) organizations doing meaningful work.
        </p>
      </div>
    </section>
  );
}

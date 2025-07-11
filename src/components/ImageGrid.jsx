// src/components/ImageGrid.jsx
import React from 'react';
import Divider from './Divider';

export default function ImageGrid({ images, id = 'image-grid' }) {
  return (
    <>
    <section id={id} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map(({ src, alt, caption }, idx) => (
            <div key={idx} className="group overflow-hidden rounded-lg shadow-lg">
              <img
                src={src}
                alt={alt}
                className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              {caption && (
                <div className="mt-2 text-center text-gray-700 group-hover:text-burnt-brown transition-colors duration-200">
                  {caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
     
    </section>
     <Divider />
     </>
  );
}

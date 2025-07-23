// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className='flex flex-col mx-auto'>
          <h3 className="font-montserrat text-white mb-2">Denver Socials LLC</h3>
          <p>
            2000 S Colorado Blvd, Tower 2 Suite 1100<br/>
            Denver, CO 80222
          </p>
        </div>

        
        <div className='flex flex-col mx-14 md:mx-auto'>
          <h3 className="font-montserrat text-white mb-2 text-left">Contact</h3>
          <p>
            Phone: <a href="tel:7208197787" className="hover:text-white">720.819.7787</a><br/>
            Email: <a href="mailto:info@denversocials.com" className="hover:text-white">info@denversocials.com</a><br/>
            Web: <a href="https://denversocials.com" className="hover:text-white">denversocials.com</a>
          </p>
        </div>

        
        <div className="flex flex-col md:mx-auto md:items-center items-center">
          <h4 className="text-white mt-6 md:mt-0 mb-4">Follow Us</h4>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61560860032953"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebookF size={32} />
            </a>
            <a
              href="https://www.instagram.com/denversocials"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram size={32} />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center mt-10 text-sm">
        &copy; {new Date().getFullYear()} Denver Socials LLC. All rights reserved.
      </p>
    </footer>
  );
}

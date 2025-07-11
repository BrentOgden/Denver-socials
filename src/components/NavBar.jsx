// src/components/Navbar.jsx
import React, { useState } from 'react';
import logo from '../assets/logonew.png';
import { LiaMeetup } from "react-icons/lia";
import { SiEventbrite } from "react-icons/si";



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Events', href: '#events' },
        { name: 'Impact', href: '#impact' },
        { name: 'Subscribe', href: '#subscribe' },
    ];

    const primaryBtn = 'px-4 py-2 bg-[#8A3202] text-white rounded transition-colors duration-200 hover:bg-[#8A3202]/90';
    const secondaryBtn = 'px-4 py-2 border-2 border-[#8A3202] text-[#8A3202] rounded transition-colors duration-200 hover:bg-[#8A3202] hover:text-white';

    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-50">
            {/* desktop container */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-22">
                    {/* logo */}
                    <div className="flex-shrink-0">
                        <a href="#hero" className="flex items-center">
                            <img src={logo} alt="Denver Socials logo" className="h-20 w-auto rounded-2xl" />
                        </a>
                    </div>

                    {/* desktop links */}
                    <div className="hidden md:flex items-center space-x-6">
                        {links.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-[#8A3202] transition-colors duration-200 font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://www.meetup.com/denver-socials"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${primaryBtn} inline-flex items-center`}
                        >
                            <LiaMeetup className="text-white mr-2 flex-shrink-0" />
                            <span>Meetup</span>
                        </a>

                        <a
                            href="https://www.eventbrite.com/o/denver-socials-94476587943"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${secondaryBtn} inline-flex items-center`}
                        >
                           <SiEventbrite className="text-burnt-brown mr-2 flex-shrink-0" />
                            <span>Eventbrite</span>
                        </a>
                    </div>

                    {/* mobile toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-700 hover:text-[#8A3202] transition-colors duration-200 focus:outline-none"
                        >
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M4 8h16M4 16h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-inner">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {links.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#8A3202] hover:bg-gray-100 transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://www.meetup.com/denver-socials"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${primaryBtn} block text-center`}
                        >
                            Meetup
                        </a>
                        <a
                            href="https://www.eventbrite.com/o/denver-socials-94476587943"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${secondaryBtn} block text-center`}
                        >
                            Eventbrite
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

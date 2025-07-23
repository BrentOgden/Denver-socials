// src/components/EventsGrid.jsx
import React, { useState } from 'react';
import Billiards from '../assets/BilliardsBusinessConnections.png';
import PopSmoke from '../assets/PopSmokePicture.png';
import WineWednesday from '../assets/GHFLogo2.png';
import IRP from '../assets/IRPLogo2.png';
import BonGreen from '../assets/BusinessOnTheGreenLogo.png';
import pas from '../assets/pas.jpeg';

const events = [
    {
        title: 'Billiards & Business Connections',
        img: Billiards,
        link: 'https://www.eventbrite.com/e/billiards-business-connections-tickets-1288074528589?aff=ebdsoporgprofile',
        desc: 'Come hang out, shoot some pool, and make new connections at our Networking Mixer & Billiards event!',
        details: [
            'Come hang out, shoot some pool, and make new connections at our Networking Mixer & Billiards event!',
            'We will meet up at 5:30pm in the bar area, make introductions, divide up teams, and start playing pool by 6:00pm. Whether you\'re here to grow your business or just enjoy a good time, this event is perfect for making valuable connections. On top of top-tier networking, we support local nonprofit organizations doing great work for Colorado communities',
            'What to Expect:',
            '- Happy Hour Drinks & Snacks',
            '- Billiards & Games',
            '- Networking with top professionals in real estate, finance, construction, and more!',
            'We can’t wait to see you there!',
        ],
    },
    {
        title: 'P\'as (Grow): An Indigenous Business Mastermind ',
        img: pas,
        link: 'https://www.eventbrite.com/e/pas-grow-an-indigenous-business-mastermind-tickets-1309248380149?aff=ebdsoporgprofile',
        desc: 'This mastermind group is more than just a networking event—it’s a strategic forum for growth. Whether you\'re looking to forge new partnerships, gain fresh perspectives, or refine your business strategy, this is the place to grow.',
        details: [
            'P\'as our monthly Indigenous business mastermind group is a space where like-minded professionals can collaborate, share insights, and develop strategies for growth. This event shares unique perspectives and insight into business strategy from a Native American point of view, and it is OPEN TO ALL! ',
            'This mastermind works to be a resource helping professionals grow their businesses and careers! This group session strives to provide the support and resources needed to navigate the journey of entrepreneurship successfully. In this interactive session, participants will engage in peer-to-peer discussions and actionable problem-solving.',
            'Topics will include accessing capital, leveraging resources, marketing in competitive markets, and scaling operations sustainably. By fostering a spirit of collaboration and innovation, we aim to strengthen Native-owned businesses and empower economic development within Indigenous communities. At the same time, we strive to support organizations that are doing good in our community.'
        ],
    },
    {
        title: 'Glass Half Full: Wine Wednesday',
        img: WineWednesday,
        link: 'https://www.eventbrite.com/e/glass-half-full-wine-wednesday-tickets-1028625635967?aff=ebdsoporgprofile',
        desc: 'Wine Wednesday is a premier monthly networking event designed by a successful businesswoman with a distinctive frame of reference towards business and career success.',
        details: [
            'Glass Half Full - Wine Wednesday is a premier monthly networking event designed by a successful businesswoman with a distinctive frame of reference towards business and career success.',
            'This networking opportunity is designed to encourage powerful connections, foster insightful collaboration, and is OPEN TO ALL! Join us for an unforgettable evening of meaningful conversations, inspiring connections, and exquisite wine.',
            'At the same time, we endeavor to uplift our great state of Colorado by supporting local nonprofit organizations doing great work in our communities. Elevate your professional journey and meet like-minded individuals at Glass Half Full - Wine Wednesday!',
            "Together, let's create opportunities worth celebrating and toasting!",
        ],
    },
    {
        title: 'IRP Network Monthly Mastermind',
        img: IRP,
        link: 'https://www.eventbrite.com/e/irp-network-monthly-mastermind-tickets-1215877926609?aff=ebdsoporgprofile',
        desc: 'A unique gathering for veterans, business professionals, and leaders hosted by the IRP Network.',
        details: [
            'Join us for Pop Smoke, a social event organized by Veterans and open to all! Vets and civilians alike join us at the spectacular Devon\'s Pub & Cigars, where Military Veterans and business professionals converge for an evening of meaningful connections and opportunities. This exclusive event offers a unique setting to expand your professional network, share your business insights while learning from others, and explore new career prospects—all while enjoying a premium selection of fine cigars and upscale amenities.',
            'Whether you\'re an entrepreneur, transitioning veteran, or established business professional, join us and ignite new opportunities for success. This event is designed to foster valuable relationships and open doors to new ventures. Grab this chance to elevate your professional journey in a distinguished setting.',
        ],
    },
    {
        title: 'Business on the Green',
        img: BonGreen,
        link: 'https://www.eventbrite.com/e/business-on-the-green-networking-event-tickets-1309242502569?aff=ebdsoporgprofile',
        desc: 'A relaxed golf-themed networking event focused on building community relationships.',
        details: [
            'Join us for a dynamic networking event at The Hangar Club Denver, where professional connections meet a fun, tech-infused mini-golf experience! Whether you\'re looking to expand your network, meet industry leaders, or just enjoy a casual night of fun, this event has something for everyone. In addition to mingling with like-minded professionals, you\'ll have the chance to support local nonprofit organizations, as a portion of the evening\'s proceeds will be donated to community causes.',
            'Swing by, make valuable connections, and contribute to a great cause while enjoying competitive mini-golf, food, drinks, and more! Don\'t miss this opportunity to grow your network and give back to the community in a relaxed, vibrant setting. See you at Puttshack!'
        ],
    },
    {
        title: 'Pop Smoke Veterans & Friends Social',
        img: PopSmoke,
        link: 'https://www.eventbrite.com/e/pop-smoke-veterans-friends-social-event-tickets-1215904305509?aff=ebdsoporgprofile',
        desc: 'Whether you\'re an entrepreneur, transitioning veteran, or established business professional, join us and ignite new opportunities for success.',
        details: [
            'Join us for Pop Smoke, a social event organized by Veterans and open to all! Vets and civilians alike join us at the spectacular Devon\'s Pub & Cigars, where Military Veterans and business professionals converge for an evening of meaningful connections and opportunities.',
            'This exclusive event offers a unique setting to expand your professional network, share your business insights while learning from others, and explore new career prospects—all while enjoying a premium selection of fine cigars and upscale amenities.',
            'Whether you\'re an entrepreneur, transitioning veteran, or established business professional, join us and ignite new opportunities for success. This event is designed to foster valuable relationships and open doors to new ventures. Grab this chance to elevate your professional journey in a distinguished setting.'
        ],
    },
];

export default function EventsGrid({ id = 'events' }) {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <section id={id} className="py-16 px-4">
            <h2 className="text-center text-primary text-3xl mb-8">Signature Event Series</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((e, idx) => (
                    <div
                        key={idx}
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedEvent(e)}
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') setSelectedEvent(e);
                        }}
                        className="group bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer"
                    >
                        <img
                            src={e.img}
                            alt={e.title}
                            className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="p-6">
                            <h3 className="text-xl text-primary mb-2">{e.title}</h3>
                            <p className="text-gray-700">{e.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg overflow-hidden max-w-xl w-full mx-4">
                        <div className="relative">
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-3 right-3 text-primary text-4xl leading-none"
                                aria-label="Close modal"
                            >
                                &times;
                            </button>
                            <img
                                src={selectedEvent.img}
                                alt={selectedEvent.title}
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div className="p-6">
                            {/* Title + button flex container */}
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-md">{selectedEvent.title}</h3>
                                {selectedEvent.link && (
                                    <a
                                        href={selectedEvent.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block w-fit bg-[#8A3202] hover:bg-[#8D3202]/80 text-white px-4 py-2 rounded cursor-pointer"
                                    >
                                        Upcoming Events
                                    </a>

                                )}
                            </div>
                            {/* Details */}
                            {selectedEvent.details.map((para, i) => (
                                <p key={i} className="text-gray-700 text-sm mb-4">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

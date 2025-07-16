// src/components/EventsGrid.jsx
import React, { useState } from 'react';
import TopGolf from '../assets/Top-Golf.png';
import PfP from '../assets/PuttsForProsperity.png';
import WineWednesday from '../assets/GHF-Logo.png';
import IRP from '../assets/IRP-Logo.jpg';
import BonGreen from '../assets/BusinessOntheGreen.png';
import ThirdThurs from '../assets/thirdtthurs.png';

const events = [
    {
        title: 'Top Golf for Top Causes',
        img: TopGolf,
        desc: 'Business networking meets friendly competition — all in support of Denver-based nonprofits.',
        details: [
            'Elevate your networking game and make a difference in our community! Join us for an evening of great connections and giving back to the community while winding down the work day at Top Golf!',
            'We are happy to invite business professionals and entrepreneurs like you to our fun-filled event where you can connect with like-minded individuals, hone your golf skills, and forge valuable connections, all while supporting nonprofit initiatives in our community that drive positive change. Whether you\'re a seasoned golfer or just looking to unwind after work, this event promises a fun-filled and valuable experience! Do not miss this opportunity to tee up your success while giving back. RSVP now and let\'s tee up for a meaningful evening!',


        ],
    },
    {
        title: 'Putts for Prosperity',
        img: PfP,
        desc: 'Social mini golf networking with a purpose. Casual, fun, and impact-driven.',
        details: [
            'Swing, mingle, and make a difference at our indoor mini golf event—proceeds support community development programs.'
        ],
    },
    {
        title: 'Glass Half Full – Wine Wednesday',
        img: WineWednesday,
        desc: 'Professional networking that supports and uplifts women.',
        details: [
            'Glass Half Full - Wine Wednesday is a premier monthly networking event designed by a successful businesswoman with a distinctive frame of reference towards business and career success.',
            'This networking opportunity is designed to encourage powerful connections, foster insightful collaboration, and is OPEN TO ALL! Join us for an unforgettable evening of meaningful conversations, inspiring connections, and exquisite wine.',
            'At the same time, we endeavor to uplift our great state of Colorado by supporting local nonprofit organizations doing great work in our communities. Elevate your professional journey and meet like-minded individuals at Glass Half Full - Wine Wednesday!',
            "Together, let's create opportunities worth celebrating and toasting!",
        ],
    },
    {
        title: 'Pop Smoke – The IRP Network Social Event',
        img: IRP,
        desc: 'A unique gathering for veterans, business professionals, and leaders hosted by the IRP Network.',
        details: [
            'Join us for Pop Smoke, a social event organized by Veterans and open to all! Vets and civilians alike join us at the spectacular Devon\'s Pub & Cigars, where Military Veterans and business professionals converge for an evening of meaningful connections and opportunities. This exclusive event offers a unique setting to expand your professional network, share your business insights while learning from others, and explore new career prospects—all while enjoying a premium selection of fine cigars and upscale amenities.',
            'Whether you\'re an entrepreneur, transitioning veteran, or established business professional, join us and ignite new opportunities for success. This event is designed to foster valuable relationships and open doors to new ventures. Grab this chance to elevate your professional journey in a distinguished setting.',

        ],
    },
    {
        title: 'Business on the Green',
        img: BonGreen,
        desc: 'A relaxed golf-themed networking event focused on building community relationships.',
        details: [
            'Join us for a dynamic networking event where professional connections meet a fun, tech-infused mini-golf experience! Whether you\'re looking to expand your network, meet industry leaders, or just enjoy a casual night of fun, this event has something for everyone. In addition to mingling with like-minded professionals, you\'ll have the chance to support local nonprofit organizations, as a portion of the evening\'s proceeds will be donated to community causes.',
            'Swing by, make valuable connections, and contribute to a great cause while enjoying competitive mini-golf, food, drinks, and more! Don\'t miss this opportunity to grow your network and give back to the community in a relaxed, vibrant setting. See you at Puttshack!',

        ],
    },
    {
        title: 'Third Thursday Meetup',
        img: ThirdThurs,
        desc: 'Monthly casual meetups open to all community members to connect and collaborate.',
        details: [
            'Every third Thursday: join us for coffee, conversation, and community building in a laid-back setting.'
        ],
    },
];

export default function EventsGrid({ id = "events" }) {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <section id={id} className="py-16 px-4">
            <h2 className="text-center font-montserrat text-3xl mb-8">
                Signature Event Series
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((e, idx) => (
                    <div
                        key={idx}
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedEvent(e)}
                        onKeyPress={(ev) => { if (ev.key === 'Enter') setSelectedEvent(e); }}
                        className="group bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer"
                    >
                        <img
                            src={e.img}
                            alt={e.title}
                            className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="p-6">
                            <h3 className="font-playfair text-xl text-[#8A3202] mb-2">{e.title}</h3>
                            <p className="text-gray-700">{e.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg overflow-hidden max-w-lg w-full mx-4">
                        <div className="relative">
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl leading-none"
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
                            <h3 className="font-playfair text-2xl mb-4">{selectedEvent.title}</h3>
                            {selectedEvent.details.map((para, i) => (
                                <p key={i} className="text-gray-700 mb-4">
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

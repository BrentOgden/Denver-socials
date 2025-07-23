import React from 'react';

export default function About({ id = "about" }) {
    return (
        <section id={id} className="py-24 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl text-primary">Welcome to Denver Socials</h2>
                <p className="mt-6 text-lg">
                    Denver Socials LLC is a community-first networking group that hosts social gatherings to support local nonprofits and impact-oriented organizations. From professional mixers and themed pop-ups to immersive networking nights, our events are designed to help people connect—while giving back to causes that matter.
                    The <strong>majority of net proceeds</strong> from our sponsored events are donated to <strong>local 501(c)(3) nonprofit organizations</strong>.
                </p>
            </div>
        </section>
        
    );
}

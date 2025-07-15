// src/layouts/LandingLayout.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import EventsGrid from '../components/EventsGrid';
import Impact from '../components/Impact';
import SubscribeForm from '../components/SubscribeForm';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar'
import ImageGrid from '../components/ImageGrid';
import ScrollToTopArrow from '../components/scrollToTopArrow';
import { useAssetImages } from '../hooks/useAssetImages'

// import img1 from '../assets/2025-01-31-2.jpg';
// import img2 from '../assets/2025-01-31-3.jpg';
// import img3 from '../assets/2025-01-31-4.jpg';
// import img4 from '../assets/2025-01-31.jpg';
// import img5 from '../assets/imggolf.jpg';
// import img6 from '../assets/imggolf2.jpg';
// import img7 from '../assets/highres_523940228.jpeg';
// import img8 from '../assets/highres_524802971.jpeg';
// import img9 from '../assets/highres_524810429.jpeg';
// import img10 from '../assets/highres_528346876.jpeg';
// import img11 from '../assets/highres_528346912.jpeg';
// import img12 from '../assets/highres_525166610.jpeg';


// const images = [
//     { src: img1, alt: 'Top Golf for Top Causes', caption: '' },
//     { src: img2, alt: 'Putts for Prosperity', caption: '' },
//     { src: img3, alt: 'Glass Half Full – Wine Wednesday', caption: '' },
//     { src: img4, alt: 'Glass Half Full – Wine Wednesday', caption: '' },
//     { src: img5, alt: 'Glass Half Full – Wine Wednesday', caption: '' },
//     { src: img6, alt: 'Glass Half Full – Wine Wednesday', caption: '' },
//     { src: img7, alt: 'Putts for Prosperity', caption: '' },
//     { src: img8, alt: 'Glass Half Full – Wine Wednesday', caption: '' },
//     { src: img9, alt: 'Glass Half Full – Wine Wednesday', caption: '' },
//     { src: img10, alt: 'Glass Half Full – Wine Wednesday', caption: '' },
//     { src: img11, alt: 'Glass Half Full – Wine Wednesday', caption: '' },
//     { src: img12, alt: 'Glass Half Full – Wine Wednesday', caption: '' },

// ];
const images = useAssetImages()
export default function LandingLayout() {
    return (
        <div className="pt-16">
            <Navbar />
            <Hero id="hero" />
            <About id="about" />
            <ImageGrid id="imagegrid" images={images} />
            <EventsGrid id="events" />
            <Impact id="impact" />
            <SubscribeForm id="subscribe" />
              <ScrollToTopArrow />
            <Footer />
        </div>
    );
}

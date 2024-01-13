import React, { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { ImportantInformation } from './components/ImportantInformation';
import { Schedule } from './components/Schedule';
import { Location } from './components/Location';
import { Accommodation } from './components/Accommodation';
import { RSVP } from './components/RSVP';
import { OurStory } from './components/OurStory';
import { Footer } from './components/Footer';
import Section from './components/Section';

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShow(scrollY > 200);
    };
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href="#"
      className={`${
        show ? 'opacity-100 h-10 w-10' : 'opacity-0 h-0 w-0'
      } cursor-pointer fixed h-10 w-10 border-nandor-400 border-2 border-solid bottom-8 right-8 z-50 transition-all flex items-center justify-center text-nandor-400 bg-white`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
      </svg>
    </a>
  );
}
function App() {
  return (
    <div className="w-full ">
      <Hero />
      <OurStory />
      <Section highlight>
        <Nav />
      </Section>
      <Section title="RSVP" id="rsvp">
        <RSVP />
      </Section>
      <Section highlight title={'Important Information'} id="information">
        <ImportantInformation />
      </Section>
      <Section title="Location & Accommodation" id="location">
        <Location />
      </Section>
      <Section highlight title={'Schedule'} id="schedule">
        <Schedule />
      </Section>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

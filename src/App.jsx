import React from 'react';
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
import { BackToTop } from './components/BackToTop';
import checker from './assets/checker.PNG';

function App() {
  return (
    <div className="w-full ">
      <Hero />

      {/* <div className="relative ">
        <img src={checker} className="absolute -left-8 top-20 h-[528px]  opacity-10" />
      </div> */}
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

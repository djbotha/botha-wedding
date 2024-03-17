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

function App() {
  return (
    <div className="w-full ">
      <Hero />

      <Section>
        <OurStory />
      </Section>
      <Section highlight>
        <Nav />
      </Section>
      <Section title={'Important Information'} id="information">
        <ImportantInformation />
      </Section>
      <Section highlight title="RSVP" id="rsvp">
        <RSVP />
      </Section>
      <Section title="Location & Accommodation" id="location">
        <Location />
      </Section>
      <Section highlight title={'Schedule'} id="schedule">
        <Schedule />
      </Section>
      <Section>
        <Footer />
      </Section>
      <BackToTop />
    </div>
  );
}

export default App;

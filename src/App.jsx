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

function App() {
  return (
    <div className="h-screen w-full">
      <Hero />
      <OurStory />
      <Nav />
      {/* <RSVP />
      <Location />
      <ImportantInformation />
      <Schedule /> */}
      <Footer />
    </div>
  );
}

export default App;

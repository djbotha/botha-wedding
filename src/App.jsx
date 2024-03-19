import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { ImportantInformation } from './components/ImportantInformation';
import { Schedule } from './components/Schedule';
import { Accommodation } from './components/Accommodation';
import { RSVP } from './components/RSVP';
import { Footer } from './components/Footer';
import Section from './components/Section';
import { BackToTop } from './components/BackToTop';
import trees from './assets/abstract/trees.JPEG';
import rocks2 from './assets/abstract/rocks2.PNG';
import rocks from './assets/abstract/rocks.PNG';
import clouds from './assets/abstract/clouds.PNG';
import accommodation from './assets/covers/accommodation.PNG';
import rsvp from './assets/covers/rsvp.PNG';
import important from './assets/covers/important.JPEG';
import onTheDay from './assets/covers/on-the-day.JPEG';

function App() {
  return (
    <div className="w-full ">
      <Hero />

      <Section highlight>
        <Nav />
      </Section>
      <Section
        title={
          <div>
            Important
            <br />
            Information
          </div>
        }
        id="information"
        sidebar={trees}
        cover={important}
      >
        <ImportantInformation />
      </Section>
      <Section highlight title="RSVP" id="rsvp" right sidebar={rocks} cover={rsvp}>
        <RSVP />
      </Section>
      <Section title="Accommodation" id="location" sidebar={clouds} cover={accommodation}>
        <Accommodation />
      </Section>
      <Section highlight title={'On The Day'} id="schedule" sidebar={rocks2} cover={onTheDay} right>
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

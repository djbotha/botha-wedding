import React from 'react';
import rsvp from '../assets/rsvp.jpg';
import schedule from '../assets/schedule.jpg';
import location from '../assets/location.jpg';
import info from '../assets/info.jpg';

function NavItem({ title, img, target }) {
  return (
    <a className="relative flex cursor-pointer flex-col rounded-t-full p-2 " href={`#${target}`}>
      <img src={img} className="h-80 w-48 rounded-full object-cover shadow-2xl " />
      <div
        className="
        shrink-1
        relative
        -right-40
        grow-0
        -rotate-90
        text-sm "
        style={{ transformOrigin: 'left' }}
      >
        <span className=" bg-tuatara-700 absolute  whitespace-nowrap px-2 py-1 text-slate-200">{title}</span>
      </div>
    </a>
  );
}

export function Nav() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center " id="nav">
      <NavItem title="Important Information" target="information" img={info} />
      <NavItem title="RSVP" target="rsvp" img={rsvp} />
      <NavItem title="Location & Accommodation" target="location" img={location} />
      <NavItem title="On The Day" target="schedule" img={schedule} />
    </div>
  );
}

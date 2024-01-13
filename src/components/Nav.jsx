import React from 'react';
import rsvp from '../assets/rsvp.jpg';
import schedule from '../assets/schedule.jpg';
import location from '../assets/location.jpg';
import info from '../assets/info.jpg';

function NavItem({ title, img, target }) {
  return (
    <a className="rounded-t-full flex flex-col relative px-4 cursor-pointer " href={`#${target}`}>
      <img src={img} className="h-80 w-48 object-cover rounded-full  " />
      <div
        className="-rotate-90 grow-0 shrink-1 relative
        -right-40
      text-sm "
        style={{ transformOrigin: 'left' }}
      >
        <span className=" bg-nandor-500  text-slate-200 py-1 px-2">{title}</span>
      </div>
    </a>
  );
}

export function Nav() {
  return (
    <div className="w-full flex justify-center items-center bg-nandor-50 py-8">
      <NavItem title="RSVP" target="rsvp" img={rsvp} />
      <NavItem title="Important Information" target="information" img={info} />
      <NavItem title="Location & Accommodation" target="location" img={location} />
      <NavItem title="Schedule on the Day" target="schedule" img={schedule} />
    </div>
  );
}

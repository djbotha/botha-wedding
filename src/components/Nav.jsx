import React from 'react';
import rsvp from '../assets/rsvp.JPEG';
import schedule from '../assets/schedule.PNG';
import location from '../assets/location.PNG';
import info from '../assets/info.jpg';

function NavItem({ title, img, target }) {
  return (
    <a className="relative m-2 flex cursor-pointer flex-col rounded-t-full " href={`#${target}`}>
      <img src={img} className="h-80 w-40 rounded-sm object-cover shadow-2xl" />
      <div
        className="
        font-handwritten
        text-tuatara-50
        absolute
        -bottom-2
        right-4
        -rotate-90
        text-sm uppercase
        "
        style={{ transformOrigin: 'left' }}
      >
        <span className=" bg-tuatara-800 absolute whitespace-nowrap  px-2 pt-1 text-slate-200 ">{title}</span>
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

import React from 'react';
import rsvp from '../assets/rsvp.jpg';
import schedule from '../assets/schedule.jpg';
import location from '../assets/location.jpg';
import info from '../assets/info.jpg';

function NavItem({ title, img }) {
  return (
    <div className="rounded-t-full flex flex-col relative px-4 cursor-pointer ">
      {/* <div
        className="
        absolute
        top-6
      text-sm text-slate-200"
      >
        <span className=" bg-nandor-500  py-1 px-2">{title}</span>
      </div> */}
      <img src={img} className="h-80 w-48 object-cover rounded-full" />
      <div
        className="-rotate-90 grow-0 shrink-1 relative
        -right-40
      text-sm text-slate-200"
        style={{ transformOrigin: 'left' }}
      >
        <span className=" bg-nandor-500  py-1 px-2">{title}</span>
      </div>
    </div>
  );
}

export function Nav() {
  return (
    <div className="w-full flex justify-center items-center">
      <NavItem title="RSVP" img={rsvp} />
      <NavItem title="Important Information" img={info} />
      <NavItem title="Location & Accommodation" img={location} />
      <NavItem title="Schedule on the Day" img={schedule} />
    </div>
  );
}

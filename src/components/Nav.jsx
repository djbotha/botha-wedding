import React from 'react';

function Nav() {
  return (
    <div className="absolute top-0 text-center text-white w-full">
      <ul className="flex flex-row py-8 px-8 lg:px-32 align-middle justify-between text-lg uppercase md:text-3xl">
        <li className="block">Our Story</li>
        <li className="block">The Venue</li>
        <li className="block">The Party</li>
        <li className="block">RSVP</li>
      </ul>
    </div>
  );
}

export default Nav;

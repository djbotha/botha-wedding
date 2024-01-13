import React from 'react';
import heroImage from '../assets/Hero.jpg';
import logoWhite from '../assets/logo-white.PNG';

export function Hero() {
  return (
    <div className="w-full h-96 relative">
      <img src={heroImage} className="w-full h-full absolute top-o left-0 object-cover " />
      <div className="h-full w-full bg-black bg-opacity-40 z-10 absolute">
        <img src={logoWhite} className="w-full h-1/2 absolute  top-1/2 -translate-y-1/2 z-10 object-contain" />
      </div>
    </div>
  );
}

import React from 'react';
import heroImage from '../assets/Hero.jpg';
import logoWhite from '../assets/logo-white.PNG';

export function Hero() {
  return (
    <div className="relative h-[400px] w-full">
      <img src={heroImage} className="top-o absolute left-0 h-full w-full object-cover " />
      <div className="absolute z-10 h-full w-full bg-black bg-opacity-40">
        <img src={logoWhite} className="absolute top-1/2 z-10  h-1/2 w-full -translate-y-1/2 object-contain opacity-80" />
      </div>
    </div>
  );
}

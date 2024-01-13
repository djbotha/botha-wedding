import React, { useEffect, useState } from 'react';

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShow(scrollY > 200);
    };
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href="#nav"
      className={`${
        show ? 'h-10 w-10 opacity-100' : 'h-0 w-0 opacity-0'
      } fixed bottom-8 right-8 z-50 flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-solid border-nandor-400 bg-white text-nandor-400 transition-all`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
      </svg>
    </a>
  );
}

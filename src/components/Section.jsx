import React from 'react';

function Section({ highlight, title, children, sidebar, right, cover, id, tight }) {
  return (
    <div className={`relative ${highlight ? 'bg-tuatara-50' : 'bg-tuatara-950'}`} id={id}>
      {cover && <img className={`max-h-[400px] w-full object-cover`} src={cover}></img>}
      <div className="relative flex justify-center">
        {title ? (
          <span
            className={`absolute inline-block -translate-y-1/2 overflow-hidden  px-2 py-2 font-santis text-2xl uppercase ${
              highlight ? 'text-tuatara-950' : 'text-tuatara-50'
            } drop-shadow-2xl ${
              highlight ? '[text-shadow:_1px_1px_0_rgb(255_255_255_/_42%)]' : '[text-shadow:_1px_1px_0_rgb(0_0_0_/_80%)]'
            }  md:text-5xl  lg:text-7xl`}
          >
            {title}
          </span>
        ) : null}
        {sidebar && !right && <div className={`  flex-1 bg-cover bg-center`} style={{ backgroundImage: `url('${sidebar}')` }}></div>}
        <div
          className={` ${tight ? 'p-2 py-8 md:px-2' : 'px-2 py-8'} lg:pt-14 ${highlight ? 'text-tuatara-800' : 'text-tuatara-200'} ${
            sidebar ? 'flex-[6]' : ''
          }`}
        >
          {children}
        </div>
        {sidebar && right && <div className={`  flex-1 bg-cover bg-center`} style={{ backgroundImage: `url('${sidebar}')` }}></div>}
      </div>
    </div>
  );
}

export default Section;

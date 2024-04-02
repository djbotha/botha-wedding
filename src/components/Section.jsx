import React from 'react';

function Section({ highlight, title, children, sidebar, right, cover, id }) {
  return (
    <div className={`relative ${highlight ? 'bg-tuatara-50' : 'bg-tuatara-950'}`} id={id}>
      {cover && <img className={`max-h-[400px] w-full object-cover`} src={cover}></img>}
      <div className="relative flex justify-center">
        {title ? (
          <span
            className={`absolute inline-block px-2  py-2 font-santis text-4xl uppercase text-tuatara-50 drop-shadow-2xl [text-shadow:_1px_1px_0_rgb(0_0_0_/_80%)]  lg:text-7xl ${
              right ? '-' : ''
            }left-1/4 -translate-y-1/2`}
          >
            {title}
          </span>
        ) : null}
        {sidebar && !right && <div className={`  flex-1 bg-cover bg-center`} style={{ backgroundImage: `url('${sidebar}')` }}></div>}
        <div className={`px-2 py-8 ${highlight ? 'text-tuatara-800' : 'text-tuatara-200'} ${sidebar ? 'flex-[6]' : ''}`}>{children}</div>
        {sidebar && right && <div className={`  flex-1 bg-cover bg-center`} style={{ backgroundImage: `url('${sidebar}')` }}></div>}
      </div>
    </div>
  );
}

export default Section;

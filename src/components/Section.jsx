import React from 'react';

function Section({ highlight, title, children, sidebar, right, cover, id }) {
  return (
    <div className={`relative ${highlight ? 'bg-tuatara-100' : 'bg-tuatara-950'}`} id={id}>
      {cover && <img className={`max-h-[400px] w-full object-cover`} src={cover}></img>}
      <div className="relative flex justify-center">
        {title ? (
          <span
            className={`bg-tuatara-700 inline-block  px-2 py-2 text-xl ${highlight ? 'text-tuatara-100' : 'text-slate-200'} absolute -top-4 left-0`}
          >
            {title}
          </span>
        ) : null}
        {sidebar && !right && <div className={`  flex-1 bg-cover bg-center`} style={{ backgroundImage: `url('${sidebar}')` }}></div>}
        <div className={`px-2 py-8 ${highlight ? 'text-tuatara-900' : 'text-tuatara-300'} ${sidebar ? 'flex-[6]' : ''}`}>{children}</div>
        {sidebar && right && <div className={`  flex-1 bg-cover bg-center`} style={{ backgroundImage: `url('${sidebar}')` }}></div>}
      </div>
    </div>
  );
}

export default Section;

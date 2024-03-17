import React from 'react';

function Section({ highlight, title, children, sidebar, right, cover, id }) {
  return (
    <div className={`relative ${'bg-tuatara-950'}`} id={id}>
      {cover && <img className={`max-h-[400px] w-full object-cover`} src={cover}></img>}
      <div className="relative flex justify-center">
        {title ? (
          <span
            className={`font-santis inline-block px-2  py-2 text-3xl uppercase lg:text-7xl ${'text-tuatara-50'} absolute drop-shadow-2xl  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ${
              right ? '-' : ''
            }left-1/4 -translate-y-1/2`}
          >
            {title}
          </span>
        ) : null}
        {sidebar && !right && <div className={`  flex-1 bg-cover bg-center`} style={{ backgroundImage: `url('${sidebar}')` }}></div>}
        <div className={`text-tuatara-200 px-2 py-8 ${sidebar ? 'flex-[6]' : ''}`}>{children}</div>
        {sidebar && right && <div className={`  flex-1 bg-cover bg-center`} style={{ backgroundImage: `url('${sidebar}')` }}></div>}
      </div>
    </div>
  );
}

export default Section;

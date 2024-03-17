import React from 'react';
import paper from '../assets/paper.jpg';

function Section({ highlight, title, children, id }) {
  return (
    <div className={`relative ${highlight ? '' : 'bg-tuatara-950'}`} id={id}>
      {!!highlight && <img src={paper} className="absolute -z-10 h-full w-full object-cover" />}
      {title ? <span className={`bg-tuatara-700  px-2 py-1 ${highlight ? 'text-tuatara-100' : 'text-slate-200'}`}>{title}</span> : null}
      <div className="py-8">{children}</div>
    </div>
  );
}

export default Section;

import React from 'react';

function Section({ highlight, title, children, id }) {
  return (
    <div className={`${highlight ? 'bg-nandor-50' : ''} `} id={id}>
      {title ? <span className="bg-nandor-500  text-slate-200 py-1 px-2">{title}</span> : null}
      {children}
    </div>
  );
}

export default Section;

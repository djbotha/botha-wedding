import React from 'react';

const timeline = [
  {
    date: new Date(2009, 0, 1),
    title: 'We Met',
    image: '',
  },
  {
    date: new Date(2010, 0, 1),
    title: 'Nadia Fell',
    image: '',
  },
  {
    date: new Date(2011, 0, 1),
    title: 'Best Friends',
    image: '',
  },
  {
    date: new Date(2020, 0, 1),
    title: 'Best Friends',
    image: '',
  },
  {
    date: new Date(2020, 5, 12),
    title: 'Daniël Skrik Wakker',
    image: '',
  },
  {
    date: new Date(2021, 1, 20),
    title: 'First Kiss',
    image: '',
  },
  {
    date: new Date(2021, 2, 16),
    title: "We're Official",
    image: '',
  },
  {
    date: new Date(2023, 9, 8),
    title: 'Engaged',
    image: '',
  },
  {
    date: new Date(2024, 5, 22),
    title: 'Getting Married',
    image: '',
  },
];

const maxDate = new Date(2024, 5, 22);
const minDate = new Date(2009, 0, 1);

function TimelineNode({ node, idx }) {
  const even = idx % 2 === 0;
  const progression = ((node.date - minDate) / (maxDate - minDate)) * 100;

  return (
    <div
      className={`absolute flex flex-col items-center ${even ? '-top-1/2' : 'top-1/2'}`}
      style={{
        left: `${progression}%`,
      }}
    >
      {even ? <div className="my-2 text-xs whitespace-nowrap">{node.title}</div> : null}
      <div className={`rounded-full h-20 w-20 border-solid border-black border-2 bg-white shadow-lg`}></div>
      {even ? null : <div className="my-2 text-xs whitespace-nowrap">{node.title}</div>}
    </div>
  );
}

function Timeline() {
  return (
    <div className="my-16 relative h-20 mx-32">
      <div className="border-b-black border-b-2 absolute w-full inset-y-1/2"></div>
      <div className="absolute w-full h-20">
        {timeline.map((node, idx) => (
          <TimelineNode node={node} idx={idx} />
        ))}
      </div>
    </div>
  );
}

export function OurStory() {
  return (
    <div className="h-48">
      {/* <Timeline /> */}
      {/* OurStory */}
    </div>
  );
}

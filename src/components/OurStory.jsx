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
      {even ? <div className="my-2 whitespace-nowrap text-xs">{node.title}</div> : null}
      <div className={`h-20 w-20 rounded-full border-2 border-solid border-black bg-white shadow-lg`}></div>
      {even ? null : <div className="my-2 whitespace-nowrap text-xs">{node.title}</div>}
    </div>
  );
}

function Timeline() {
  return (
    <div className="relative mx-32 my-16 h-20">
      <div className="absolute inset-y-1/2 w-full border-b-2 border-b-black"></div>
      <div className="absolute h-20 w-full">
        {timeline.map((node, idx) => (
          <TimelineNode node={node} idx={idx} />
        ))}
      </div>
    </div>
  );
}

export function OurStory() {
  return (
    <div className="flex items-center justify-center py-8">
      {/* <Timeline /> */}
      <div className="text-tuatara-300 p-8 text-center md:w-1/2 md:p-0">
        <p className="mb-4">
          Back in Grade 6, Daniël and Nadia's friendship sparked over chocolate Milky Mouse ice cream triangles in a secret tree hideaway. Amidst
          teenage twists and turns, miscommunication led to heartbreak, but their bond endured.
        </p>
        <p className="mb-4">
          Fast forward to 2021, a quirky coffee date hinted at deeper feelings, and in December, Nadia declared, "I'm going to marry this man." An
          amusing encounter with Daniël's best friend solidified the connection, leading to a heartfelt proposal after 18 months.
        </p>
        <p>Their love story continues, promising laughter and love in abundance. 💍</p>
      </div>
    </div>
  );
}

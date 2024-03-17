import React, { useState } from 'react';

function RSVPEmbed() {
  return (
    <div className="mx-auto flex max-w-[640px] justify-center">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeydZkXyL9eLTL5GYe0wnHFifcX_skAqeebQjWx0goa-39-_g/viewform?embedded=true"
        height="1154"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        style={{
          width: '100%',
        }}
      >
        Loading…
      </iframe>
    </div>
  );
}

export function RSVP() {
  const [showRSVP, setShowRSVP] = useState(false);
  return (
    <div className="flex justify-center p-8">
      <div className="md:w-1/2">
        <p className="mx-auto mb-4 ">We would love to have you attend our wedding!</p>
        <b>Information</b>
        <ul className="mb-4  list-disc">
          <li>To confirm your attendance, please RSVP by clicking the button in the following section.</li>
          <li>
            To help us with our planning, we ask that you kindly RSVP by <b>22 May 2024</b>.
          </li>
          <li>
            If we don't receive your RSVP by the <b>date specified</b>, we cannot make any exceptions and will have to mark you as 'no'.
          </li>
          <li>Please include all names of attendees in your response.</li>
          <li>
            Unfortunately, we cannot accommodate <b>additional guests</b>, we can only accommodate those formally invited on your wedding invitation.
          </li>
          <li>
            We love your little ones as much as you do! However, we have decided to keep our wedding as an <b>adult only</b> event.
          </li>
        </ul>

        <div>Please RSVP by clicking the button below and filling out the form.</div>

        <a
          href={'https://forms.gle/3TDucKuQdkEaquXQ7'}
          className="bg-tuatara-700 mx-auto my-8 flex items-center justify-center rounded-md px-6 py-4 text-lg text-slate-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 h-6 w-6 flex-grow-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
          RSVP
        </a>
        {showRSVP ? <RSVPEmbed /> : null}
      </div>
    </div>
  );
}

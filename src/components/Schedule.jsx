import React from 'react';

export function Schedule() {
  return (
    <div className="flex justify-center p-8">
      <div className="justify-center lg:w-1/2 lg:p-0">
        <div className="mb-4">
          <b>Date & Time</b>
          <ul className="list-inside list-disc">
            <li>22 June 2024</li>
            <li>14:00 for 14:30</li>
          </ul>
        </div>
        <p className="mb-4">More details coming soon...</p>
      </div>
    </div>
  );
}

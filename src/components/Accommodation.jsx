import React from 'react';
import AccommodationImg from '../assets/accommodation.png';

export function Accommodation() {
  return (
    <div className="flex justify-center p-8">
      <div className="justify-center lg:w-1/2 lg:p-0">
        <div className="mb-4">
          <p className="mb-4">
            We're excited to host our wedding at the picturesque Belair Pavilion in Paarl, Western Cape. Below, you'll find details about the venue
            and accommodation options for your convenience.
          </p>
          <b>Venue</b>
          <ul className="list-inside list-disc">
            <li>Belair Pavilion, Paarl, Western Cape</li>
            <li>
              <a href="https://maps.app.goo.gl/kZLgXPY1VVxY7o8E8" className="underline" target="_blank">
                Google Maps
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-4">
            <b>Accommodation</b>
            <p className="mb-4">
              There is ample accommodation available both at and near the venue. Please refer to the attached list{' '}
              <a href={AccommodationImg} target="_blank" className="underline">
                here
              </a>{' '}
              for a selection of nearby options.
            </p>
            <p className="mb-4">
              Should you have any questions or require further assistance regarding accommodation, please don't hesitate to reach out to us. We can't
              wait to celebrate this joyous occasion with you at Belair!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

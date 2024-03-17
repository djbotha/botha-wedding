import React from 'react';

export function ImportantInformation() {
  return (
    <div className="flex justify-center">
      <div className="text-tuatara-300 justify-center p-8 text-center md:w-1/2 md:p-0">
        <p className="mb-4">
          Welcome to Daniël and Nadia's wedding celebration! We're thrilled to have you join us for this special occasion. Below, you'll find
          essential details to ensure your attendance is seamless.
        </p>
        <p className="mb-4">
          <b>Location</b>
          <ul>
            <li>Belair Pavilion, Paarl</li>
          </ul>
        </p>
        <p className="mb-4">
          <b>Date &amp; Time</b>
          <ul>
            <li>June 22, 2024 at 14:30</li>
          </ul>
        </p>
        <p className="mb-4">
          <b>Dress Code</b>
          <ul>
            <li>We kindly request that all guests adhere to a formal dress code.</li>
            <li>All black attire is requested, with black-tie optional. Please refrain from wearing white or any other colors.</li>
            <li>
              For inspiration, feel free to explore our Pinterest board{' '}
              <b className="hover:underline">
                <a href="https://za.pinterest.com/nadiastroh01/guests-moodboard/">here</a>
              </b>
              .
            </li>
          </ul>
        </p>
        <p className="mb-4">
          <b>RSVP</b>
          <ul>
            <li>
              To confirm your attendance, please RSVP by clicking the button in the following section. Your response is greatly appreciated to assist
              us in finalizing arrangements for the day. Thank you for your attention to these important details. We look forward to celebrating with
              you on our special day!
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

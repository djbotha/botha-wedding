import React from 'react';

export function Schedule() {
  return (
    <div className="flex justify-center p-8">
      <div className="justify-center  lg:w-1/2 lg:p-0">
        <p className="mb-4">
          Here are the details for the schedule, accommodation, and timings for the day. If you have any questions, please don't hesitate to call us!
        </p>
        <div className="mb-4">
          <b className="text-lg">Date &amp; Time</b>
          <ul className="list-inside list-disc">
            <li>
              <b>Date:</b> 22 June 2024
            </li>
            <li>
              <b>Time:</b> 14:00 for 14:30
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <b className="text-lg">Accommodation</b>
          <p className="mb-2">For those that booked accommodation at the venue, here are some important details.</p>
          <ul className="list-inside list-disc">
            <li>
              <b>Check-In Time:</b> Between 14:00 and 18:00 (We recommend checking in before the ceremony).
            </li>
            <li>
              <b>Location:</b> On-site, a quick 5-minute walk from the ceremony area.
            </li>
            <li>
              <b>Complimentary Breakfast:</b> At the Goatshed Restaurant at Fairview from 09:00 to 11:00 on Sunday.
            </li>
            <li>
              <b>Note:</b> Please keep your room keys with you at all times.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <b className="text-lg">Schedule</b>
          <ul className="list-inside list-disc">
            <li>
              <b>Guests Arrival:</b> 14:00
            </li>
            <li>
              <b>Ceremony:</b> 15:00
            </li>
            <li>
              <b>Pre-drinks:</b> 15:45 - 17:30
            </li>
            <li>
              <b>Reception:</b> 17:30 - 23:00
            </li>
          </ul>
        </div>
        <p>Thank you for your attention to these important details. We look forward to celebrating with you on our special day!</p>
      </div>
    </div>
  );
}

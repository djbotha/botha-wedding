import React from 'react';

export function ImportantInformation() {
  return (
    <div className="flex justify-center p-8">
      <div className="justify-center  lg:w-1/2 lg:p-0">
        <p className="mb-4">
          We're thrilled to have you join us for this special occasion. Below, you'll find essential details to ensure your attendance is seamless.
        </p>
        <div className="mb-4">
          <b>Location</b>
          <ul className="list-outside list-disc">
            <li>Belair Pavilion, Paarl</li>
          </ul>
        </div>
        <div className="mb-4">
          <b>Date &amp; Time</b>
          <ul className="list-outside list-disc">
            <li>22 June 2024 at 14:30</li>
          </ul>
        </div>
        <div className="mb-4">
          <b>Dress Code</b>
          <ul className="list-outside list-disc">
            <li>
              We kindly request that all guests adhere to a <b>formal dress code</b>.
            </li>
            <li>
              <b>All black attire</b> is requested, with black-tie optional.
            </li>
            <li>
              Please <b>refrain</b> from wearing <b>white</b> or any other colors. This includes accessories and gents' shirts!
            </li>
            <li>
              For inspiration, feel free to explore our Pinterest board{' '}
              <b className="underline">
                <a href="https://za.pinterest.com/nadiastroh01/guests-moodboard/">here</a>
              </b>
              .
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <b>Gifts & Registry</b>
          <ul className="list-outside list-disc">
            <li>
              For those who wish to celebrate with a gift, we have created a registry to make it easier for you to choose something special that we'll
              cherish for years to come.
            </li>
            <li>
              Please note that we kindly ask guests to select gifts exclusively from our registry, or alternatively, consider giving cash or vouchers.
            </li>
            <li>
              To view our registry and explore gift options, please visit{' '}
              <b className="underline">
                <a href="https://yuppiechef.com/yc7473334">Yuppiechef</a>
              </b>
              .
            </li>
          </ul>
        </div>
        <p>Thank you for your attention to these important details. We look forward to celebrating with you on our special day!</p>
      </div>
    </div>
  );
}
